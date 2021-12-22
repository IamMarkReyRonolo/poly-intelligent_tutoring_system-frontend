<template>
	<div class="bigContainer">
		<div class="main">
			<div class="con1">
				<div class="imageCon"><img src="../assets/Picture1.png" alt="" /></div>
				<div class="pCon">
					<p>
						POLY IS AN INTELLIGENT TUTORING SYSTEM DESIGNED TO HELP STUDENTS
						LEARN BASIC POLYNOMIALS. NOW STUDENTS CAN GET HELP LEARNING ABOUT
						POLYNOMIALS JUST LIKE HAVING A HUMAN TUTOR. IN THE MEANTIME POLY
						TEACHES ONLY 3 TOPICS :
						<strong
							>THE INTRODUCTION TO POLYNOMIALS, POLYNOMIAL OPERATIONS AND
							SOLVING POLYNOMIALS</strong
						>. MORE TOPICS WILL BE OUT SOON.
					</p>
				</div>
			</div>

			<div class="con2">
				<div class="btnsCon">
					<v-btn class="signIn" to="/signin" text color="success" elevation="2"
						>SIGN IN</v-btn
					>
					<v-btn class="signUp" color="success" to="/signup">JOIN US</v-btn>
				</div>
			</div>
		</div>

		<img src="../assets/Picture3.png" alt="" class="bgImg" />
		<div class="con3">
			<v-btn color="success" class="aboutBtn" to="/developers"
				>ABOUT THE DEVELOPERS</v-btn
			>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			number: 0,
		}),
		methods: {
			clicked() {
				this.number++;
			},
		},

		created() {
			if (localStorage.getItem("token")) {
				this.$router.push("/dashboard");
			}
		},
	};
</script>

<style scoped>
	.bigContainer {
		height: 100%;
		width: 100%;
		background-color: #f7f7f7;
	}

	.main {
		width: 80%;
		margin: 100px auto;
		padding: 30px;
	}

	.con1 {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.con3 {
		display: flex;
		justify-content: flex-end;
		margin-top: -40px;
		margin-right: 40px;
	}

	.main .imageCon {
		margin-top: -25px;
		padding: 5px;
	}

	.main .pCon {
		padding: 20px;
		border-left: 10px solid #74d76b;
	}

	.con p {
		font-size: 20px;
		text-align: justify;
		font-weight: 500;
	}

	img {
		width: 300px;
	}

	.bgImg {
		margin-top: -80px;
		width: 850px;
	}

	.btnsCon {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.signIn,
	.signUp {
		margin: 5px;
		width: 90px;
		text-align: center;
		padding: 6px;
		cursor: pointer;
		font-size: 12px;
		font-weight: bold;
	}

	.signIn {
		color: #74d76b;
		background-color: white;
	}

	.aboutBtn {
		font-size: 14px;
		margin: 5px;
		text-align: center;
		padding: 3px;
		cursor: pointer;
		font-size: 12px;
		font-weight: bold;
	}

	.signUp,
	.aboutBtn {
		background-color: #74d76b;
		color: white;
	}
</style>
