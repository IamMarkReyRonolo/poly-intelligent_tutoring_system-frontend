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
					<h2>
						Your Score
					</h2>
					<h1
						:class="
							this.chapter.exercise_status == 'Passed' ? 'passed' : 'failed'
						"
					>
						{{ this.chapter.exercise_score }}/10
					</h1>
					<p v-if="this.chapter.exercise_status == 'Passed'" class="passed">
						Congratulations, you passed!
					</p>
					<p v-if="this.chapter.exercise_status != 'Passed'" class="failed">
						Try again, you failed!
					</p>
					<div class="btn">
						<v-btn rounded class="white" to="/dashboard">Go to Dashboard</v-btn>
					</div>
					<div class="btn">
						<v-btn
							rounded
							class="success"
							:to="'/' + lessonName + '/chapters'"
							v-if="this.chapter.exercise_status == 'Passed'"
							>Back to Lesson Chapters</v-btn
						>
					</div>
					<div class="btn">
						<v-btn
							rounded
							class="warning"
							:to="'/' + lessonName + '/' + chapterNumber"
							v-if="this.chapter.exercise_status != 'Passed'"
							>Redo Tutorial</v-btn
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import lessonAPI from "../api/lessonAPI";

	export default {
		data: () => ({
			fetched: false,
			loading: true,
			error: false,
			lessonName: "",
			chapterName: "",
			chapterNumber: "",
			lesson: {},
			chapter: {},
		}),
		methods: {
			async reload() {
				try {
					const lessons = await lessonAPI.prototype.getAllLessons();
					this.lessons = lessons.data.lessons;
					this.loading = false;
					this.fetched = true;
				} catch (error) {
					this.error = true;
				}
			},
		},

		async mounted() {
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
							element.chapter.forEach((chap) => {
								if (chap.chapter_name == this.$route.params.chapterName) {
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
			getChapterName: function() {
				this.lessonName = this.$route.params.lessonName;
				this.chapterName = this.$route.params.chapterName;
				this.chapterNumber = this.$route.params.chapterNumber;
				return this.chapterName;
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
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		text-align: center;
		padding: 20px;
		padding-top: 0px;
		padding-bottom: 40px;
		margin-top: -40px;
	}

	.content p {
		font-weight: bold;
		font-size: 18px;
	}

	.btn {
		margin: 20px;
	}

	.lessonHeader {
		margin: 20px 0px;
	}

	.v-btn:not(.v-btn--round).v-size--x-large {
		padding: 10px;
		margin: 0px 0px;
	}

	.passed {
		color: #74d76b;
	}

	.failed {
		color: red;
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
