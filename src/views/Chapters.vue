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
					<v-avatar color="grey" size="40" class="profileAvatar"></v-avatar>
					<v-btn text class="profileTitle" small to="/dashboard">Profile</v-btn>
				</div>

				<div class="header">
					<h1 class="lessonHeader">{{ this.lesson.name }}</h1>
					<div class="lessonProgress">
						<v-btn color="success" rounded>
							Resume
						</v-btn>

						<v-progress-linear
							v-model="overallProgress"
							color="success"
							height="15"
							radius="20"
						>
							<template v-slot:default="{ value }">
								<strong>{{ Math.ceil(value) }}%</strong>
							</template>
						</v-progress-linear>
					</div>
				</div>

				<div class="chapters">
					<div class="chapterheader">
						<div class="chapCon">
							<div class="chapterNumber">
								<h3>Chapter</h3>
							</div>
							<div class="chapterName"></div>
						</div>
						<div class="chapterTutorial">
							<h3>Tutorial</h3>
						</div>

						<div class="chapterExercise">
							<h3>Exercise</h3>
						</div>
					</div>

					<v-list>
						<v-list-item
							class="chapter"
							v-for="(chapter, value) in this.lesson.chapter"
							:key="value"
							link
							:disabled="chapter.tutorial_status == 'Locked'"
						>
							<div class="chapCon">
								<div class="chapterNumber">
									<h2>{{ chapter.chapter_number }}</h2>
								</div>
								<div class="chapterName">
									<h2>{{ chapter.chapter_name }}</h2>
								</div>
							</div>
							<div class="chapterTutorial">
								<p>{{ chapter.tutorial_status }}</p>
							</div>

							<div class="chapterExercise">
								<p>{{ chapter.exercise_status }}</p>
							</div>
						</v-list-item>
					</v-list>
				</div>

				<div class="continueBtn">
					<v-btn text color="black" x-small to="/lessons">
						← Go back to lessons.</v-btn
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import lessonAPI from "../api/lessonAPI";
	export default {
		data: () => ({
			progress: 0,
			lesson: {},
			items: [
				{ title: "Dashboard", icon: "mdi-view-dashboard" },
				{ title: "Photos", icon: "mdi-image" },
				{ title: "About", icon: "mdi-help-box" },
			],
			fetched: false,
			loading: true,
			error: false,
		}),
		methods: {
			async reload() {
				try {
					const lessons = await lessonAPI.prototype.getAllLessons();
					lessons.data.lessons.forEach((element) => {
						if (
							element.name == this.$route.params.lessonName.replaceAll("_", " ")
						) {
							this.lesson = element;
						}
					});
					this.loading = false;
					this.fetched = true;
					console.log(this.lesson);
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
					const lessons = await lessonAPI.prototype.getAllLessons();
					lessons.data.lessons.forEach((element) => {
						if (
							element.name == this.$route.params.lessonName.replaceAll("_", " ")
						) {
							this.lesson = element;
						}
					});
					this.loading = false;
					this.fetched = true;
					console.log(this.lesson);
				} catch (error) {
					this.error = true;
				}
			}
		},

		computed: {
			overallProgress: function() {
				this.lesson.chapter.forEach((element) => {
					if (element.tutorial_status == "Completed") {
						this.progress += 5;
					}
					if (element.exercise_status == "Passed") {
						this.progress += 5;
					}
				});

				console.log(this.lesson.chapter);
				console.log(this.progress);
				console.log(this.lesson.chapter.length * 10);
				return (this.progress / (this.lesson.chapter.length * 10)) * 100;
			},
		},
	};
</script>

<style scoped>
	.bigContainer {
		height: 100%;
		width: 100%;
		background-color: #f7f7f7;
		color: #3b3b3b;
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
		margin: 0px auto;
		border-radius: 20px;

		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
		padding: 10px 80px;
	}

	.profile {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 10px 0px;
	}

	.profileTitle {
		margin: 5px;
	}

	.lessonHeader {
		margin-top: 20px;
	}

	.lessonProgress {
		display: flex;
		align-items: center;
		width: 60%;
		margin: 15px;
	}

	.v-progress-linear {
		border-radius: 20px;
		margin: 15px 15px;
	}

	.chapters {
		margin: 40px;
		margin-bottom: 0px;
	}

	.chapterheader {
		display: flex;
		width: 100%;
		margin: 10px 0px;
	}

	.chapter {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px 0px;
	}

	.chapter p {
		padding: 0px;
		margin: 0px;
	}

	.chapCon {
		display: flex;
		align-items: center;
	}

	.chapterTutorial,
	.chapterExercise {
		width: 15%;
		text-align: center;
	}
	.chapCon {
		width: 70%;
		text-align: center;
		display: flex;
	}
	.chapterName,
	.chapterNumber {
		text-align: center;
	}

	.chapterNumber {
		width: 20%;
	}

	.chapterTutorial p,
	.chapterExercise p {
		font-size: 12px;
		font-weight: bolder;
	}

	h2,
	p {
		color: #3b3b3b;
	}

	.continueBtn {
		text-align: left;
		font-weight: bolder;
		margin: 10px 0px;
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
