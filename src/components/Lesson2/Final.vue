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
					<h1 class="lessonHeader">Lesson 2: Summary</h1>
				</div>

				<div class="content">
					<br />
					<br />

					<h2>
						<a class="link" href="/Polynomial_Operations/1"
							>1. Adding Polynomials</a
						>
					</h2>
					<br />
					<p>
						Adding polynomials is just a matter of combining like terms, with
						some order of operations considerations thrown in. As long as you're
						careful with the "minus" signs, and don't confuse addition and
						multiplication, you should do fine.
					</p>
					<h3>Method 1</h3>
					<p>
						By arranging the like terms together and then add.
					</p>
					<h3>Method 2</h3>
					<p>
						By arranging expressions in lines so that the like terms with their
						signs are one below the other i.e. like terms are in same vertical
						column and then add the different groups of like terms.
					</p>

					<br />
					<br />
					<h2>
						<a class="link" href="/Polynomial_Operations/2"
							>2. Subtracting Polynomials</a
						>
					</h2>
					<br />
					<p>
						Subtracting polynomials is similar to addition, the only difference
						being the type of operation. So, subtract the like terms to obtain
						the solution. It should be noted that subtraction of polynomials
						also results in a polynomial of the same degree.
					</p>
					<p>
						<strong>For Example:</strong>
					</p>
					<p>Subtract: <strong> 2x - 5y + 3z from 5x + 9y - 2z.</strong></p>
					<h3>
						(i) First we need to enclose the first part which is to be
						subtracted in parentheses with a negative (-) sign prefixed.
					</h3>
					<h3>
						= 5x + 9y - 2z – (2x - 5y + 3z)
					</h3>
					<h3>
						(ii) Now we need to remove the parentheses by changing the sign of
						each term which is in the parentheses.
					</h3>
					<h3>
						(iii) Arrange the like terms.
					</h3>
					<h3>= 5x – 2x + 9y + 5y - 2z - 3z</h3>
					<h3>
						(iv) Finally add those like terms.
					</h3>
					<h3>= 3x + 14y - 5z</h3>

					<br />
					<br />
					<h2>
						<a class="link" href="/Polynomial_Operations/3"
							>3. Multiplying Polynomials</a
						>
					</h2>
					<br />
					<p>
						To multiply two polynomials with each other, take the terms of the
						first polynomial and distribute them over the second polynomial.
					</p>
					<h3>(a+b)(c+d)=a(c+d)+b(c+d)=ac+ad+bc+bd.</h3>
					<p>Alternatively, distribute the terms of the second polynomial:</p>
					<h3>(a+b)(c+d)=(a+b)c+(a+b)d=ac+bc+ad+bd.</h3>
					<p>
						Although the terms are in slightly different order, these two
						results are the same.
					</p>
					<p>
						<strong>For Example:</strong>
					</p>
					<p>Multiply <strong>(6x−3y)×(2x+5y)</strong></p>
					<p>
						<strong>Solution:</strong>
					</p>
					<h3>
						⇒ 6x × (2x + 5y) –3y × (2x + 5y) ———- Using distributive law of
						multiplication
					</h3>
					<h3>
						⇒ (12x<sup>2</sup>+ 30xy) – (6yx + 15y<sup>2</sup>) ———- Using
						distributive law of multiplication
					</h3>
					<h3>
						⇒12x<sup>2</sup> + 30xy - 6yx + 15y<sup>2</sup> —————– as xy = yx
					</h3>
					<h3>
						>Thus, (6x−3y)×(2x+5y)= 12x<sup>2</sup> + 30xy -6yx + 15y<sup
							>2</sup
						>
						>
					</h3>

					<br />
					<br />
					<h2>
						<a class="link" href="/Polynomial_Operations/4"
							>4. Dividing Polynomials</a
						>
					</h2>
					<br />
					<p>
						Division of polynomial by monomial means dividing the polynomials
						which is written as numerator by a monomial which is written as
						denominator to find their quotient.
					</p>
					<p>
						To divide a polynomial by a monomial, separately divide each term of
						the polynomial by the monomial and add each operation’s quotient to
						get the answer.
					</p>
					<p>
						<strong>For Example:</strong>
					</p>
					<p>
						Divide <strong> 24x<sup>3</sup> – 12xy + 9x by 3x.</strong>
					</p>
					<p>
						<strong>Solution:</strong>
					</p>
					<h3>
						⇒ (24x<sup>3</sup>–12xy + 9x)/3x
					</h3>
					<h3>
						⟹ (24x<sup>3</sup>/3x) – (12xy/3x) + (9x/3x)
					</h3>
					<h3>⇒ 8x<sup>3</sup> – 4y + 3</h3>
					<h3>
						>Thus, 24x<sup>3</sup> – 12xy + 9x / 3x is 8x<sup>3</sup> – 4y + 3 >
						>
					</h3>
					<br />

					<div class="next">
						<v-btn large class="success" rounded to="Final Test/5/confirmation"
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
