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

		const lesson2_1 = {
			lesson_name: "Polynomial Operations",
			chapter_number: 1,
			questions: [
				{
					question_number: 1,
					question:
						"Simplify (x<sup>3</sup>+2x<sup>2</sup>+5x)+(x<sup>2</sup>−3x+3)",
					choices: [
						{
							correct_answer: true,
							choice: "x<sup>3</sup>+3x<sup>2</sup>+2x+3",
						},
						{
							correct_answer: false,
							choice: "4x<sup>3</sup>+2x<sup>2</sup>+2x+8",
						},
						{
							correct_answer: false,
							choice: "3x<sup>2</sup>+2x+5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question: "Simplify x+xy−y+(x<sup>2</sup>−2y+5xy)",
					choices: [
						{
							correct_answer: false,
							choice: "4x<sup>3</sup>+2x<sup>2</sup>+2x+8",
						},
						{
							correct_answer: false,
							choice: "3x<sup>2</sup>+2x+5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: true,
							choice: "x<sup>2</sup>+x+6xy−3y",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question: "Add the polynomials 5x – 2 + y and –3y + 5x + 2",
					choices: [
						{
							correct_answer: false,
							choice: "-10x – 2y",
						},
						{
							correct_answer: false,
							choice: "10x + 2y",
						},
						{
							correct_answer: true,
							choice: "10x – 2y",
						},
						{
							correct_answer: false,
							choice: "10x + 2",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question:
						"Find the sum of –7x<sup>3</sup>y + 4x<sup>2</sup>y<sup>2</sup> – 2 and 4x3y + 1 – 8x2y2",
					choices: [
						{
							correct_answer: false,
							choice: "3x<sup>2</sup>+2x+5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: false,
							choice: "x<sup>2</sup>+x+6xy−3y",
						},
						{
							correct_answer: true,
							choice: "–3x<sup>3</sup>y–4x<sup>2</sup>y<sup>2</sup>–1 ",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question: "Add: (3x - 2) + (3x<sup>2</sup> + 6x)",
					choices: [
						{
							correct_answer: true,
							choice: `3x<sup>2</sup>+9x-2`,
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: false,
							choice: "x<sup>2</sup>+x+6xy−3y",
						},
						{
							correct_answer: false,
							choice: "–3x<sup>3</sup>y–4x<sup>2</sup>y<sup>2</sup>–1 ",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question:
						"Add: (3x<sup>2</sup> + 2x + 1) + (2x<sup>2</sup> - 4x - 5) + (3x - 1)",
					choices: [
						{
							correct_answer: false,
							choice: `3x<sup>2</sup>+9x-2`,
						},
						{
							correct_answer: true,
							choice: "5x<sup>2</sup>+x-5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: false,
							choice: "x<sup>2</sup>+x+6xy−3y",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question: "Add: (x - 2) + (x + 2) + (x - 1) + (x + 1)",
					choices: [
						{
							correct_answer: false,
							choice: `3x<sup>2</sup>+9x-2`,
						},
						{
							correct_answer: false,
							choice: "5x<sup>2</sup>+x-5",
						},

						{
							correct_answer: true,
							choice: "4x",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question: "Add: (2 x + 5) + (4x + 6) ",
					choices: [
						{
							correct_answer: true,
							choice: `6x + 11`,
						},
						{
							correct_answer: false,
							choice: `3x<sup>2</sup>+9x-2`,
						},
						{
							correct_answer: false,
							choice: "5x<sup>2</sup>+x-5",
						},

						{
							correct_answer: false,
							choice: "4x + 11",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question:
						"Add: (x<sup>2</sup> - 6 x - 9) + (- 5 x<sup>2</sup> + 9 x + 2) ",
					choices: [
						{
							correct_answer: false,
							choice: `6x+11`,
						},
						{
							correct_answer: true,
							choice: " 4x<sup>2</sup>+3x-7",
						},
						{
							correct_answer: false,
							choice: `3x<sup>2</sup>+9x-2`,
						},
						{
							correct_answer: false,
							choice: "5x<sup>2</sup>+x-5",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question: "Add: (2 xy + x + 5) + (- 3 xy + 2x - 7) ",
					choices: [
						{
							correct_answer: true,
							choice: `-xy+3x `,
						},
						{
							correct_answer: false,
							choice: " 4x<sup>2</sup>+3x-7",
						},
						{
							correct_answer: false,
							choice: `3x<sup>2</sup>+9x-2`,
						},
						{
							correct_answer: false,
							choice: "5x<sup>2</sup>+x-5",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
		};

		const lesson2_2 = {
			lesson_name: "Polynomial Operations",
			chapter_number: 2,
			questions: [
				{
					question_number: 1,
					question: "Simplify –4x + 7 – (5x – 3)",
					choices: [
						{
							correct_answer: true,
							choice: "–9x + 10",
						},
						{
							correct_answer: false,
							choice: "–9x - 10",
						},
						{
							correct_answer: false,
							choice: "9x + 10",
						},
						{
							correct_answer: false,
							choice: "–10x + 9",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question:
						" Simplify (5x<sup>2</sup> + 2) – (– 4x<sup>2</sup> + 7) + (– 3x<sup>2</sup> – 5)",
					choices: [
						{
							correct_answer: false,
							choice: "4x<sup>3</sup>+2x<sup>2</sup>+2x+8",
						},
						{
							correct_answer: false,
							choice: "3x<sup>2</sup>+2x+5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: true,
							choice: " 6x<sup>2</sup>–10",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question: "Simplify (2x<sup>2</sup>−5x+3)−(−3x<sup>2</sup>+7x−10)",
					choices: [
						{
							correct_answer: false,
							choice: "3x<sup>2</sup>+2x+5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: true,
							choice: "5x<sup>2</sup>−12x+13",
						},
						{
							correct_answer: false,
							choice: " 6x<sup>2</sup>–10",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question: "Simplify (2x<sup>2</sup>+4x+6)−(3x<sup>2</sup>+2x+10)",
					choices: [
						{
							correct_answer: false,
							choice: "3x<sup>2</sup>+2x+5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: false,
							choice: "x<sup>2</sup>+x+6xy−3y",
						},
						{
							correct_answer: true,
							choice: "−x<sup>2</sup>+2x−4",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question:
						"Simplify (x<sup>4</sup>+3x<sup>2</sup>−2)−(x<sup>4</sup>−2x<sup>2</sup>+7)",
					choices: [
						{
							correct_answer: true,
							choice: `5x<sup>2</sup>−9`,
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: false,
							choice: "x<sup>2</sup>+x+6xy−3y",
						},
						{
							correct_answer: false,
							choice: "–3x<sup>3</sup>y–4x<sup>2</sup>y<sup>2</sup>–1 ",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question:
						" Simplify: 9x<sup>2</sup> - (5x<sup>2</sup> - 8) - (-3x - 1)",
					choices: [
						{
							correct_answer: false,
							choice: `3x<sup>2</sup>+9x-2`,
						},
						{
							correct_answer: true,
							choice: "4x<sup>2</sup>+3x+9",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: false,
							choice: "x<sup>2</sup>+x+6xy−3y",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question: "Subtract (2x<sup>2</sup> + 9) from (3x - 8)",
					choices: [
						{
							correct_answer: false,
							choice: `3x<sup>2</sup>+9x-2`,
						},
						{
							correct_answer: false,
							choice: "5x<sup>2</sup>+x-5",
						},

						{
							correct_answer: true,
							choice: "-2x<sup>2</sup>+3x-17",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question:
						"Subtract: (2x<sup>2</sup> + 5x + 3) -(x<sup>2</sup> - 3x - 4)",
					choices: [
						{
							correct_answer: true,
							choice: `x<sup>2</sup>+8x+7`,
						},
						{
							correct_answer: false,
							choice: `3x<sup>2</sup>+9x-2`,
						},
						{
							correct_answer: false,
							choice: "5x<sup>2</sup>+x-5",
						},

						{
							correct_answer: false,
							choice: "4x + 11",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question:
						"A = 7x<sup>3</sup> - 3x<sup>2</sup> - 6x + 2 and B = 2x<sup>3</sup> + 4x<sup>2</sup> - 5x - 9. Find A - B.",
					choices: [
						{
							correct_answer: false,
							choice: `6x+11`,
						},
						{
							correct_answer: true,
							choice: "5x<sup>3</sup>-7x<sup>2</sup>-x+11",
						},
						{
							correct_answer: false,
							choice: `3x<sup>2</sup>+9x-2`,
						},
						{
							correct_answer: false,
							choice: "5x<sup>2</sup>+x-5",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question: "Solve: −3b+4a−10b+6ab",
					choices: [
						{
							correct_answer: true,
							choice: `−13b+4a+6ab `,
						},
						{
							correct_answer: false,
							choice: "13b+4a+6ab ",
						},
						{
							correct_answer: false,
							choice: `−13b+4a-6ab `,
						},
						{
							correct_answer: false,
							choice: "−13b-4a+6ab ",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
		};

		const lesson2_3 = {
			lesson_name: "Polynomial Operations",
			chapter_number: 3,
			questions: [
				{
					question_number: 1,
					question: "Evaluate 5(x + y)",
					choices: [
						{
							correct_answer: true,
							choice: "5x+5y",
						},
						{
							correct_answer: false,
							choice: "-5x+5y",
						},
						{
							correct_answer: false,
							choice: "5x-5y",
						},
						{
							correct_answer: false,
							choice: "5xy",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question: "Solve: (1)(2x)",
					choices: [
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: "-2x",
						},
						{
							correct_answer: false,
							choice: "x<sup>2</sup>",
						},
						{
							correct_answer: true,
							choice: "2x",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question: "Solve: (5)(4x)",
					choices: [
						{
							correct_answer: false,
							choice: "5+4x",
						},
						{
							correct_answer: false,
							choice: "-20x",
						},
						{
							correct_answer: true,
							choice: "20x",
						},
						{
							correct_answer: false,
							choice: "-5-4x",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question: "Solve: (7)(x)",
					choices: [
						{
							correct_answer: false,
							choice: "-7x",
						},
						{
							correct_answer: false,
							choice: "7-x",
						},
						{
							correct_answer: false,
							choice: "7+x",
						},
						{
							correct_answer: true,
							choice: "7x",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question: "Evaluate –2x(y + 3)",
					choices: [
						{
							correct_answer: true,
							choice: `–2xy–6x`,
						},
						{
							correct_answer: false,
							choice: "2xy+6x",
						},
						{
							correct_answer: false,
							choice: "2xy–6x",
						},
						{
							correct_answer: false,
							choice: "–2xy+6x",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question: "Evaluate –5x(x<sup>2</sup> – 3)",
					choices: [
						{
							correct_answer: false,
							choice: `-5x<sup>3</sup>–15x`,
						},
						{
							correct_answer: true,
							choice: "-5x<sup>3</sup>+15x",
						},
						{
							correct_answer: false,
							choice: "5x<sup>3</sup>+15x",
						},
						{
							correct_answer: false,
							choice: "5x<sup>-3</sup>–15x",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question: "Evaluate –2x<sup>3</sup>(x<sup>2</sup> – 3x + 4)",
					choices: [
						{
							correct_answer: false,
							choice: `–2x<sup>5</sup>+6x<sup>4</sup>+8x3`,
						},
						{
							correct_answer: false,
							choice: "–2x<sup>5</sup>-6x<sup>4</sup>–8x3",
						},

						{
							correct_answer: true,
							choice: "–2x<sup>5</sup>+6x<sup>4</sup>–8x3",
						},
						{
							correct_answer: false,
							choice: "2x<sup>5</sup>+6x<sup>4</sup>–8x3",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question: "Multiply (5x<sup>2</sup>– 2x + 3)(3x – 4)",
					choices: [
						{
							correct_answer: true,
							choice: `15x<sup>3</sup>–26x<sup>2</sup>+17x–12`,
						},
						{
							correct_answer: false,
							choice: `15x<sup>3</sup>+26x<sup>2</sup>+17x–12`,
						},
						{
							correct_answer: false,
							choice: "15x<sup>3</sup>–26x<sup>2</sup>-17x–12",
						},

						{
							correct_answer: false,
							choice: "15x<sup>3</sup>–26x<sup>2</sup>+17x+12",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question: "Solve: (x + 5)<sup>2</sup>",
					choices: [
						{
							correct_answer: false,
							choice: `x<sup>2</sup>-10x+25`,
						},
						{
							correct_answer: true,
							choice: "x<sup>2</sup>+10x+25",
						},
						{
							correct_answer: false,
							choice: `-x<sup>2</sup>+10x+25`,
						},
						{
							correct_answer: false,
							choice: "x<sup>2</sup>+5x+25",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question: "Solve: (2x + 3)(x - 7) ",
					choices: [
						{
							correct_answer: true,
							choice: `2x<sup>2</sup>-11x-21`,
						},
						{
							correct_answer: false,
							choice: "2x<sup>2</sup>-11x+21",
						},
						{
							correct_answer: false,
							choice: `2x<sup>2</sup>+11x-21`,
						},
						{
							correct_answer: false,
							choice: "2x<sup>2</sup>+17x-21",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
		};

		const lesson2_4 = {
			lesson_name: "Polynomial Operations",
			chapter_number: 4,
			questions: [
				{
					question_number: 1,
					question: "Evaluate: (x2 + 8x) ÷ x ",
					choices: [
						{
							correct_answer: true,
							choice: "x+8",
						},
						{
							correct_answer: false,
							choice: "x+8x",
						},
						{
							correct_answer: false,
							choice: "8",
						},
						{
							correct_answer: false,
							choice: "x-8",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question:
						"Divide : (4y<sup>4</sup> – y<sup>3</sup> + 2y<sup>2</sup>) ÷ (–y<sup>2</sup>) ",
					choices: [
						{
							correct_answer: false,
							choice: "4y<sup>2</sup>-y+2 <sup></sup>",
						},
						{
							correct_answer: false,
							choice: "–4y<sup>2</sup>-y–2 <sup></sup>",
						},
						{
							correct_answer: false,
							choice: "4y<sup>2</sup>+y–2 <sup></sup>",
						},
						{
							correct_answer: true,
							choice: "–4y<sup>2</sup>+y–2 <sup></sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question: "Divide : (y<sup>2</sup> + 4y) ÷ y ",
					choices: [
						{
							correct_answer: false,
							choice: "4",
						},
						{
							correct_answer: false,
							choice: "-4y",
						},
						{
							correct_answer: true,
							choice: "y+4",
						},
						{
							correct_answer: false,
							choice: "y-4",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question:
						"Find the quotient: (4x<sup>4</sup> – x<sup>3</sup> + x<sup>2</sup>) ÷ (–x<sup>2</sup>) ",
					choices: [
						{
							correct_answer: false,
							choice: "–4x<sup>2</sup>-x+1",
						},
						{
							correct_answer: false,
							choice: "4x<sup>2</sup>+x–1",
						},
						{
							correct_answer: false,
							choice: "–4x<sup>2</sup>-x–1",
						},
						{
							correct_answer: true,
							choice: "–4x<sup>2</sup>+x–1",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question:
						"Divide : (2x<sup>5</sup> + x<sup>4</sup> + x<sup>2</sup>) ÷ (–x<sup>2</sup>)",
					choices: [
						{
							correct_answer: true,
							choice: `–2x<sup>3</sup>-x<sup>2</sup>–1`,
						},
						{
							correct_answer: false,
							choice: "2x<sup>3</sup>-x<sup>2</sup>–1",
						},
						{
							correct_answer: false,
							choice: "2x<sup>3</sup>+x<sup>2</sup>–1",
						},
						{
							correct_answer: false,
							choice: "2x<sup>3</sup>-x<sup>2</sup>+1",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question:
						"Evaluate: 9m<sup>5</sup> + 12m<sup>4</sup> - 6m<sup>2</sup> ÷ 3m<sup>2</sup>",
					choices: [
						{
							correct_answer: false,
							choice: `3m<sup>3</sup>-4m<sup>2</sup>+2`,
						},
						{
							correct_answer: true,
							choice: "3m<sup>3</sup>+4m<sup>2</sup>-2",
						},
						{
							correct_answer: false,
							choice: "3m<sup>3</sup>-4m<sup>2</sup>-2",
						},
						{
							correct_answer: false,
							choice: "-3m<sup>3</sup>+4m<sup>2</sup>-2",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question:
						"Evaluate: 24x<sup>3</sup>y + 20x<sup>2</sup>y<sup>2</sup> - 4xy ÷ 2xy",
					choices: [
						{
							correct_answer: false,
							choice: `-12x<sup>2</sup>-10xy+2`,
						},
						{
							correct_answer: false,
							choice: "12x<sup>2</sup>-10xy-2",
						},

						{
							correct_answer: true,
							choice: "12x<sup>2</sup>+10xy-2",
						},
						{
							correct_answer: false,
							choice: "-12x<sup>2</sup>+10xy-2",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question:
						"Divide : (18r<sup>5</sup> + 36r<sup>4</sup> + 27r<sup>3</sup>) ÷ 9r",
					choices: [
						{
							correct_answer: true,
							choice: `2r<sup>4</sup>+4r<sup>3</sup>+3r<sup>2</sup>`,
						},
						{
							correct_answer: false,
							choice: `-2r<sup>4</sup>+4r<sup>3</sup>+3r<sup>2</sup>`,
						},
						{
							correct_answer: false,
							choice: "2r<sup>4</sup>-4r<sup>3</sup>+3r<sup>2</sup>",
						},

						{
							correct_answer: false,
							choice: "2r<sup>4</sup>+4r<sup>3</sup>-3r<sup>2</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question: "Divide a<sup>2</sup> + ab – ac by –a ",
					choices: [
						{
							correct_answer: false,
							choice: `a-b+c`,
						},
						{
							correct_answer: true,
							choice: "-a-b+c",
						},
						{
							correct_answer: false,
							choice: `-a+b+c`,
						},
						{
							correct_answer: false,
							choice: "-a-b-c",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question:
						"Find the quotient a<sup>3</sup> - a<sup>2</sup>b – a<sup>2</sup>b<sup>2</sup> by a<sup>2</sup>",
					choices: [
						{
							correct_answer: true,
							choice: `a - b - b<sup>2</sup>`,
						},
						{
							correct_answer: false,
							choice: "a + b - b<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: `a - b + b<sup>2</sup>`,
						},
						{
							correct_answer: false,
							choice: "a + b + b<sup>2</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
		};

		const lesson2_5 = {
			lesson_name: "Polynomial Operations",
			chapter_number: 5,
			questions: [
				{
					question_number: 1,
					question:
						"Simplify (x<sup>3</sup>+2x<sup>2</sup>+5x)+(x<sup>2</sup>−3x+3)",
					choices: [
						{
							correct_answer: true,
							choice: "x<sup>3</sup>+3x<sup>2</sup>+2x+3",
						},
						{
							correct_answer: false,
							choice: "4x<sup>3</sup>+2x<sup>2</sup>+2x+8",
						},
						{
							correct_answer: false,
							choice: "3x<sup>2</sup>+2x+5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question: "Simplify x+xy−y+(x<sup>2</sup>−2y+5xy)",
					choices: [
						{
							correct_answer: false,
							choice: "4x<sup>3</sup>+2x<sup>2</sup>+2x+8",
						},
						{
							correct_answer: false,
							choice: "3x<sup>2</sup>+2x+5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: true,
							choice: "x<sup>2</sup>+x+6xy−3y",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question: "Simplify (2x<sup>2</sup>−5x+3)−(−3x<sup>2</sup>+7x−10)",
					choices: [
						{
							correct_answer: false,
							choice: "3x<sup>2</sup>+2x+5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: true,
							choice: "5x<sup>2</sup>−12x+13",
						},
						{
							correct_answer: false,
							choice: " 6x<sup>2</sup>–10",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question: "Simplify (2x<sup>2</sup>+4x+6)−(3x<sup>2</sup>+2x+10)",
					choices: [
						{
							correct_answer: false,
							choice: "3x<sup>2</sup>+2x+5",
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
						},
						{
							correct_answer: false,
							choice: "x<sup>2</sup>+x+6xy−3y",
						},
						{
							correct_answer: true,
							choice: "−x<sup>2</sup>+2x−4",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question: "Evaluate –2x(y + 3)",
					choices: [
						{
							correct_answer: true,
							choice: `–2xy–6x`,
						},
						{
							correct_answer: false,
							choice: "2xy+6x",
						},
						{
							correct_answer: false,
							choice: "2xy–6x",
						},
						{
							correct_answer: false,
							choice: "–2xy+6x",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question: "Evaluate –5x(x<sup>2</sup> – 3)",
					choices: [
						{
							correct_answer: false,
							choice: `-5x<sup>3</sup>–15x`,
						},
						{
							correct_answer: true,
							choice: "-5x<sup>3</sup>+15x",
						},
						{
							correct_answer: false,
							choice: "5x<sup>3</sup>+15x",
						},
						{
							correct_answer: false,
							choice: "5x<sup>-3</sup>–15x",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question: "Evaluate –2x<sup>3</sup>(x<sup>2</sup> – 3x + 4)",
					choices: [
						{
							correct_answer: false,
							choice: `–2x<sup>5</sup>+6x<sup>4</sup>+8x3`,
						},
						{
							correct_answer: false,
							choice: "–2x<sup>5</sup>-6x<sup>4</sup>–8x3",
						},

						{
							correct_answer: true,
							choice: "–2x<sup>5</sup>+6x<sup>4</sup>–8x3",
						},
						{
							correct_answer: false,
							choice: "2x<sup>5</sup>+6x<sup>4</sup>–8x3",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question:
						"Divide : (18r<sup>5</sup> + 36r<sup>4</sup> + 27r<sup>3</sup>) ÷ 9r",
					choices: [
						{
							correct_answer: true,
							choice: `2r<sup>4</sup>+4r<sup>3</sup>+3r<sup>2</sup>`,
						},
						{
							correct_answer: false,
							choice: `-2r<sup>4</sup>+4r<sup>3</sup>+3r<sup>2</sup>`,
						},
						{
							correct_answer: false,
							choice: "2r<sup>4</sup>-4r<sup>3</sup>+3r<sup>2</sup>",
						},

						{
							correct_answer: false,
							choice: "2r<sup>4</sup>+4r<sup>3</sup>-3r<sup>2</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question: "Divide a<sup>2</sup> + ab – ac by –a ",
					choices: [
						{
							correct_answer: false,
							choice: `a-b+c`,
						},
						{
							correct_answer: true,
							choice: "-a-b+c",
						},
						{
							correct_answer: false,
							choice: `-a+b+c`,
						},
						{
							correct_answer: false,
							choice: "-a-b-c",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question:
						"Find the quotient a<sup>3</sup> - a<sup>2</sup>b – a<sup>2</sup>b<sup>2</sup> by a<sup>2</sup>",
					choices: [
						{
							correct_answer: true,
							choice: `a - b - b<sup>2</sup>`,
						},
						{
							correct_answer: false,
							choice: "a + b - b<sup>2</sup>",
						},
						{
							correct_answer: false,
							choice: `a - b + b<sup>2</sup>`,
						},
						{
							correct_answer: false,
							choice: "a + b + b<sup>2</sup>",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
		};

		const lesson3_1 = {
			lesson_name: "Solving Linear Polynomials",
			chapter_number: 1,
			questions: [
				{
					question_number: 1,
					question: "Find x in the equation: 5x + 10 = 0",
					choices: [
						{
							correct_answer: true,
							choice: "x = -2",
						},
						{
							correct_answer: false,
							choice: "x = 2",
						},
						{
							correct_answer: false,
							choice: "x = 5",
						},
						{
							correct_answer: false,
							choice: "x = -5",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question: "Find x in the equation: 5x + 10 = 25",
					choices: [
						{
							correct_answer: false,
							choice: "x = -5 ",
						},
						{
							correct_answer: false,
							choice: "x = 5 ",
						},
						{
							correct_answer: false,
							choice: "x = -3 ",
						},
						{
							correct_answer: true,
							choice: "x = 3 ",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question: "Find x in the equation: x + 10 = 64",
					choices: [
						{
							correct_answer: false,
							choice: "x = 6.4",
						},
						{
							correct_answer: false,
							choice: "x = -54",
						},
						{
							correct_answer: true,
							choice: "x = 54 ",
						},
						{
							correct_answer: false,
							choice: "x = 74",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question: "Find x in the equation: -x + 10 = 2",
					choices: [
						{
							correct_answer: false,
							choice: "x = -12",
						},
						{
							correct_answer: false,
							choice: "x = 12",
						},
						{
							correct_answer: false,
							choice: "x = -8 ",
						},
						{
							correct_answer: true,
							choice: "x = 8 ",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question: "Find x in the equation: x + 5 = 2x + 20",
					choices: [
						{
							correct_answer: true,
							choice: `x = -15`,
						},
						{
							correct_answer: false,
							choice: "x = 15",
						},
						{
							correct_answer: false,
							choice: "x = -25/4",
						},
						{
							correct_answer: false,
							choice: "x = 25/4",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question: "Find y in the equation: 3 - y = 3y - 21",
					choices: [
						{
							correct_answer: false,
							choice: `y = -6`,
						},
						{
							correct_answer: true,
							choice: "y = 6",
						},
						{
							correct_answer: false,
							choice: "y = 7",
						},
						{
							correct_answer: false,
							choice: "y = -7",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question: "Find y in the equation: y + 20 = 2y + 20",
					choices: [
						{
							correct_answer: false,
							choice: `y = 40/3`,
						},
						{
							correct_answer: false,
							choice: "y = -0",
						},

						{
							correct_answer: true,
							choice: "y = 0",
						},
						{
							correct_answer: false,
							choice: "y = -40/3",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question: "Find y in the equation: y = 2y + 3y - 36",
					choices: [
						{
							correct_answer: true,
							choice: `y = 9`,
						},
						{
							correct_answer: false,
							choice: `y = -9`,
						},
						{
							correct_answer: false,
							choice: "y = 6",
						},

						{
							correct_answer: false,
							choice: "-6",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question: "Find y in the equation: -y +7 = -8y + 42",
					choices: [
						{
							correct_answer: false,
							choice: `y = -5`,
						},
						{
							correct_answer: true,
							choice: "y = 5",
						},
						{
							correct_answer: false,
							choice: `y = -49/8`,
						},
						{
							correct_answer: false,
							choice: "y = 49/8",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question: "Find y in the equation: y + 2 = 3y",
					choices: [
						{
							correct_answer: true,
							choice: `y = 1`,
						},
						{
							correct_answer: false,
							choice: "y = 5",
						},
						{
							correct_answer: false,
							choice: `y = -1`,
						},
						{
							correct_answer: false,
							choice: "y = 2/3",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
		};

		const lesson3_2 = {
			lesson_name: "Solving Linear Polynomials",
			chapter_number: 2,
			questions: [
				{
					question_number: 1,
					question: "Find y in the equation: 3 - y = 3y - 21",
					choices: [
						{
							correct_answer: false,
							choice: `y = -6`,
						},
						{
							correct_answer: true,
							choice: "y = 6",
						},
						{
							correct_answer: false,
							choice: "y = 7",
						},
						{
							correct_answer: false,
							choice: "y = -7",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 2,
					question: "Find y in the equation: y + 20 = 2y + 20",
					choices: [
						{
							correct_answer: false,
							choice: `y = 40/3`,
						},
						{
							correct_answer: false,
							choice: "y = -0",
						},

						{
							correct_answer: true,
							choice: "y = 0",
						},
						{
							correct_answer: false,
							choice: "y = -40/3",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 3,
					question: "Find y in the equation: y = 2y + 3y - 36",
					choices: [
						{
							correct_answer: true,
							choice: `y = 9`,
						},
						{
							correct_answer: false,
							choice: `y = -9`,
						},
						{
							correct_answer: false,
							choice: "y = 6",
						},

						{
							correct_answer: false,
							choice: "-6",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 4,
					question: "Find y in the equation: -y +7 = -8y + 42",
					choices: [
						{
							correct_answer: false,
							choice: `y = -5`,
						},
						{
							correct_answer: true,
							choice: "y = 5",
						},
						{
							correct_answer: false,
							choice: `y = -49/8`,
						},
						{
							correct_answer: false,
							choice: "y = 49/8",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 5,
					question: "Find y in the equation: y + 2 = 3y",
					choices: [
						{
							correct_answer: true,
							choice: `y = 1`,
						},
						{
							correct_answer: false,
							choice: "y = 5",
						},
						{
							correct_answer: false,
							choice: `y = -1`,
						},
						{
							correct_answer: false,
							choice: "y = 2/3",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 6,
					question: "Find x in the equation: 5x + 10 = 0",
					choices: [
						{
							correct_answer: true,
							choice: "x = -2",
						},
						{
							correct_answer: false,
							choice: "x = 2",
						},
						{
							correct_answer: false,
							choice: "x = 5",
						},
						{
							correct_answer: false,
							choice: "x = -5",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 7,
					question: "Find x in the equation: 5x + 10 = 25",
					choices: [
						{
							correct_answer: false,
							choice: "x = -5 ",
						},
						{
							correct_answer: false,
							choice: "x = 5 ",
						},
						{
							correct_answer: false,
							choice: "x = -3 ",
						},
						{
							correct_answer: true,
							choice: "x = 3 ",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 8,
					question: "Find x in the equation: x + 10 = 64",
					choices: [
						{
							correct_answer: false,
							choice: "x = 6.4",
						},
						{
							correct_answer: false,
							choice: "x = -54",
						},
						{
							correct_answer: true,
							choice: "x = 54 ",
						},
						{
							correct_answer: false,
							choice: "x = 74",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 9,
					question: "Find x in the equation: -x + 10 = 2",
					choices: [
						{
							correct_answer: false,
							choice: "x = -12",
						},
						{
							correct_answer: false,
							choice: "x = 12",
						},
						{
							correct_answer: false,
							choice: "x = -8 ",
						},
						{
							correct_answer: true,
							choice: "x = 8 ",
						},
					],
					answered: false,
					is_correct: false,
				},
				{
					question_number: 10,
					question: "Find x in the equation: x + 5 = 2x + 20",
					choices: [
						{
							correct_answer: true,
							choice: `x = -15`,
						},
						{
							correct_answer: false,
							choice: "x = 15",
						},
						{
							correct_answer: false,
							choice: "x = -25/4",
						},
						{
							correct_answer: false,
							choice: "x = 25/4",
						},
					],
					answered: false,
					is_correct: false,
				},
			],
		};

		const contents = [
			lesson1_1,
			lesson1_2,
			lesson1_3,
			lesson1_4,
			lesson2_1,
			lesson2_2,
			lesson2_3,
			lesson2_4,
			lesson2_5,
			lesson3_1,
			lesson3_2,
		];
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
