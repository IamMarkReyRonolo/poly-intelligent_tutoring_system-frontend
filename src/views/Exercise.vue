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
				<div class="content">
					<h1 class="lessonHeader">
						<span v-if="getChapterName == 'Final Test'">{{
							lessonName.replaceAll("_", " ")
						}}</span>
						{{ getChapterName }}
						<span v-if="getChapterName != 'Final Test'">Exercise</span>
					</h1>
					<div class="list">
						<div
							class="indicator"
							:class="
								question.answered
									? question.is_correct
										? value + 1 == number
											? 'success act'
											: 'success'
										: value + 1 == number
										? 'error act'
										: 'error'
									: value + 1 == number
									? 'act'
									: ''
							"
							v-for="(question, value) in shuffle"
							:key="value"
						></div>
					</div>

					<div class="problems">
						<div
							class="problem"
							v-for="(question, value) in shuffle"
							:key="value"
						>
							<div v-if="value + 1 == number">
								<div class="question">
									<p>
										<span v-html="question.question"></span>
									</p>
								</div>
								<div class="feedback" v-if="question.answered">
									<v-btn text v-if="question.is_correct" class="success" x-small
										>Your answer is correct</v-btn
									>
									<v-btn text v-if="!question.is_correct" class="error" x-small
										>Your answer is incorrect</v-btn
									>
								</div>

								<div class="choices">
									<div
										class="btn"
										v-for="(choice, value) in question.choices"
										:key="value"
									>
										<v-btn
											width="270"
											x-large
											:class="
												question.answered
													? choice.correct_answer
														? 'success'
														: 'error'
													: ''
											"
											@click="answer(question, choice.correct_answer)"
										>
											<span v-html="choice.choice"></span>
										</v-btn>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="btns">
						<div class="btn">
							<v-btn @click="navigate('down')" :disabled="number == 1"
								>Previous</v-btn
							>
						</div>

						<div class="btn">
							<v-btn
								class="success"
								@click="navigate('up')"
								:disabled="number == 10 || !answered"
								v-if="number != 10"
								>Next</v-btn
							>
							<v-btn
								class="success"
								:disabled="!answered"
								v-if="number == 10"
								@click="viewResult"
								>View Results</v-btn
							>
						</div>
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
	import lessonAPI from "../api/lessonAPI";
	import contentAPI from "../api/contentAPI";
	import userAPI from "../api/userAPI";
	export default {
		data: () => ({
			lessons: {},
			fetched: false,
			loading: true,
			error: false,
			lessonName: "",
			chapterName: "",
			chapterNumber: "",
			answered: false,
			clicked3: false,
			clicked2: false,
			clicked1: false,
			correct: false,
			number: 1,

			exercises: [],
			points: 0,
			exercise_status: "",
			lesson: {},
			chapter: {},
			newChapterNumber: 0,
			loadingDialog: false,
			nextLesson: {},
		}),
		methods: {
			async viewResult() {
				try {
					this.loadingDialog = true;
					this.exercises.questions.forEach((question) => {
						if (question.is_correct) {
							this.points += 1;
						}
					});

					this.exercise_status = this.points > 7 ? "Passed" : "Failed";
					const tutorial_status =
						this.exercise_status == "Passed" ? "Completed" : "Redo";
					console.log(this.points);
					console.log(this.exercise_status);

					const updated = await lessonAPI.prototype.updateChapter(
						this.lesson._id,
						this.chapter.chapter_number,
						{
							tutorial_status: tutorial_status,
							exercise_status: this.exercise_status,
							exercise_score: this.points,
						}
					);
					console.log(updated);

					const userUpdated = await userAPI.prototype.updateUser({
						checkpoint: {
							lessonid: this.lesson._id,
							chapter_number: this.chapter.chapter_number,
						},
					});

					console.log("KASULOOOD");
					console.log(this.chapter.chapter_number);
					console.log(this.chapter.chapter_number + 1);
					console.log(this.lesson.chapter.length);
					console.log("SUPPPPP");

					if (this.exercise_status == "Passed") {
						console.log("hello");
						if (this.chapter.chapter_number + 1 <= this.lesson.chapter.length) {
							this.newChapterNumber = this.chapter.chapter_number + 1;
							console.log("new");
							console.log(this.newChapterNumber);

							const chapterUpdated = await lessonAPI.prototype.updateChapter(
								this.lesson._id,
								this.newChapterNumber,
								{
									tutorial_status: "Not Yet",
									exercise_status: "Not Yet",
									exercise_score: 0,
								}
							);
							console.log(chapterUpdated);
						} else {
							let flag = false;
							for (let i = 0; i < this.lessons.length; i++) {
								if (this.lesson._id == this.lessons[i]._id) {
									if (i + 1 != this.lessons.length) {
										this.nextLesson = this.lessons[i + 1];
										flag = true;
									}
								}
							}
							console.log("nextLesson");
							console.log(this.nextLesson);
							this.newChapterNumber = 1;
							const lessonUpdated2 = await lessonAPI.prototype.updateLesson(
								this.lesson._id,
								{
									status: "Completed",
								}
							);

							console.log(flag);
							if (flag == true) {
								const lessonUpdated1 = await lessonAPI.prototype.updateLesson(
									this.nextLesson._id,
									{
										status: "In Progress",
									}
								);

								const chapp = await lessonAPI.prototype.updateChapter(
									this.nextLesson._id,
									1,
									{
										tutorial_status: "Not Yet",
										exercise_status: "Not Yet",
										exercise_score: 0,
									}
								);
								console.log("flag");
								console.log(lessonUpdated1);
								console.log(chapp);
							}
						}
					}

					this.loadingDialog = false;

					this.$router.push("result");
				} catch (error) {
					this.error = error;
				}
			},

			async reload() {
				try {
					this.exercises = contentAPI.prototype.getChapterTest(
						this.lessonName.replaceAll("_", " "),
						this.chapterNumber
					);
				} catch (error) {
					this.error = true;
				}
			},

			answer(question, is_correct) {
				if (!question.answered) {
					question.answered = true;
					question.is_correct = is_correct;
					this.answered = true;
				}
			},

			navigate(direction) {
				for (let i = 0; i < this.exercises.questions.length; i++) {
					if (i + 1 == this.number) {
						if (direction == "up" && this.number != 10) {
							this.number += 1;
						}
						if (direction == "down" && this.number != 1) {
							this.number -= 1;
						}
						this.answered = this.exercises.questions[this.number - 1].answered;
						return this.number;
					}
				}
			},
		},

		async created() {
			if (!localStorage.getItem("token")) {
				this.$router.push("/signin");
			} else {
				try {
					this.loading = true;
					const lessons = await lessonAPI.prototype.getAllLessons();
					lessons.data.lessons.forEach((element) => {
						if (
							element.name == this.$route.params.lessonName.replaceAll("_", " ")
						) {
							this.lesson = element;
							element.chapter.forEach((chap) => {
								if (chap.chapter_name == this.$route.params.chapterName) {
									this.chapter = chap;
								}
							});
						}
					});
					this.lessons = lessons.data.lessons;

					this.exercises = contentAPI.prototype.getChapterTest(
						this.$route.params.lessonName.replaceAll("_", " "),
						this.$route.params.chapterNumber
					);
					this.loading = false;
					this.fetched = true;
				} catch (error) {
					this.error = true;
				}
			}
		},

		computed: {
			getChapterName: function() {
				this.lessonName = this.$route.params.lessonName;
				this.chapterName = this.$route.params.chapterName;
				this.chapterNumber = this.$route.params.chapterNumber;
				return this.chapterName;
			},

			shuffle: function() {
				let currentIndex = this.exercises.questions.length,
					randomIndex;

				// While there remain elements to shuffle...
				while (currentIndex != 0) {
					// Pick a remaining element...
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex--;

					// And swap it with the current element.
					[
						this.exercises.questions[currentIndex],
						this.exercises.questions[randomIndex],
					] = [
						this.exercises.questions[randomIndex],
						this.exercises.questions[currentIndex],
					];
				}

				return this.exercises.questions;
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
		background-color: white;
		margin: 0px auto;
		border-radius: 20px;
		min-height: 650px;
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
		padding: 10px 80px;
	}

	.content {
		padding: 20px;
		margin: 20px auto;
		margin-top: 40px;
		/* border: 1px solid black; */
	}

	.content p {
		font-weight: bold;
		font-size: 22px;
	}

	.question {
		padding: 10px 40px;
	}

	.choices {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btns {
		display: flex;
		margin: 20px auto;
		justify-content: center;
		align-items: center;
	}

	.btn {
		margin: 20px;
	}

	.list {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		margin: 40px auto;
	}

	.indicator {
		min-width: 100px;
		min-height: 7px;
		background-color: grey;
		margin: 5px;
		border-radius: 10px;
	}

	.lessonHeader {
		margin: 20px 0px;
	}

	.feedback {
		padding: 10px;
		text-align: center;
	}

	.v-btn:not(.v-btn--round).v-size--x-large {
		padding: 10px;
		margin: 0px 0px;
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

	.act {
		outline: 5px solid black;
	}

	.dialogText {
		padding-top: 10px;
	}
</style>
