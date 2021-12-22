<template>
	<div class="bigContainer">
		<div class="header">
			<v-btn color="success" class="aboutPoly" to="/">
				ABOUT POLY
			</v-btn>
		</div>

		<div class="main">
			<div class="con1">
				<div class="imageCon"><img src="../assets/Picture1.png" alt="" /></div>
				<div class="pCon">
					<p>
						MEET THE DEVELOPERS
					</p>
				</div>
			</div>
		</div>

		<div class="developers">
			<div class="container1">
				<div class="inner">
					<v-avatar size="150">
						<img src="../assets/picc2.jpg" alt="Mark Rey T. Ronolo" />
					</v-avatar>
					<div>
						<h2>Mark Rey T. Ronolo</h2>
						<p>
							Mark Rey is the backend engineer of this system. He loves backend
							development using Nodejs and Express.
						</p>
					</div>
				</div>

				<div class="inner">
					<v-avatar size="150">
						<img src="../assets/picc1.jpg" alt="Fatima B. Madrigal" />
					</v-avatar>
					<div>
						<h2>Fatima B. Madrigal</h2>
						<p>
							Fatima is the frontend engineer of this system. She loves frontend
							development using the Vue framework.
						</p>
					</div>
				</div>
			</div>
			<div class="container2">
				<div class="inner">
					<v-avatar size="150">
						<img src="../assets/picc3.jpg" alt="Aubrey Nacua" />
					</v-avatar>
					<div>
						<h2>Aubrey Nacua</h2>
						<p>
							Ms. Aubrey is the adviser of this project. She is the one who
							manages the team to achieve the goal.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			number: 0,
			items: ["Male", "Female"],
		}),
		methods: {
			clicked() {
				this.number++;
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

	.main {
		width: 80%;
		margin: auto;
		padding: 10px;
	}

	.con1 {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
	}

	.main .imageCon {
		margin-top: -25px;
		padding: 5px;
	}

	.main .pCon {
		padding: 20px;
		border-left: 10px solid #74d76b;
	}

	.pCon p {
		font-size: 60px;
		text-align: justify;
		font-weight: bolder;
	}

	img {
		width: 300px;
	}

	.developers {
		width: 80%;
		margin: 20px auto;
	}

	.container1 {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}

	.container2 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70%;
		margin: auto;
		padding: 20px;
	}

	.inner {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 600px;
		padding: 0px 5px;
	}

	.inner div {
		padding: 30px;
	}
</style>
