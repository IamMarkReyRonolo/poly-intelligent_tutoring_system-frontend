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
						PreTest Result
					</h1>
					<h3>
						Learner State
					</h3>

					<h1 class="passed">🎉{{ this.user.learner_state }}🎉</h1>
					<br />
					<p class="details" v-if="this.user.learner_state == 'Advance'">
						For advance level, all lessons are unlocked.
					</p>
					<p class="details" v-if="this.user.learner_state == 'Average'">
						For average level, only the lesson 1 and lesson 2 is unlocked,
						Introduction to Polynomials and Polynomial Operations.
					</p>
					<p class="details" v-if="this.user.learner_state == 'Beginner'">
						For beginner level, only the lesson 1 is unlocked, Introduction to
						Polynomials.
					</p>
					<p v-if="this.user.learner_state == 'Advance'">
						Wow, you are an advance learner! Congratulations
					</p>

					<p v-if="this.user.learner_state == 'Average'">
						Not bad, you are an average learner! Congratulations
					</p>

					<p v-if="this.user.learner_state == 'Beginner'">
						First time? Don't worry we got you newbie.
					</p>

					<div class="btn">
						<v-btn rounded class="success" to="/dashboard">Proceed</v-btn>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import userAPI from "../api/userAPI";

	export default {
		data: () => ({
			fetched: false,
			loading: true,
			error: false,
			user: {},
		}),
		methods: {
			async reload() {
				try {
					const user = await userAPI.prototype.getSpecificUser();
					this.lessons = lessons.data.lessons;
					this.loading = false;
					this.fetched = true;
					this.user = user.data;
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
					const user = await userAPI.prototype.getSpecificUser();
					this.loading = false;
					this.fetched = true;
					this.user = user.data;
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

	.details {
		color: #fb8c00;
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
