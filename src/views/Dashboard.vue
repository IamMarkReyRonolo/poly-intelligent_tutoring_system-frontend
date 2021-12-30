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
			{{ trigger }}
			<div class="imageCon"><img src="../assets/Picture1.png" alt="" /></div>
			<div class="main">
				<div class="profile">
					<h2 class="profileTitle">Profile</h2>
					<v-avatar color="grey" size="150"
						><img
							v-if="
								this.user.gender == 'Male' &&
									this.user.name.firstName != 'Mark Rey' &&
									this.user.name.lastName != 'Ronolo'
							"
							src="../assets/avatar-man.png"
							alt=""/>
						<img
							v-if="
								this.user.gender == 'Female' &&
									this.user.name.firstName != 'Fatima' &&
									this.user.name.lastName != 'Madrigal'
							"
							src="../assets/avatar-woman.png"
							alt=""/>

						<img
							v-if="
								this.user.name.firstName == 'Fatima' &&
									this.user.name.lastName == 'Madrigal'
							"
							src="../assets/picc1.jpg"
							alt=""/>
						<img
							v-if="
								this.user.name.firstName == 'Mark Rey' &&
									this.user.name.lastName == 'Ronolo'
							"
							src="../assets/picc2.jpg"
							alt=""
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
						{{ getChapterName }}
						<div class="continueBtn" v-if="overallProgress != 100">
							<v-btn
								text
								color="black"
								x-small
								v-if="checkpoint"
								:to="resumeProgress + '/chapters'"
							>
								Continue where you left of →</v-btn
							>
						</div>
					</div>

					<div
						class="recentActivity"
						v-if="!checkpoint && overallProgress != 100"
					>
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
					<div
						class="recentActivity"
						v-if="checkpoint && overallProgress != 100"
					>
						<h3>Recent Activity</h3>
						<p class="dateTitle">
							<b>
								Date:
								{{
									new Date(Date.parse(this.checkpoint.updatedAt))
										.toString()
										.split(" ")[0]
								}},
								{{
									new Date(Date.parse(this.checkpoint.updatedAt))
										.toString()
										.split(" ")[1]
								}}
								{{
									new Date(Date.parse(this.checkpoint.updatedAt))
										.toString()
										.split(" ")[2]
								}}
								{{
									new Date(Date.parse(this.checkpoint.updatedAt))
										.toString()
										.split(" ")[3]
								}}
								-
								{{
									new Date(
										Date.parse(this.checkpoint.updatedAt)
									).toLocaleString("en-US", {
										hour: "numeric",
										minute: "numeric",
										hour12: true,
									})
								}}
							</b>
						</p>
						<div class="inner">
							<div>
								<v-avatar color="grey" size="150" class="quizAvatar">
									<img
										v-if="this.checkpoint.name == 'Intro To Polynomials'"
										src="../assets/icon1.jpg"
										alt=""
									/>
									<img
										v-if="this.checkpoint.name == 'Polynomial Operations'"
										src="../assets/icon2.jpg"
										alt=""
									/>
									<img
										v-if="this.checkpoint.name == 'Solving Linear Polynomials'"
										src="../assets/icon3.jpg"
										alt=""
									/>
								</v-avatar>
							</div>

							<div class="content">
								<h3>Score</h3>
								<h2 :class="chapter.exercise_score < 8 ? 'er' : 'suc'">
									{{ chapter.exercise_score }}/10
								</h2>
								<p v-if="chapter.exercise_score < 8">
									You did not pass. You need to go back and learn
									<b
										>{{ chapter.chapter_name }} in lesson
										{{ checkpoint.lesson_number }}: "{{ checkpoint.name }}"</b
									>
									.
								</p>

								<p v-if="chapter.exercise_score > 7">
									Congratulations you passed
									<b>
										lesson
										{{ checkpoint.lesson_number }}: "{{ checkpoint.name }}, -
										{{ chapter.chapter_name }}."</b
									>
									You can now proceed to the next tutorial.
								</p>
								<div class="continueBtn">
									<v-btn
										text
										color="black"
										x-small
										:to="resumeProgress + '/chapters'"
										v-if="overallProgress != 100"
									>
										Learn Now →</v-btn
									>
								</div>
							</div>
						</div>
					</div>

					<div class="congratulations" v-if="overallProgress == 100">
						<div class="congTitle">
							<h1>Congratulations</h1>
							<span>🎉🎉</span>
						</div>

						<div class="congContent">
							<v-avatar color="green" size="100" class="badge"
								><img
									v-if="this.user.gender == 'Male'"
									src="../assets/badge.png"
									alt=""
								/>
							</v-avatar>

							<p>
								You have received the badge of completion.
							</p>

							<p>
								You have successfully finished all the lessons. By now you
								should be confident about the basics of polynomials.
							</p>

							<p class="dateCompleted">
								<b>
									Date Completed:
									{{
										new Date(Date.parse(this.checkpoint.updatedAt))
											.toString()
											.split(" ")[0]
									}},
									{{
										new Date(Date.parse(this.checkpoint.updatedAt))
											.toString()
											.split(" ")[1]
									}}
									{{
										new Date(Date.parse(this.checkpoint.updatedAt))
											.toString()
											.split(" ")[2]
									}}
									{{
										new Date(Date.parse(this.checkpoint.updatedAt))
											.toString()
											.split(" ")[3]
									}}
									-
									{{
										new Date(
											Date.parse(this.checkpoint.updatedAt)
										).toLocaleString("en-US", {
											hour: "numeric",
											minute: "numeric",
											hour12: true,
										})
									}}
								</b>
							</p>
						</div>
					</div>
				</div>
			</div>

			<br />
			<br />
			<v-row justify="center">
				<v-btn class="green" dark @click.stop="dialog = true" small>
					Message from the developers
				</v-btn>

				<v-dialog v-model="dialog" max-width="650">
					<v-card>
						<div class="welcomeMessage">
							<h1>Welcome</h1>

							<br />
							<div class="welcomeHeader">
								<h2>Hi {{ this.user.name.firstName }}</h2>
								<span>👋</span>
							</div>

							<br />
							<p>
								We are so glad that you decided to try out Poly. We hope you can
								learn all things about basic Polynomials here and experience the
								best tutorial service.
							</p>

							<br />
							<h3><i>From the team</i></h3>
							<div class="team">
								<v-avatar color="grey" size="50"
									><img src="../assets/picc1.jpg" alt="" />
								</v-avatar>
								<v-avatar color="grey" size="50"
									><img src="../assets/picc2.jpg" alt="" />
								</v-avatar>
								<v-avatar color="grey" size="50"
									><img src="../assets/picc3.jpg" alt="" />
								</v-avatar>
							</div>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="green darken-1" text @click="dialog = false">
									Close
								</v-btn>
								<v-spacer></v-spacer>
							</v-card-actions>
						</div>
					</v-card>
				</v-dialog>
			</v-row>
		</div>
	</div>
