import Vue from "vue";
import VueRouter from "vue-router";

import AccessDenied from "../components/ErrorComponents/AccessDenied.vue";
import NotFound from "../components/ErrorComponents/404.vue";

import Landing from "../views/Landing.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Developers from "../views/Developers.vue";
import Dashboard from "../views/Dashboard.vue";
import Lessons from "../views/Lessons.vue";
import Chapters from "../views/Chapters.vue";

import Lesson1_1 from "../components/Lesson1/Chapter1.vue";
import Lesson1_2 from "../components/Lesson1/Chapter2.vue";
import Lesson1_3 from "../components/Lesson1/Chapter3.vue";
import Lesson1_4 from "../components/Lesson1/Final.vue";

import Lesson2_1 from "../components/Lesson2/Chapter1.vue";
import Lesson2_2 from "../components/Lesson2/Chapter2.vue";
import Lesson2_3 from "../components/Lesson2/Chapter3.vue";
import Lesson2_4 from "../components/Lesson2/Chapter4.vue";
import Lesson2_5 from "../components/Lesson2/Final.vue";

import Lesson3_1 from "../components/Lesson3/Chapter1.vue";
import Lesson3_2 from "../components/Lesson3/Final.vue";

import Confirmation from "../views/Confirmation.vue";
import Exercise from "../views/Exercise.vue";
import Result from "../views/Result.vue";

import PreTestIntro from "../views/PreTestIntro.vue";
import PreTest from "../views/PreTest.vue";
import PreTestResult from "../views/PretestResult.vue";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: Landing,
	},
	{ path: "/signin", component: SignIn },
	{ path: "/signup", component: SignUp },
	{ path: "/developers", component: Developers },
	{ path: "/dashboard", component: Dashboard },
	{ path: "/lessons", component: Lessons },
	{ path: "/:lessonName/chapters", component: Chapters },

	{ path: "/Intro_To_Polynomials/1", component: Lesson1_1 },
	{ path: "/Intro_To_Polynomials/2", component: Lesson1_2 },
	{ path: "/Intro_To_Polynomials/3", component: Lesson1_3 },
	{ path: "/Intro_To_Polynomials/4", component: Lesson1_4 },

	{ path: "/Polynomial_Operations/1", component: Lesson2_1 },
	{ path: "/Polynomial_Operations/2", component: Lesson2_2 },
	{ path: "/Polynomial_Operations/3", component: Lesson2_3 },
	{ path: "/Polynomial_Operations/4", component: Lesson2_4 },
	{ path: "/Polynomial_Operations/5", component: Lesson2_5 },

	{ path: "/Solving_Linear_Polynomials/1", component: Lesson3_1 },
	{ path: "/Solving_Linear_Polynomials/2", component: Lesson3_2 },

	{
		path: "/:lessonName/:chapterName/:chapterNumber/confirmation",
		component: Confirmation,
	},

	{
		path: "/:lessonName/:chapterName/:chapterNumber/exercise",
		component: Exercise,
	},

	{
		path: "/:lessonName/:chapterName/:chapterNumber/exercise/result",
		component: Result,
	},

	{
		path: "/pretest-intro",
		component: PreTestIntro,
	},

	{
		path: "/pretest",
		component: PreTest,
	},

	{
		path: "/pretest-result",
		component: PreTestResult,
	},

	{ path: "*", component: NotFound },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
