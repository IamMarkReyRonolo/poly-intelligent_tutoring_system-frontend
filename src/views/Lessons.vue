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
				<div class="profile">
					<v-avatar color="grey" size="40" class="profileAvatar">
						<img src="../assets/yow.jpg" alt="" />
					</v-avatar>
					<v-btn text class="profileTitle" small to="/dashboard">Profile</v-btn>
				</div>
				<h1 class="lessonHeader">Lessons</h1>
				<div class="lessons">
					<div class="lesson">
						<div class="inner">
							<v-avatar color="grey" size="100" class="profileAvatar">
								<img src="../assets/icon1.jpg"
							/></v-avatar>
							<div class="content">
								<v-btn
									text
									x-large
									class="titleBtn"
									to="/Intro_To_Polynomials/chapters"
									>{{ this.lessons[0].name }}</v-btn
								>
								<p>
									Learn the core concepts of polynomials and get your hands
									dirty with it.
								</p>
							</div>
						</div>
						<h3 class="status" :class="this.lessons[0].status">
							{{ this.lessons[0].status }}
						</h3>
					</div>

					<div class="lesson">
						<div class="inner">
							<v-avatar color="grey" size="100" class="profileAvatar">
								<img src="../assets/icon2.jpg" />
							</v-avatar>
							<div class="content">
								<v-btn
									text
									x-large
									class="titleBtn"
									to="/Polynomial_Operations/chapters"
									:disabled="this.lessons[1].status == 'Locked'"
									>{{ this.lessons[1].name }}</v-btn
								>
								<p>
									Learn how to do basic operations on polynomials.
								</p>
							</div>
						</div>
						<h3 class="status" :class="this.lessons[1].status">
							{{ this.lessons[1].status }}
						</h3>
					</div>

					<div class="lesson">
						<div class="inner">
							<v-avatar color="grey" size="100" class="profileAvatar">
								<img src="../assets/icon3.jpg"
							/></v-avatar>
							<div class="content">
								<v-btn
									text
									x-large
									class="titleBtn"
									to="/Solving_Linear_Polynomials/chapters"
									:disabled="this.lessons[2].status == 'Locked'"
									>{{ this.lessons[2].name }}</v-btn
								>
								<p>
									Learn how to find x in a linear polynomial equation.
								</p>
							</div>
						</div>
						<h3 class="status" :class="this.lessons[2].status">
							{{ this.lessons[2].status }}
						</h3>
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

		async created() {
			if (!localStorage.getItem("token")) {
				this.$router.push("/signin");
			} else {
				try {
					const lessons = await lessonAPI.prototype.getAllLessons();
					this.lessons = lessons.data.lessons;
					this.loading = false;
					this.fetched = true;
				} catch (error) {
					this.error = true;
				}
			}
		},

		computed: {},
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
		margin: 40px 0px;
	}

	.lessons {
		margin: 40px auto;
		width: 90%;
	}

	.lesson {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 10px;
		margin: 20px 5px;
	}

	.inner {
		display: flex;
		align-items: center;
	}

	.inner .content {
		margin: 0px 25px;
	}

	.status {
		font-size: 12px;
	}

	.content p {
		padding: 0px 10px;
		font-size: 14px;
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

	.In {
		color: orange;
	}

	.Completed {
		color: green;
	}
</style>
