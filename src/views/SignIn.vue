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
				<form @submit.prevent="signIn">
					<h1>SIGN IN</h1>
					<div class="input">
						<v-text-field
							v-model="username"
							label="Username"
							required
						></v-text-field>
					</div>
					<div class="input">
						<v-text-field
							v-model="password"
							label="Password"
							type="password"
							required
						></v-text-field>
					</div>

					<div class="btnsCon">
						<v-btn type="submit" class="signIn">SIGN IN</v-btn>
						<div><p>DON'T HAVE AN ACCOUNT YET?</p></div>
						<v-btn class="signUp" color="success" to="/signup">JOIN US</v-btn>
					</div>
				</form>
			</div>
		</div>

		<v-dialog hide-overlay persistent width="300" v-model="signInDialog">
			<v-card color="white" light>
				<v-card-text>
					<h3 class="dialogText">Signing in. Please wait.</h3>
					<v-progress-linear
						indeterminate
						color="black"
						class="mb-0 mt-5"
					></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>

		<div class="text-center">
			<v-snackbar v-model="snackbar" :timeout="timeout">
				{{ errormessage }}

				<template v-slot:action="{ attrs }">
					<v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
						Close
					</v-btn>
				</template>
			</v-snackbar>
		</div>
	</div>
</template>

<script>
	import userAPI from "../api/userAPI.js";

	export default {
		data: () => ({
			username: "",
			password: "",
			signInDialog: false,
			snackbar: false,
			timeout: 2000,
			errormessage: "",
		}),
		methods: {
			async signIn() {
				try {
					this.signInDialog = true;
					const user = {
						email: this.username,
						password: this.password,
					};
					const response = await userAPI.prototype.signInUser(user);
					this.signInDialog = false;
					localStorage.setItem("token", response.data.user.token);
					this.$router.push("/dashboard");
				} catch (error) {
					this.signInDialog = false;
					this.snackbar = true;
					if (error.message == "Network Error") {
						this.errormessage = error.message;
					} else {
						this.errormessage = "Username or Password is incorrect";
					}
				}
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
		margin-top: -40px;
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
		width: 380px;
		margin: auto;
		margin-top: -60px;
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	}

	form {
		padding-top: 80px;
		padding-bottom: 40px;
		text-align: center;
	}

	h1 {
		margin-bottom: 20px;
		color: #323232;
		font-weight: bolder;
	}

	.input {
		width: 220px;
		margin: auto;
	}

	.btnsCon {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 30px 0px;
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
	}

	.signUp {
		background-color: #74d76b;
		color: white;
	}

	.dialogText {
		padding-top: 10px;
	}
</style>
