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
					<p>
						In this section your knowledge of the topic will be put to test.
					</p>
					<p>Are you ready?</p>
					<div class="btn">
						<v-btn
							rounded
							class="white"
							:to="'/' + lessonName + '/' + chapterNumber"
							>Go back to tutorial</v-btn
						>
					</div>
					<div class="btn">
						<v-btn rounded class="success" to="">Take Exercise</v-btn>
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
			lessons: {},
			fetched: false,
			loading: true,
			error: false,
			lessonName: "",
			chapterName: "",
			chapterNumber: "",
		}),
		methods: {
			async reload() {
				try {
					const lessons = await lessonAPI.prototype.getAllLessons();
					this.lessons = lessons.data.lessons;
					this.loading = false;
					this.fetched = true;
					console.log(this.lessons);
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
