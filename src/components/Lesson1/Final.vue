<template>
	<div class="bigContainer">
		<div class="loading" v-if="false">
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

		<div class="fetched" v-if="true">
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
					<h1 class="lessonHeader">Lesson 1 Summary</h1>
				</div>

				<div class="content">
					<div class="video"></div>

					<h2>
						<a class="link" href="/Intro_To_Polynomials/1"
							>1. Definition and Degree of Polynomial</a
						>
					</h2>
					<br />
					<p>
						A polynomial is defined as an expression which is composed of
						variables, constants and exponents, that are combined using the
						mathematical operations such as addition, subtraction,
						multiplication and division (No division operation by a variable).
					</p>

					<ul>
						<li>Constants. Example: 1, 2, 3, etc.</li>
						<li>Variables. Example: g, h, x, y, etc.</li>
						<li>Exponents: Example: 5 in x<sup>5</sup> etc.</li>
					</ul>
					<br />
					<p>
						The degree of a polynomial is defined as the highest degree of a
						monomial within a polynomial. Thus, a polynomial equation having one
						variable which has the largest exponent is called a degree of the
						polynomial.
					</p>

					<br />
					<br />

					<h2>
						<a class="link" href="/Intro_To_Polynomials/1"
							>2. Terms and Types of Polynomials</a
						>
					</h2>
					<br />
					<p>
						The terms of polynomials are the parts of the equation which are
						generally separated by “+” or “-” signs. So, each part of a
						polynomial in an equation is a term.
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

					<br />
					<p>
						Polynomials are of 3 different types and are classified based on the
						number of terms in it. The three types of polynomials are:
					</p>
					<h3>Monomial</h3>
					<br />
					<p>
						A monomial is an expression which contains only one term. For an
						expression to be a monomial, the single term should be a non-zero
						term. A few examples of monomials are:
					</p>

					<h3>Binomial</h3>
					<br />
					<p>
						A binomial is a polynomial expression which contains exactly two
						terms. A binomial can be considered as a sum or difference between
						two or more monomials. A few examples of binomials are:
					</p>

					<h3>Trinomial</h3>
					<br />
					<p>
						A trinomial is an expression which is composed of exactly three
						terms. A few examples of trinomial expressions are:
					</p>

					<h2>
						<a class="link" href="/Intro_To_Polynomials/1"
							>3. Polynomial Equations and Functions</a
						>
					</h2>
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
					<br />
					<p>
						A polynomial function is generally represented as P(x). It has only
						positive integers as exponents. We can even perform different types
						of arithmetic operations for such functions like addition,
						subtraction, multiplication and division.
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

					<div class="next">
						<v-btn large class="success" rounded to="Final Test/4/confirmation"
							>Take Test</v-btn
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
					console.log(this.lesson);
				} catch (error) {
					this.error = true;
				}
			},
		},
		// async created() {
		// 	if (!localStorage.getItem("token")) {
		// 		this.$router.push("/signin");
		// 	} else {
		// 		try {
		// 			const lessons = await lessonAPI.prototype.getAllLessons();
		// 			lessons.data.lessons.forEach((element) => {
		// 				if (
		// 					element.name == this.$route.params.lessonName.replaceAll("_", " ")
		// 				) {
		// 					this.lesson = element;
		// 				}
		// 			});
		// 			this.loading = false;
		// 			this.fetched = true;
		// 			console.log(this.lesson);
		// 		} catch (error) {
		// 			this.error = true;
		// 		}
		// 	}
		// },

		computed: {
			overallProgress: function() {
				this.lesson.chapter.forEach((element) => {
					if (element.tutorial_status == "Completed") {
						this.progress += 5;
					}
					if (element.exercise_status == "Passed") {
						this.progress += 5;
					}
				});

				console.log(this.lesson.chapter);
				console.log(this.progress);
				console.log(this.lesson.chapter.length * 10);
				return (this.progress / (this.lesson.chapter.length * 10)) * 100;
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

	a {
		color: green;
		text-decoration: none;
		outline: none;
	}

	.link {
		color: #4caf50;
		text-decoration: none;
	}
</style>