</template>

<script>
	import userAPI from "../api/userAPI";
	import lessonAPI from "../api/lessonAPI";
	import Axios from "axios";

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
			dialog: false,
		}),
		methods: {
			logOut() {
				this.fetched = false;
				this.loading = true;
				setTimeout(() => {
					localStorage.removeItem("token");
					this.$router.push("/");
					this.fetched = true;
					this.loading = false;
				}, 1000);
			},

			async reload() {
				try {
					const data = await userAPI.prototype.getSpecificUser();
					const lessons = await lessonAPI.prototype.getAllLessons();
					this.lessons = lessons.data.lessons;
					this.user = data.data;
					this.loading = false;
					this.fetched = true;
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
				if (this.user.checkpoint.lessonid) {
					this.lessons.forEach((element, index, array) => {
						if (element._id == this.user.checkpoint.lessonid) {
							this.checkpoint = element;
						}
					});
				} else {
					this.checkpoint = null;
				}
			},
			resumeProgress: function() {
				for (let i = 0; i < this.lessons.length; i++) {
					if (this.lessons[i].status == "In Progress") {
						return this.lessons[i].name.replaceAll(" ", "_");
					}
				}
			},

			getChapterName: function() {
				if (this.user.checkpoint.lessonid) {
					for (let i = 0; i < this.checkpoint.chapter.length; i++) {
						if (
							this.checkpoint.chapter[i].chapter_number ==
							this.user.checkpoint.chapter_number
						) {
							this.chapter = this.checkpoint.chapter[i];
						}
					}
				}
			},

			trigger: function() {
				if (localStorage.getItem("new") != "false") {
					localStorage.setItem("new", false);
					this.dialog = true;
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

	.er {
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

	.welcomeMessage {
		padding: 50px;
		text-align: center;
	}

	.welcomeMessage h1,
	.welcomeMessage h2 {
		color: green;
	}

	.welcomeMessage h1 {
		font-size: 50px;
	}

	.welcomeMessage h2 {
		font-size: 35px;
	}

	.welcomeMessage p {
		font-size: 20px;
	}

	.welcomeHeader {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.welcomeHeader span {
		font-size: 30px;
	}

	.congTitle {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.congTitle span {
		font-size: 30px;
	}

	.congratulations h1 {
		color: green;
	}

	.congContent {
		text-align: center;
	}

	.badge {
		margin: 10px;
	}

	.congContent p {
		font-weight: bold;
	}

	.dateCompleted {
		font-weight: normal;
		color: green;
	}
</style>
