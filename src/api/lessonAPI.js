import axios from "axios";
const url = "http://localhost:3000/api/lessons";
axios.defaults.headers.common["auth-token"] =
	"Bearer " + localStorage.getItem("token");

export default class API {
	async getAllLessons() {
		axios.defaults.headers.common["auth-token"] =
			"Bearer " + localStorage.getItem("token");
		const lessons = await axios.get(url + "/all");
		return lessons;
	}

	async signInUser(credentials) {
		const user = await axios.post(url + "/signin", credentials);
		return user;
	}

	async createUser(newUser) {
		const user = await axios.post(url + "/create", newUser);
		return user;
	}

	async updateUser(userId, updatedUser) {
		const user = await axios.patch(url + "/" + userId, updatedUser);
		return user;
	}
}
