export default class Content {
	getChapterTest(lesson_name, chapter_number) {
		const lesson1_1 = {
			lesson_name: "Intro To Polynomials",
			chapter_number: 1,
			questions: [
				{
					question_number: 1,
					question: "Question 1",
					choices: [
						{
							correct_answer: false,
							choice: `x<sup>2</sup>`,
						},
						{
							correct_answer: false,
							choice: "x<sup>3</sup>",
						},
						{
							correct_answer: true,
							choice: "x<sup>4</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>5</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question: "Question 2",
					choices: [
						{
							correct_answer: false,
							choice: "x<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>3</sup>",
						},
						{
							correct_answer: true,
							choice: "x<sup>4</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>5</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question: "Question 3",
					choices: [
						{
							correct_answer: false,
							choice: "x<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>3</sup>",
						},
						{
							correct_answer: true,
							choice: "x<sup>4</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>5</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question: "Question 4",
					choices: [
						{
							correct_answer: false,
							choice: "x<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>3</sup>",
						},
						{
							correct_answer: true,
							choice: "x<sup>4</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>5</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question: "Question 5",
					choices: [
						{
							correct_answer: false,
							choice: "x<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>3</sup>",
						},
						{
							correct_answer: true,
							choice: "x<sup>4</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>5</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question: "Question 6",
					choices: [
						{
							correct_answer: false,
							choice: "x<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>3</sup>",
						},
						{
							correct_answer: true,
							choice: "x<sup>4</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>5</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question: "Question 7",
					choices: [
						{
							correct_answer: false,
							choice: "x<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>3</sup>",
						},
						{
							correct_answer: true,
							choice: "x<sup>4</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>5</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question: "Question 8",
					choices: [
						{
							correct_answer: false,
							choice: "x<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>3</sup>",
						},
						{
							correct_answer: true,
							choice: "x<sup>4</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>5</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question: "Question 9",
					choices: [
						{
							correct_answer: false,
							choice: "x<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>3</sup>",
						},
						{
							correct_answer: true,
							choice: "x<sup>4</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>5</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question: "Question 10",
					choices: [
						{
							correct_answer: false,
							choice: "x<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>3</sup>",
						},
						{
							correct_answer: true,
							choice: "x<sup>4</sup>",
						},
						{
							correct_answer: false,
							choice: "x<sup>5</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
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
