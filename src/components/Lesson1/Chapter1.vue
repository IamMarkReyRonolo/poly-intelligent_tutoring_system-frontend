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
						<div>
							<v-btn
								x-small
								class="primary"
								rounded
								v-if="this.showHelp"
								@click="dialog = true"
								>Show Help</v-btn
							>
						</div>

						<v-btn
							x-small
							class="warning"
							rounded
							v-if="this.chapter.tutorial_status == 'Redo'"
							>You failed this tutorial exercise. You need to redo this
							tutorial</v-btn
						>
					</div>

					<h1 class="lessonHeader">Definition and Degree of a Polynomial</h1>
				</div>

				<div class="content">
					<div class="video">
						<iframe
							width="700"
							height="400"
							src="https://www.youtube.com/embed/MPcZ3nhZO-M"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>

					<h2>What is a Polynomial?</h2>
					<br />
					<p>
						Polynomial is made up of two terms, namely Poly (meaning “many”) and
						Nominal (meaning “terms.”). A polynomial is defined as an expression
						which is composed of variables, constants and exponents, that are
						combined using the mathematical operations such as addition,
						subtraction, multiplication and division (No division operation by a
						variable). Based on the numbers of terms present in the expression,
						it is classified as monomial, binomial, and trinomial. Examples of
						constants, variables and exponents are as follows:
					</p>

					<ul>
						<li>Constants. Example: 1, 2, 3, etc.</li>
						<li>Variables. Example: g, h, x, y, etc.</li>
						<li>Exponents: Example: 5 in x<sup>5</sup> etc.</li>
					</ul>

					<div class="popQ" v-if="this.chapter.tutorial_status != 'Completed'">
						<div class="question">
							<p>
								What are the constants of the following polynomial,
								x<sup>2</sup>+5x+10 ?
							</p>
						</div>
						<div class="choices">
							<v-btn
								width="150"
								large
								:class="answered1 ? 'error' : ''"
								@click="answerPQ1('wrong')"
								>0,5,10</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered1 ? 'error' : ''"
								@click="answerPQ1('wrong')"
								>1,5</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered1 ? 'error' : ''"
								@click="answerPQ1('wrong')"
								>5,10</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered1 ? 'success' : ''"
								@click="answerPQ1('correct')"
								>1,5,10</v-btn
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

					<h2>Degree of a Polynomial</h2>

					<br />
					<p>
						The degree of a polynomial is defined as the highest degree of a
						monomial within a polynomial. Thus, a polynomial equation having one
						variable which has the largest exponent is called a degree of the
						polynomial.
					</p>

					<br />

					<v-simple-table>
						<template v-slot:default>
							<thead>
								<tr>
									<th class="text-left">
										Polynomial
									</th>
									<th class="text-left">
										Example
									</th>
									<th class="text-left">
										Degree
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Constant or Zero Polynomial</td>
									<td>6</td>
									<td>0</td>
								</tr>
								<tr>
									<td>Linear Polynomial</td>
									<td>3x+1</td>
									<td>1</td>
								</tr>
								<tr>
									<td>Quadratic Polynomial</td>
									<td>4x<sup>2</sup>+x+1</td>
									<td>2</td>
								</tr>
								<tr>
									<td>Cubic Polynomial</td>
									<td>6x<sup>3</sup>+4x<sup>2</sup>+3x+1</td>
									<td>3</td>
								</tr>
								<tr>
									<td>Quartic Polynomial</td>
									<td>6x<sup>4</sup>+3x<sup>3</sup>+3x<sup>2</sup>+2x+1</td>
									<td>4</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>

					<div class="popQ" v-if="this.chapter.tutorial_status != 'Completed'">
						<div class="question">
							<p>
								Given the following polynomial:
								x<sup>7</sup>+10x<sup>2</sup>+x+100, what is the degree?
							</p>
						</div>
						<div class="choices">
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>100</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>2</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'success' : ''"
								@click="answerPQ2('correct')"
								>7</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>1</v-btn
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

			{{ timer }}

			<v-dialog v-model="dialog" max-width="650" v-if="showHelp">
				<v-card>
					<div class="welcomeMessage">
						<br />
						<div class="welcomeHeader">
							<h2>Need a hand?</h2>
							<span>👋</span>
						</div>

						<br />
						<p>
							We noticed that you are taking too long on this tutorial. To help
							you get through this, here are some of the resources that might
							help you.
						</p>

						<v-btn
							text
							color="success"
							href="https://byjus.com/maths/degree-of-a-polynomial/"
							target="_blank"
							>Resource 1</v-btn
						>

						<v-btn
							text
							color="success"
							href="https://www.cuemath.com/algebra/degree-of-a-polynomial/"
							target="_blank"
							>Resource 2</v-btn
						>

						<v-btn
							text
							color="success"
							href="https://www.toppr.com/guides/maths/polynomials/degree-of-polynomials/"
							target="_blank"
							>Resource 3</v-btn
						>

						<br />
						<br />
						<h3><i>Happy Learning</i></h3>

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
			chapter: {},
			fetched: false,
			loading: true,
			error: false,
			correct1: false,
			answered1: false,
			correct2: false,
			answered2: false,
			loadingDialog: false,
			dialog: true,
			showHelp: false,
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
								if (
									chap.chapter_name == "Definition and Degree of a Polynomial"
								) {
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
							"Definition and Degree of a Polynomial/1/confirmation"
						);
					} else {
						this.$router.push(
							"Definition and Degree of a Polynomial/1/exercise/result"
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
								if (
									chap.chapter_name == "Definition and Degree of a Polynomial"
								) {
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

		computed: {
			timer: function() {
				if (this.chapter.tutorial_status != "Completed") {
					setTimeout(() => {
						this.showHelp = true;
					}, 1000 * 60 * 5);
				} else {
					this.showHelp = false;
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
</style>
