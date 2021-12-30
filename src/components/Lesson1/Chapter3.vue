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
					<v-btn text color="black" x-small to="/Intro_To_Polynomials/chapters">
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

					<h1 class="lessonHeader">Polynomial Equations and Functions</h1>
				</div>

				<div class="content">
					<div class="video">
						<iframe
							width="700"
							height="400"
							src="https://www.youtube.com/embed/O65fxp7DKMc?list=PLmdFyQYShrjdt-k5SisnnaHZH3XbZDVOY"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>

					<h2>Polynomial Equations</h2>
					<br />
					<p>
						Polynomial equations are one of the significant concepts of
						Mathematics, where the relation between numbers and variables are
						explained in a pattern. In Maths, we have studied a variety of
						equations formed with algebraic expressions. When we talk about
						polynomials, it is also a form of the algebraic equation.
					</p>
					<br />
					<p>
						An equation formed with
						<strong>variables, exponents, and coefficients</strong> together
						with operations and an <strong>equal sign</strong> is called a
						polynomial equation. The standard form of writing a polynomial
						equation is to put the highest degree first then, at last, the
						constant term. An example of a polynomial equation is:
					</p>

					<ul>
						<li>
							<strong>2x<sup>2</sup> + 5x + 20 = 0</strong>
						</li>
					</ul>

					<div class="popQ" v-if="this.chapter.tutorial_status != 'Completed'">
						<div class="question">
							<p>
								What is a valid polynomial equation?
							</p>
						</div>
						<div class="choices">
							<v-btn
								width="150"
								large
								:class="answered1 ? 'error' : ''"
								@click="answerPQ1('wrong')"
								>2x<sup>-2</sup> + 20</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered1 ? 'error' : ''"
								@click="answerPQ1('wrong')"
								>5x<sup>3</sup> + 3x + 4</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered1 ? 'error' : ''"
								@click="answerPQ1('wrong')"
								>5<sup>2</sup> = 0</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered1 ? 'success' : ''"
								@click="answerPQ1('correct')"
								>2x<sup>3</sup> + 10x = 4</v-btn
							>
						</div>
						<div class="feedback" v-if="answered1">
							<v-btn text v-if="correct1" class="success" x-small
								>Your answer is correct</v-btn
							>
							<v-btn text v-if="!correct1" class="error" x-small
								>Your answer is incorrect</v-btn
							>
						</div>
					</div>

					<br />
					<br />

					<h2>Polynomial Function</h2>

					<br />
					<p>
						A polynomial function is a function that can be expressed in the
						form of a polynomial. The definition can be derived from the
						definition of a polynomial equation. A polynomial is generally
						represented as P(x). The highest power of the variable of P(x) is
						known as its degree.
					</p>
					<p>
						A polynomial function has only positive integers as exponents. We
						can even perform different types of arithmetic operations for such
						functions like addition, subtraction, multiplication and division.
					</p>

					<p>Some of the examples of polynomial functions are here:</p>
					<ul>
						<li>
							<strong>2x<sup>2</sup>+ 2x + 10</strong>
						</li>
						<li><strong>3x - 7</strong></li>
						<li>
							<strong>x<sup>3</sup> + x</strong>
						</li>
					</ul>

					<br />

					<div class="popQ" v-if="this.chapter.tutorial_status != 'Completed'">
						<div class="question">
							<p>
								What is a valid polynomial function?
							</p>
						</div>
						<div class="choices">
							<v-btn
								width="150"
								large
								:class="answered2 ? 'success' : ''"
								@click="answerPQ2('correct')"
								>5x<sup>3</sup> + 3x + 4</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>x<sup>-3</sup> + x + 1</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>2 + 4 = 6</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>x<sup>3/2</sup> + 2x + 10</v-btn
							>
						</div>
						<div class="feedback" v-if="answered2">
							<v-btn text v-if="correct2" class="success" x-small
								>Your answer is correct</v-btn
							>
							<v-btn text v-if="!correct2" class="error" x-small
								>Your answer is incorrect</v-btn
							>
						</div>
					</div>

					<div class="next">
						<p
							class="warn"
							v-if="!answered1 || !answered2"
							v-show="this.chapter.tutorial_status != 'Completed'"
						>
							You need to answer all example questions to proceed.
						</p>
						<v-btn
							large
							class="success"
							rounded
							:disabled="
								(!answered1 || !answered2) &&
									this.chapter.tutorial_status != 'Completed'
							"
							v-if="this.chapter.exercise_status != 'Passed'"
							@click="takeExercise"
							>Take Exercise</v-btn
						>

						<v-btn
							large
							class="success"
							rounded
							v-if="this.chapter.exercise_status == 'Passed'"
							@click="takeExercise"
							>View Exercise Score</v-btn
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
						if (element.name == "Intro To Polynomials") {
							this.lesson = element;
							element.chapter.forEach((chap) => {
								if (chap.chapter_name == "Polynomial Equations and Functions") {
									this.chapter = chap;
								}
							});
						}
					});
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
					}

					if (this.chapter.exercise_status != "Passed") {
						this.$router.push(
							"Polynomial Equations and Functions/3/confirmation"
						);
					} else {
						this.$router.push(
							"Polynomial Equations and Functions/3/exercise/result"
						);
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
						if (element.name == "Intro To Polynomials") {
							this.lesson = element;
							element.chapter.forEach((chap) => {
								if (chap.chapter_name == "Polynomial Equations and Functions") {
									this.chapter = chap;
								}
							});
						}
					});
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
	.status {
		text-align: center;
	}

	.dialogText {
		padding-top: 10px;
	}
</style>
