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
						to="/Polynomial_Operations/chapters"
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
					<h1 class="lessonHeader">Subtraction of Polynomials</h1>
				</div>

				<div class="content">
					<div class="video">
						<iframe
							width="700"
							height="400"
							src="https://www.youtube.com/embed/RhBXtGPrQOE"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>

					<h2>Subtracting Polynomials</h2>
					<br />
					<p>
						Subtracting polynomials is similar to addition, the only difference
						being the type of operation. So, subtract the like terms to obtain
						the solution. It should be noted that subtraction of polynomials
						also results in a polynomial of the same degree.
					</p>
					<br />
					<p>
						<strong
							>Follow the following steps to solve in the first method:</strong
						>
					</p>
					<p>
						<strong>(i)</strong> Enclose the part of the expression to be
						subtracted in parentheses with a negative (-) sign prefixed
					</p>
					<p>
						<strong>(ii)</strong> Remove the parentheses by changing the sign of
						each term of the polynomial expression which is in the parentheses.
					</p>
					<p><strong>(iii)</strong> Arrange the like terms.</p>
					<p>
						<strong>(iv)</strong> Finally add the like terms to find the
						required subtraction.
					</p>

					<br />
					<br />
					<p>
						<strong>For Example:</strong>
					</p>
					<p>Subtract: <strong> 2x - 5y + 3z from 5x + 9y - 2z.</strong></p>
					<p>
						(i) First we need to enclose the first part which is to be
						subtracted in parentheses with a negative (-) sign prefixed.
					</p>
					<p>
						<strong> = 5x + 9y - 2z – (2x - 5y + 3z) </strong>
					</p>
					<p>
						(ii) Now we need to remove the parentheses by changing the sign of
						each term which is in the parentheses.
					</p>
					<p>
						<strong> = 5x + 9y - 2z – 2x + 5y - 3z </strong>
					</p>
					<p>
						(iii) Arrange the like terms.
					</p>
					<p><strong>= 5x – 2x + 9y + 5y - 2z - 3z</strong></p>
					<p>
						(iv) Finally add those like terms.
					</p>
					<p><strong>= 3x + 14y - 5z</strong></p>
					<br />

					<div class="popQ" v-if="this.chapter.tutorial_status != 'Completed'">
						<div class="question">
							<p>
								Subtract: x – 4y – 2z from 7x – 3y + 6z
							</p>
						</div>
						<div class="choices">
							<v-btn
								width="150"
								large
								:class="answered2 ? 'success' : ''"
								@click="answerPQ2('correct')"
								>6x + y + 8z</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>-6x + 7y + 4z</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>6x - 7y - 4z</v-btn
							>
							<v-btn
								width="150"
								large
								:class="answered2 ? 'error' : ''"
								@click="answerPQ2('wrong')"
								>-6x - y - 8z</v-btn
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
							v-if="!answered2"
							v-show="this.chapter.tutorial_status != 'Completed'"
						>
							You need to answer all example questions to proceed.
						</p>
						<v-btn
							large
							class="success"
							rounded
							:disabled="
								!answered2 && this.chapter.tutorial_status != 'Completed'
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
						if (element.name == "Polynomial Operations") {
							this.lesson = element;
							element.chapter.forEach((chap) => {
								if (chap.chapter_name == "Subtraction of Polynomials") {
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
						this.$router.push("Subtraction of Polynomials/2/confirmation");
					} else {
						this.$router.push("Subtraction of Polynomials/2/exercise/result");
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
						if (element.name == "Polynomial Operations") {
							this.lesson = element;
							element.chapter.forEach((chap) => {
								if (chap.chapter_name == "Subtraction of Polynomials") {
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

	.status {
		text-align: center;
	}

	.dialogText {
		padding-top: 10px;
	}
</style>
