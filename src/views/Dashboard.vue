<template>
	<div class="bigContainer">
		<div class="loading" v-if="loading">
			<v-progress-circular
				:width="10"
				:size="100"
				color="green"
				indeterminate
			></v-progress-circular>
		</div>

		<div class="err" v-if="error">
			<h2>An error has occured</h2>
			<v-btn x-large @click="reload">Reload</v-btn>
		</div>

		<div class="fetched" v-if="fetched">
			<div class="imageCon"><img src="../assets/Picture1.png" alt="" /></div>

			<div class="main">
				<div class="profile">
					<h2 class="profileTitle">Profile</h2>
					<v-avatar color="grey" size="150"
						><img src="../assets/yow.jpg" alt=""
					/></v-avatar>
					<h2>{{ this.user.name.firstName }} {{ this.user.name.lastName }}</h2>
					<p>{{ this.user.gender }} | {{ this.user.age }}</p>
					<div>
						<v-btn color="success" to="/lessons">GO TO LESSONS</v-btn>
					</div>

					<v-btn text color="black" class="logout" @click="logOut"
						>LOG OUT</v-btn
					>
				</div>
				<div class="dashboard">
					<h2 class="dashboardTitle">Dashboard</h2>
					<div class="progress">
						<h3>Overall Progress</h3>
						<div>
							<v-progress-linear
								v-model="overallProgress"
								color="success"
								height="25"
								radius="20"
							>
								<template v-slot:default="{ value }">
									<strong>{{ Math.ceil(value) }}%</strong>
								</template>
							</v-progress-linear>
						</div>
						{{ getCheckpoint }}
						<div class="continueBtn">
							<v-btn text color="black" x-small v-if="checkpoint" to="/lessons">
								Continue where you left of →</v-btn
							>
						</div>
					</div>

					<div class="recentActivity" v-if="!checkpoint">
						<h3>Recent Activity</h3>
						<div class="emptyContent">
							<img src="../assets/empty.png" alt="" class="emptyImg" />
							<p>You have no activities yet.</p>
							<div>
								<v-btn color="success" to="/lessons" small
									>START LEARNING NOW</v-btn
								>
							</div>
						</div>
					</div>
					<div class="recentActivity" v-if="checkpoint">
						<h3>Recent Activity</h3>
						<p class="dateTitle">Date</p>
						<div class="inner">
							<div>
								<v-avatar color="grey" size="150" class="quizAvatar"></v-avatar>
							</div>

							<div class="content">
								<h3>Score</h3>
								<h2 :class="chapter.score < 8 ? 'err' : 'suc'">
									{{ chapter.score }}/10
								</h2>
								<p v-if="chapter.score < 8">
									You did not pass. You need to go back and learn
									{{ chapter.chapter_name }} in lesson
									{{ checkpoint.lesson_number }}: "{{ checkpoint.name }}".
								</p>

								<p v-if="chapter.score > 7">
									Congratulations you passed. You can now proceed to the next
									tutorial.
								</p>
								<div class="continueBtn">
									<v-btn text color="black" x-small to="/lessons">
										Learn Now →</v-btn
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import userAPI from "../api/userAPI";
	import lessonAPI from "../api/lessonAPI";

	export default {
		data: () => ({
			progress: 0,
			user: {},
			lessons: {},
			checkpoint: {},
			chapter: {},
			fetched: false,
			loading: true,
			error: false,
		}),
		methods: {
			logOut() {
				localStorage.removeItem("token");
				this.$router.push("/");
			},

			getChapterName() {
				this.lessons.forEach((element, index, array) => {
					element.chapter.forEach((el) => {
						if (el.chapter_number == this.user.checkpoint.chapter_number) {
							this.chapter = el;
							this.chapter.score = 7;
						}
					});
				});
			},
			async reload() {
				try {
					const data = await userAPI.prototype.getSpecificUser();
					const lessons = await lessonAPI.prototype.getAllLessons();
					this.lessons = lessons.data.lessons;
					this.user = data.data;
					this.loading = false;
					this.fetched = true;
					// console.log(this.user);
					// console.log(this.lessons);
				} catch (error) {
					this.error = true;
				}
			},
		},

		async created() {
			if (!localStorage.getItem("token")) {
				this.$router.push("/signin");
			} else {
				try {
					const data = await userAPI.prototype.getSpecificUser();
					const lessons = await lessonAPI.prototype.getAllLessons();
					this.user = data.data;
					this.lessons = lessons.data.lessons;
					this.loading = false;
					this.fetched = true;
					console.log(this.lessons);
				} catch (error) {
					this.error = true;
				}
			}
		},

		computed: {
			overallProgress: function() {
				this.lessons.forEach((element, index, array) => {
					element.chapter.forEach((el) => {
						if (el.tutorial_status == "Completed") {
							this.progress += 5;
						}
						if (el.exercise_status == "Passed") {
							this.progress += 5;
						}
					});
				});

				return (this.progress / 110) * 100;
			},

			getCheckpoint: function() {
				if (this.user.checkpoint) {
					this.lessons.forEach((element, index, array) => {
						if (
							element.name ==
							this.user.checkpoint.lesson_name.replaceAll("_", " ")
						) {
							console.log(element);
							this.checkpoint = element;
						}
					});
				} else {
					this.checkpoint = null;
				}
			},
		},
	};
</script>

<style scoped>
	.bigContainer {
		height: 100%;
		width: 100%;
		background-color: #f7f7f7;
	}

	.imageCon {
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}

	img {
		width: 150px;
	}

	.main {
		width: 85%;
		min-height: 600px;
		background-color: white;
		margin: 10px auto;
		border-radius: 20px;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	}

	.profile {
		width: 30%;
		padding: 40px;
		text-align: center;
		border-right: 1px dotted grey;
	}

	.v-avatar {
		margin: 40px 0px;
	}

	.logout {
		margin-top: 80px;
	}

	.dashboard {
		padding: 40px 100px;
		margin: 0px 20px;
		width: 70%;
	}

	.dashboardTitle {
		text-align: center;
	}

	.progress {
		padding: 30px 0px;
	}

	.v-progress-linear {
		border-radius: 20px;
		margin: 15px 0px;
	}

	.continueBtn {
		text-align: right;
	}

	.dateTitle {
		text-align: right;
		padding-top: 10px;
	}

	.inner {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.quizAvatar {
		margin: 10px 0px;
	}
	.content {
		padding: 10px 40px;
		padding-right: 0px;
	}

	.err {
		color: #e31f1f;
	}

	.suc {
		color: green;
	}

	.content p {
		padding: 20px 0px;
	}

	.emptyContent {
		text-align: center;
	}

	.emptyImg {
		width: 250px;
		margin: 20px;
	}

	.loading {
		height: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.err {
		height: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.err h2 {
		padding: 20px;
	}
</style>
