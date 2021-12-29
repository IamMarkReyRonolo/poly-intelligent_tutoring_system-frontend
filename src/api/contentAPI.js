export default class Content {
	getChapterTest(lesson_name, chapter_number) {
		const lesson1_1 = {
			lesson_name: "Intro To Polynomials",
			chapter_number: 1,
			questions: [
				{
					question_number: 1,
					question:
						"Find the degree and constant term of the polynomial x<sup>4</sup> + 7x<sup>3</sup> – 2x. ",
					choices: [
						{
							correct_answer: false,
							choice: `Degree = 7, constant = 1.`,
						},
						{
							correct_answer: false,
							choice: "Degree = 1, constant = 7.",
						},
						{
							correct_answer: true,
							choice: "Degree = 4, constant = 0.",
						},
						{
							correct_answer: false,
							choice: "Degree = 3, constant = -2.",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question:
						"Find the degree and constant term of the polynomial 3x<sup>20</sup> – x<sup>10</sup> + x<sup>9</sup> – 5.",
					choices: [
						{
							correct_answer: true,
							choice: "Degree = 20, constant = -5.",
						},
						{
							correct_answer: false,
							choice: "Degree = 10, constant = 3.",
						},
						{
							correct_answer: false,
							choice: "Degree = 3, constant = -1.",
						},
						{
							correct_answer: false,
							choice: "Degree = 9, constant = -5.",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question:
						"Find the degree and constant term of the polynomial x<sup>15</sup> + 8.",
					choices: [
						{
							correct_answer: false,
							choice: "Degree = 8, constant = 15.",
						},
						{
							correct_answer: false,
							choice: "Degree = 1, constant = 15.",
						},
						{
							correct_answer: true,
							choice: "Degree = 15, constant = 8.",
						},
						{
							correct_answer: false,
							choice: "Degree = 15, constant = 0.",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question:
						"Determine the variables of the polynomial x<sup>7</sup> + 7y<sup>3</sup> – 2z.",
					choices: [
						{
							correct_answer: false,
							choice: "1 , 7 , -2",
						},
						{
							correct_answer: false,
							choice: "7 , 3 , 1",
						},
						{
							correct_answer: true,
							choice: "x , y , z",
						},
						{
							correct_answer: false,
							choice: "No variables",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question:
						"Determine the exponents of the polynomial x<sup>7</sup> + 7y<sup>3</sup> – 2z.",
					choices: [
						{
							correct_answer: false,
							choice: "1 , 7 , -2",
						},
						{
							correct_answer: true,
							choice: "7 , 3 , 1",
						},
						{
							correct_answer: false,
							choice: "x , y , z",
						},
						{
							correct_answer: false,
							choice: "No exponents",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question:
						"Determine the constants of the polynomial x<sup>7</sup> + 7y<sup>3</sup> – 2z.",
					choices: [
						{
							correct_answer: true,
							choice: "1 , 7 , -2",
						},
						{
							correct_answer: false,
							choice: "7 , 3 , 1",
						},
						{
							correct_answer: false,
							choice: "x , y , z",
						},
						{
							correct_answer: false,
							choice: "No constants",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question:
						"Determine the variables of the polynomial a<sup>2</sup> + 3b<sup>3</sup> – 2c.",
					choices: [
						{
							correct_answer: false,
							choice: "No variables",
						},
						{
							correct_answer: false,
							choice: "2 , 3 , 1",
						},
						{
							correct_answer: false,
							choice: "1 , 3 , -2",
						},
						{
							correct_answer: true,
							choice: "a , b , c",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question:
						"Determine the exponents of the polynomial a<sup>2</sup> + 3b<sup>3</sup> – 2c.",
					choices: [
						{
							correct_answer: false,
							choice: "No exponents",
						},
						{
							correct_answer: true,
							choice: "2 , 3 , 1",
						},
						{
							correct_answer: false,
							choice: "1 , 3 , -2",
						},
						{
							correct_answer: false,
							choice: "a , b , c",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question:
						"Determine the constants of the polynomial a<sup>2</sup> + 3b<sup>3</sup> – 2c.",
					choices: [
						{
							correct_answer: false,
							choice: "No exponents",
						},
						{
							correct_answer: false,
							choice: "2 , 3 , 1",
						},
						{
							correct_answer: true,
							choice: "1 , 3 , -2",
						},
						{
							correct_answer: false,
							choice: "a , b , c",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question:
						"Find the degree and constant term of the polynomial x<sup>7</sup> – 10x<sup>5</sup> + x<sup>2</sup> – 100.",
					choices: [
						{
							correct_answer: false,
							choice: "Degree = 1, constant = -10.",
						},
						{
							correct_answer: false,
							choice: "Degree = -100, constant = 7.",
						},
						{
							correct_answer: false,
							choice: "Degree = 7, constant = 5.",
						},
						{
							correct_answer: true,
							choice: "Degree = 7, constant = -100.",
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
			questions: [
				{
					question_number: 1,
					question:
						"Classify this polynomial: –5u – u<sup>3</sup> + 8 <sup></sup>",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: true,
							choice: "Trinomial",
						},
						{
							correct_answer: false,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question: "Classify this polynomial: 3abc – a + 8b – 2c + 4bc",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: false,
							choice: "Trinomial",
						},
						{
							correct_answer: true,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question: "Classify this polynomial:  7m<sup>2</sup>n<sup>2</sup> ",
					choices: [
						{
							correct_answer: true,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: false,
							choice: "Trinomial",
						},
						{
							correct_answer: false,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question:
						"Classify this polynomial: –z<sup>6</sup> + 3z<sup>5</sup> + 5z<sup>4</sup> – 1",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: false,
							choice: "Trinomial",
						},
						{
							correct_answer: true,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question:
						"Classify this polynomial: 3p<sup>4</sup> + 7pq + 2q<sup>3</sup>r<sup>2</sup> – 9 + 2q<sup></sup>7 + pqr",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: false,
							choice: "Trinomial",
						},
						{
							correct_answer: true,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question: "Classify this polynomial: 8 + 3h – gh",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: true,
							choice: "Trinomial",
						},
						{
							correct_answer: false,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question:
						"Classify this polynomial: 2cd<sup>5</sup> – 9c<sup>5</sup> – 5d<sup>3</sup> + 3",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: false,
							choice: "Trinomial",
						},
						{
							correct_answer: true,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question: "Classify this polynomial: –6k",
					choices: [
						{
							correct_answer: true,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: false,
							choice: "Trinomial",
						},
						{
							correct_answer: false,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question: "Classify this polynomial: 6wxy – xy – 8w<sup>3</sup>x",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: true,
							choice: "Trinomial",
						},
						{
							correct_answer: false,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question: "Classify this polynomial: 3p<sup>2</sup> – q",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: true,
							choice: "Binomial",
						},
						{
							correct_answer: false,
							choice: "Trinomial",
						},
						{
							correct_answer: false,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
		};

		const lesson1_3 = {
			lesson_name: "Intro To Polynomials",
			chapter_number: 3,
			questions: [
				{
					question_number: 1,
					question:
						"What is the classification of the following polynomial equation? x<sup>2</sup>-8x+10 = 0 <sup></sup>",
					choices: [
						{
							correct_answer: false,
							choice: `Linear`,
						},
						{
							correct_answer: true,
							choice: "Quadratic",
						},
						{
							correct_answer: false,
							choice: "Cubic",
						},
						{
							correct_answer: false,
							choice: "Quartic",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question:
						"What is the classification of the following polynomial equation? 5x<sup>3</sup> + 3x<sup>2</sup> - 4x<sup>2</sup>y = 0",
					choices: [
						{
							correct_answer: false,
							choice: `Linear`,
						},
						{
							correct_answer: false,
							choice: "Quadratic",
						},
						{
							correct_answer: true,
							choice: "Cubic",
						},
						{
							correct_answer: false,
							choice: "Quartic",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question:
						"What is the classification of the following polynomial equation? x+10 = 0",
					choices: [
						{
							correct_answer: true,
							choice: `Linear`,
						},
						{
							correct_answer: false,
							choice: "Quadratic",
						},
						{
							correct_answer: false,
							choice: "Cubic",
						},
						{
							correct_answer: false,
							choice: "Quartic",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question:
						"What is the classification of the following polynomial equation? -2a<sup>3</sup>b<sup>2</sup>c + 2 = 0",
					choices: [
						{
							correct_answer: false,
							choice: `Linear`,
						},
						{
							correct_answer: false,
							choice: "Quadratic",
						},
						{
							correct_answer: true,
							choice: "Cubic",
						},
						{
							correct_answer: false,
							choice: "Quartic",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question:
						"What is the classification of the following polynomial equation? a + b + 100 = 0",
					choices: [
						{
							correct_answer: true,
							choice: `Linear`,
						},
						{
							correct_answer: false,
							choice: "Quadratic",
						},
						{
							correct_answer: false,
							choice: "Cubic",
						},
						{
							correct_answer: false,
							choice: "Quartic",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question: "Determine in the following the valid polynomial equation.",
					choices: [
						{
							correct_answer: true,
							choice: `x<sup>2</sup>-8x+10 = 0`,
						},
						{
							correct_answer: false,
							choice: "5x<sup>3</sup> + 3x<sup>2</sup> - 4x<sup>2</sup>y",
						},
						{
							correct_answer: false,
							choice: "x + 10",
						},
						{
							correct_answer: false,
							choice: "-2a<sup>3</sup>b<sup>2</sup>c + 2",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question: "Determine in the following the valid polynomial equation.",
					choices: [
						{
							correct_answer: false,
							choice: `x<sup>2</sup>-8x+10 `,
						},
						{
							correct_answer: false,
							choice: "5x<sup>3</sup> + 3x<sup>2</sup> - 4x<sup>2</sup>y",
						},
						{
							correct_answer: true,
							choice: "x + 10 = 100",
						},
						{
							correct_answer: false,
							choice: "-2a<sup>3</sup>b<sup>2</sup>c + 2",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question: "Determine in the following the valid polynomial equation.",
					choices: [
						{
							correct_answer: false,
							choice: `x<sup>2</sup>-8x+10`,
						},
						{
							correct_answer: true,
							choice: "5x<sup>3</sup> + 3x<sup>2</sup> = 4x<sup>2</sup>y",
						},
						{
							correct_answer: false,
							choice: "x + 10",
						},
						{
							correct_answer: false,
							choice: "-2a<sup>3</sup>b<sup>2</sup>c + 2",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question: "Determine in the following the valid polynomial equation.",
					choices: [
						{
							correct_answer: false,
							choice: `x<sup>2</sup>-8x+10`,
						},
						{
							correct_answer: false,
							choice: "5x<sup>3</sup> + 3x<sup>2</sup> - 4x<sup>2</sup>y",
						},
						{
							correct_answer: false,
							choice: "x + 10",
						},
						{
							correct_answer: true,
							choice: "-2a<sup>3</sup>b<sup>2</sup>c + 2 = x + 2",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question: "Determine in the following the valid polynomial equation.",
					choices: [
						{
							correct_answer: false,
							choice: `x<sup>2</sup>-8x+10`,
						},
						{
							correct_answer: false,
							choice: "5x<sup>3</sup> + 3x<sup>2</sup> - 4y",
						},
						{
							correct_answer: true,
							choice: "x + 25 = x + 50",
						},
						{
							correct_answer: false,
							choice: "-2a<sup>3</sup>b<sup>2</sup>c + 2",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
		};

		const lesson1_4 = {
			lesson_name: "Intro To Polynomials",
			chapter_number: 4,
			questions: [
				{
					question_number: 1,
					question:
						"Determine the variables of the polynomial a<sup>2</sup> + 3b<sup>3</sup> – 2c.",
					choices: [
						{
							correct_answer: false,
							choice: "No variables",
						},
						{
							correct_answer: false,
							choice: "2 , 3 , 1",
						},
						{
							correct_answer: false,
							choice: "1 , 3 , -2",
						},
						{
							correct_answer: true,
							choice: "a , b , c",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question:
						"Determine the exponents of the polynomial a<sup>2</sup> + 3b<sup>3</sup> – 2c.",
					choices: [
						{
							correct_answer: false,
							choice: "No exponents",
						},
						{
							correct_answer: true,
							choice: "2 , 3 , 1",
						},
						{
							correct_answer: false,
							choice: "1 , 3 , -2",
						},
						{
							correct_answer: false,
							choice: "a , b , c",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question:
						"Determine the constants of the polynomial a<sup>2</sup> + 3b<sup>3</sup> – 2c.",
					choices: [
						{
							correct_answer: false,
							choice: "No exponents",
						},
						{
							correct_answer: false,
							choice: "2 , 3 , 1",
						},
						{
							correct_answer: true,
							choice: "1 , 3 , -2",
						},
						{
							correct_answer: false,
							choice: "a , b , c",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question:
						"Classify this polynomial: –5u – u<sup>3</sup> + 8 <sup></sup>",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: true,
							choice: "Trinomial",
						},
						{
							correct_answer: false,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question: "Classify this polynomial: 3abc – a + 8b – 2c + 4bc",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: false,
							choice: "Trinomial",
						},
						{
							correct_answer: true,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question: "Classify this polynomial:  7m<sup>2</sup>n<sup>2</sup> ",
					choices: [
						{
							correct_answer: true,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: false,
							choice: "Trinomial",
						},
						{
							correct_answer: false,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question:
						"Classify this polynomial: –z<sup>6</sup> + 3z<sup>5</sup> + 5z<sup>4</sup> – 1",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
						},
						{
							correct_answer: false,
							choice: "Binomial",
						},
						{
							correct_answer: false,
							choice: "Trinomial",
						},
						{
							correct_answer: true,
							choice: "more than 3 terms",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question:
						"What is the classification of the following polynomial equation? 5x<sup>3</sup> + 3x<sup>2</sup> - 4x<sup>2</sup>y = 0",
					choices: [
						{
							correct_answer: false,
							choice: `Linear`,
						},
						{
							correct_answer: false,
							choice: "Quadratic",
						},
						{
							correct_answer: true,
							choice: "Cubic",
						},
						{
							correct_answer: false,
							choice: "Quartic",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question:
						"What is the classification of the following polynomial equation? x+10 = 0",
					choices: [
						{
							correct_answer: true,
							choice: `Linear`,
						},
						{
							correct_answer: false,
							choice: "Quadratic",
						},
						{
							correct_answer: false,
							choice: "Cubic",
						},
						{
							correct_answer: false,
							choice: "Quartic",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question: "Determine in the following the valid polynomial equation.",
					choices: [
						{
							correct_answer: false,
							choice: `x<sup>2</sup>-8x+10 `,
						},
						{
							correct_answer: false,
							choice: "5x<sup>3</sup> + 3x<sup>2</sup> - 4x<sup>2</sup>y",
						},
						{
							correct_answer: true,
							choice: "x + 10 = 100",
						},
						{
							correct_answer: false,
							choice: "-2a<sup>3</sup>b<sup>2</sup>c + 2",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
		};

		const contents = [lesson1_1, lesson1_2, lesson1_3, lesson1_4];
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
