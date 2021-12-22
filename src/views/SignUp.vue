<template>
	<div class="bigContainer">
		<div class="header">
			<v-btn color="success" class="aboutPoly" to="/">
				ABOUT POLY
			</v-btn>
		</div>

		<div class="main">
			<div class="imageCon"><img src="../assets/Picture1.png" alt="" /></div>
			<div class="signInContainer">
				<form @submit.prevent="register">
					<h1>SIGN UP</h1>
					<div class="con">
						<div class="innerCon">
							<v-text-field
								v-model="first_name"
								label="First Name"
								clearable
								required
							></v-text-field>
							<v-text-field
								v-model="last_name"
								label="Last Name"
								clearable
								required
							></v-text-field>
							<v-text-field
								v-model="age"
								label="Age"
								clearable
								type="number"
								required
							></v-text-field>
							<v-select
								:items="items"
								label="Gender"
								value="Male"
								v-model="gender"
							></v-select>
						</div>
						<div class="innerCon">
							<v-text-field
								v-model="username"
								label="Username"
								required
							></v-text-field>
							<v-text-field
								v-model="password"
								label="Password"
								type="password"
								required
							></v-text-field>
							<v-text-field
								v-model="repeatPassword"
								label="Repeat Password"
								type="password"
								:error="!checkPassword"
								required
							></v-text-field>
						</div>
					</div>

					<div class="btnsCon">
						<v-btn
							class="signUp"
							color="success"
							type="submit"
							:disabled="!checkPassword"
							>JOIN US</v-btn
						>
						<div><p>ALREADY HAVE AN ACCOUNT?</p></div>
						<v-btn class="signIn" to="/signin">SIGN IN</v-btn>
					</div>
				</form>
			</div>
		</div>

		<v-dialog hide-overlay persistent width="300" v-model="signUpDialog">
			<v-card color="white" light>
				<v-card-text>
					<h3 class="dialogText">Signing up. Please wait.</h3>
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
	import userAPI from "../api/userAPI";

	export default {
		data: () => ({
			number: 0,
			first_name: "",
			last_name: "",
			age: "",
			gender: "",
			username: "",
			password: "",
			repeatPassword: "",
			items: ["Male", "Female"],
			signUpDialog: false,
		}),
		methods: {
			async register() {
				try {
					this.signUpDialog = true;
					const registration = {
						firstName: this.first_name,
						lastName: this.last_name,
						age: this.age,
						gender: this.gender,
						email: this.username,
						password: this.password,
					};
					const response = await userAPI.prototype.createUser(registration);
					this.signUpDialog = false;
					localStorage.setItem("token", response.data.user.token);
					this.$router.push("/dashboard");
				} catch (error) {
					this.signUpDialog = false;
					alert(error.message);
				}
			},
		},

		created() {
			if (localStorage.getItem("token")) {
				this.$router.push("/dashboard");
			}
		},

		computed: {
			checkPassword: function() {
				return this.password == this.repeatPassword;
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

	.header {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 5px 40px;
		padding-top: 40px;
	}

	.aboutPoly {
		width: 120px;
		padding: 5px 10px;
		background-color: #74d76b;
		color: white;
		cursor: pointer;
		font-size: 12px;
		font-weight: bold;
		text-align: center;
	}

	.imageCon {
		margin-top: -60px;
		margin-left: -23px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 300px;
	}

	.signInContainer {
		background: white;
		border-radius: 20px;
		width: 70%;
		margin: auto;
		margin-top: -70px;
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	}

	.con {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.innerCon {
		margin: 0px 80px;
	}

	form {
		padding-top: 80px;
		padding-bottom: 10px;
		text-align: center;
	}

	h1 {
		margin-bottom: 20px;
		color: #323232;
	}

	input {
		border-bottom: 1px solid rgb(77, 77, 77);
		display: block;
		padding: 10px;
		font-size: 16px;
		margin: 15px auto;
		width: 250px;
		color: #323232;
		outline: none;
	}

	.btnsCon {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 20px 0px;
	}

	p {
		font-size: 8px;
		color: rgb(78, 78, 78);
		font-weight: bold;
		padding: 10px 0px;
		margin: 0px;
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
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
		border-radius: 4px;
		padding: 8px 6px;
	}

	.signUp {
		background-color: #74d76b;
		color: white;
	}

	.dialogText {
		padding-top: 10px;
	}
</style>
