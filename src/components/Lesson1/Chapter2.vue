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
					<h1 class="lessonHeader">Terms and Types of Polynomials</h1>
				</div>

				<div class="content">
					<div class="video">
						<iframe
							width="700"
							height="400"
							src="https://www.youtube.com/embed/xmJjQ3KyTdw"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>

					<h2>Terms of a Polynomial</h2>
					<br />
					<p>
						The terms of polynomials are the parts of the equation which are
						generally separated by “+” or “-” signs. So, each part of a
						polynomial in an equation is a term. For example, in a polynomial,
						say, 2x2 + 5 +4, the number of terms will be 3. The classification
						of a polynomial is done based on the number of terms in it.
					</p>

					<div class="table">
						<v-simple-table>
							<template v-slot:default>
								<thead>
									<tr>
										<th class="text-left">
											Polynomial
										</th>
										<th class="text-left">
											Terms
										</th>
										<th class="text-left">
											Degree
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>P(x) = x<sup>3</sup>-2x<sup>2</sup>+3x+4</td>
										<td>x<sup>3</sup>, -2x<sup>2</sup>, 3x and 4</td>
										<td>3</td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
					</div>

					<div class="popQ" v-if="this.chapter.tutorial_status != 'Completed'">
						<div class="question">
							<p>
								How many terms are there in the following polynomial,
								x<sup>6</sup>+5x<sup>5</sup>+10x<sup>2</sup>+10 ?
							</p>
						</div>
						<div class="choices">
							<v-btn
								width="150"
								large
								:class="answered1 ? 'error' : ''"
								@click="answerPQ1('wrong')"
								>1</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered1 ? 'error' : ''"
								@click="answerPQ1('wrong')"
								>6</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered1 ? 'success' : ''"
								@click="answerPQ1('correct')"
								>4</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered1 ? 'error' : ''"
								@click="answerPQ1('wrong')"
								>None</v-btn
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

					<h2>Types of Polynomials</h2>
					<br />
					<p>
						Polynomials are of 3 different types and are classified based on the
						number of terms in it. The three types of polynomials are:
					</p>
					<ul>
						<li><strong>Monomial</strong></li>
						<li><strong>Binomial</strong></li>
						<li><strong>Trinomial</strong></li>
					</ul>
					<br />
					<p>
						These polynomials can be combined using addition, subtraction,
						multiplication, and division but is never division by a
						variable.<strong>
							A few examples of Non Polynomials are: 1/x+2, x<sup
								>-3</sup
							></strong
						>
					</p>

					<br />

					<h2>Monomial</h2>
					<br />
					<p>
						A monomial is an expression which contains only one term. For an
						expression to be a monomial, the single term should be a non-zero
						term. A few examples of monomials are:
					</p>
					<ul>
						<li><strong>10x</strong></li>
						<li><strong>3</strong></li>
						<li>
							<strong>x<sup>3</sup></strong>
						</li>
					</ul>
					<br />
					<h2>Binomial</h2>
					<br />
					<p>
						A binomial is a polynomial expression which contains exactly two
						terms. A binomial can be considered as a sum or difference between
						two or more monomials. A few examples of binomials are:
					</p>
					<ul>
						<li><strong>3x+4</strong></li>
						<li><strong>10x<sup>3</sup>+100</strong></li>
						<li>
							<strong>x<sup>2</sup>+6</strong>
						</li>
					</ul>

					<br />
					<h2>Trinomial</h2>
					<br />
					<p>
						A trinomial is an expression which is composed of exactly three
						terms. A few examples of trinomial expressions are:
					</p>
					<ul>
						<li><strong>9x<sup>3</sup>+4x+10</strong></li>
						<li><strong>7x<sup>7</sup>+100x<sup>5</sup>+1</strong></li>
						<li>
							<strong>x<sup>2</sup>+6x+25</strong>
						</li>
					</ul>
					<br />

					<div class="popQ" v-if="this.chapter.tutorial_status != 'Completed'">
						<div class="question">
							<p>
								Determine what type of polynomial is this
								x<sup>2</sup>+10x+100+20
							</p>
						</div>
						<div class="choices">
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>Monomial</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>Binomial</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'success' : ''"
								@click="answerPQ2('correct')"
								>Trinomial</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>None</v-btn
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
							href="https://www.toppr.com/guides/maths/algebraic-expressions-and-identities/polynomial-and-its-types/"
							target="_blank"
							>Resource 1</v-btn
						>

						<v-btn
							text
							color="success"
							href="https://byjus.com/maths/polynomial/"
							target="_blank"
							>Resource 2</v-btn
						>

						<v-btn
							text
							color="success"
							href="https://www.cuemath.com/algebra/types-of-polynomials/"
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
			fetched: false,
			loading: true,
			error: false,
			correct1: false,
			answered1: false,
			correct2: false,
			answered2: false,
			chapter: {},
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
						if (
							element.name == this.$route.params.lessonName.replaceAll("_", " ")
						) {
							this.lesson = element;
						}
					});
					this.loading = false;
					this.fetched = true;
				} catch (error) {
					this.error = true;
				}
			},

			async reload() {
				try {
					const lessons = await lessonAPI.prototype.getAllLessons();

					lessons.data.lessons.forEach((element) => {
						if (element.name == "Intro To Polynomials") {
							this.lesson = element;
							element.chapter.forEach((chap) => {
								if (chap.chapter_name == "Terms and Types of Polynomials") {
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
						this.$router.push("Terms and Types of Polynomials/2/confirmation");
					} else {
						this.$router.push(
							"Terms and Types of Polynomials/2/exercise/result"
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
								if (chap.chapter_name == "Terms and Types of Polynomials") {
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
					}, 1000 * 60 * 7);
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

	.table {
		max-width: 600px;
		margin: 20px auto;
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
