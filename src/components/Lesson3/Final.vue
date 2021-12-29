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
			<div class="imageCon"><img src="../../assets/Picture1.png" alt="" /></div>

			<div class="main">
				<div class="profile">
					<v-avatar color="grey" size="40" class="profileAvatar"></v-avatar>
					<v-btn text class="profileTitle" small to="/dashboard">Profile</v-btn>
				</div>

				<div class="continueBtn">
					<v-btn
						text
						color="black"
						x-small
						to="/Solving_Linear_Polynomials/chapters"
					>
						← Go back to chapters.</v-btn
					>
				</div>

				<div class="header">
					<div class="status">
						<v-btn
							x-small
							class="success"
							rounded
							v-if="this.chapter.tutorial_status == 'Completed'"
							>You already completed this tutorial</v-btn
						>
						<v-btn
							x-small
							class="warning"
							rounded
							v-if="this.chapter.tutorial_status == 'Redo'"
							>You failed this tutorial exercise. You need to redo this
							tutorial</v-btn
						>
					</div>
					<h1 class="lessonHeader">Lesson 3: Summary</h1>
				</div>

				<div class="content">
					<br />
					<br />

					<h2>
						<a class="link" href="/Solving_Linear_Polynomials/1"
							>1. Solving Linear Polynomials</a
						>
					</h2>
					<br />
					<p>
						A linear polynomial is a type of polynomial where the highest degree
						of the variable is 1. In other words, the highest exponent of the
						variable is 1. Polynomials are algebraic expressions where the
						variables have non-negative integer powers. The expression consists
						of one or more terms such as a variable, constant, and a variable
						with a non-zero coefficient. Linear polynomials are the simplest
						form of polynomials.
					</p>
					<br />
					<h2>Steps on Solving a Linear Polynomial</h2>
					<br />
					<p>
						<strong>1. Determine whether you have a linear polynomial.</strong>
					</p>
					<p>
						A linear polynomial is a polynomial of the first degree. This means
						that no variable will have an exponent greater than one. Because
						this is a first-degree polynomial, it will have exactly one real
						root, or solution.
					</p>

					<br />
					<p>
						<strong>2. Set the equation to equal zero. </strong>
					</p>
					<p>
						This is a necessary step for solving all polynomials.
					</p>

					<br />
					<p>
						<strong>3. Isolate the variable term. </strong>
					</p>
					<p>
						To do this, add or subtract the constant from both sides of the
						equation. A constant is a term without a variable.
					</p>

					<br />
					<p>
						<strong>4. Solve for the variable.</strong>
					</p>
					<p>
						Usually you will need to divide each side of the equation by the
						coefficient. This will give you the root, or solution, to your
						polynomial.
					</p>

					<br />
					<br />

					<div class="next">
						<v-btn
							large
							class="success"
							rounded
							v-if="this.chapter.exercise_status != 'Passed'"
							@click="takeExercise"
							>Take Test</v-btn
						>

						<v-btn
							large
							class="success"
							rounded
							v-if="this.chapter.exercise_status == 'Passed'"
							@click="takeExercise"
							>View Test Score</v-btn
						>
					</div>
				</div>
			</div>
		</div>

		<v-dialog hide-overlay persistent width="300" v-model="loadingDialog">
			<v-card color="white" light>
				<v-card-text>
					<h3 class="dialogText">Saving Progress</h3>
					<v-progress-linear
						indeterminate
						color="black"
						class="mb-0 mt-5"
					></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	import lessonAPI from "../../api/lessonAPI";

	export default {
		data: () => ({
			progress: 0,
			lesson: {},
			fetched: false,
			loading: true,
			error: false,
			correct1: false,
			answered1: false,
			correct2: false,
			answered2: false,
			chapter: {},
			loadingDialog: false,
		}),
		methods: {
			answerPQ1(answer) {
				if (!this.answered1) {
					this.answered1 = true;
					if (answer == "correct") {
						this.correct1 = true;
					} else {
						this.correct1 = false;
					}
				}
			},
			answerPQ2(answer) {
				if (!this.answered2) {
					this.answered2 = true;
					if (answer == "correct") {
						this.correct2 = true;
					} else {
						this.correct2 = false;
					}
				}
			},
			async reload() {
				try {
					const lessons = await lessonAPI.prototype.getAllLessons();

					lessons.data.lessons.forEach((element) => {
						if (element.name == "Solving Linear Polynomials") {
							this.lesson = element;
							element.chapter.forEach((chap) => {
								if (chap.chapter_name == "Final Test") {
									this.chapter = chap;
								}
							});
						}
					});
					console.log(this.lesson);
					console.log(this.chapter);
					this.loading = false;
					this.fetched = true;
				} catch (error) {
					this.error = true;
				}
			},

			async takeExercise() {
				try {
					if (this.chapter.tutorial_status != "Completed") {
						this.loadingDialog = true;
						const updated = await lessonAPI.prototype.updateChapter(
							this.lesson._id,
							this.chapter.chapter_number,
							{
								tutorial_status: "Completed",
								exercise_status: this.chapter.exercise_status,
								exercise_score: this.chapter.exercise_score,
							}
						);

						this.loadingDialog = false;
						console.log(updated);
					}

					if (this.chapter.exercise_status != "Passed") {
						this.$router.push("Final Test/2/confirmation");
					} else {
						this.$router.push("Final Test/2/exercise/result");
					}
				} catch (error) {
					this.error = error;
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
						if (element.name == "Solving Linear Polynomials") {
							this.lesson = element;
							element.chapter.forEach((chap) => {
								if (chap.chapter_name == "Final Test") {
									this.chapter = chap;
								}
							});
						}
					});
					console.log(this.lesson);
					console.log(this.chapter);
					this.loading = false;
					this.fetched = true;
				} catch (error) {
					this.error = true;
				}
			}
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
		margin-bottom: 40px;
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

	h2,
	p {
		color: #3b3b3b;
	}

	.continueBtn {
		text-align: left;
		font-weight: bolder;
		margin: 10px 0px;
	}

	.content {
		padding: 10px 80px;
	}

	.content p,
	.content ul li {
		font-size: 22px;
		text-align: justify;
	}

	.video {
		text-align: center;
		padding: 50px;
	}

	.table {
		width: 200px;
		margin: auto;
	}

	.popQ {
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
		padding: 20px;
		margin: 50px;
	}

	.popQ .question p {
		font-weight: bold;
	}

	.popQ .choices {
		padding: 10px 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.feedback {
		padding: 10px;
		text-align: center;
	}

	.next {
		margin: 20px;
		padding: 20px;
		text-align: center;
	}

	.next .warn {
		font-size: 12px;
		text-align: center;
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

	a {
		color: green;
		text-decoration: none;
		outline: none;
	}

	.link {
		color: #4caf50;
		text-decoration: none;
	}

	.status {
		text-align: center;
	}

	.dialogText {
		padding-top: 10px;
	}
</style>
