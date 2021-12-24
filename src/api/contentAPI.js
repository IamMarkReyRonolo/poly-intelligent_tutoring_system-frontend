export default class Content {
	getChapterContent(lesson_name, chapter_number) {
		const lesson1_1 = {
			lesson_name: "Intro To Polynomials",
			chapter_number: 1,
			video: "Number 1",
			sections: ["asdasd", "asdasdasd"],
			pop_quiz: [{ "What is this?": "asdasd" }],
			exercise: [{ "What is that?": "hello" }],
		};

		const lesson1_2 = {
			lesson_name: "Intro To Polynomials",
			chapter_number: 2,
			video: "Number 2",
			sections: ["asdasd", "asdasdasd"],
			pop_quiz: [{ 1: { question: "", choices: [], answer: [] } }],
			exercise: [{ 1: { question: "", choices: [], answer: [] } }],
		};

		const contents = [lesson1_1, lesson1_2];
		let result;
		contents.forEach((content) => {
			if (
				content.lesson_name == lesson_name &&
				content.chapter_number == chapter_number
			) {
				result = content;
			}
		});

		return result;
	}
}
