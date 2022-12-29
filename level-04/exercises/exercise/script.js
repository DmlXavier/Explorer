// 1. Ask the user's name and say "hello [user's name]".
/* const name = prompt("What's your name?")
alert(`Hello, ${name}.`) */


// 2. Ask for 2 numbers, add them together and present the result to the user.
/* const numberOne = Number(prompt('Give me a number.'))
const numberTwo = Number(prompt('Give me another number.'))

alert(`The result is ${numberOne + numberTwo}.`) */


/* 3. Get 2 numbers and do the following operations: sum, subtraction, division,
multiplication and remainder. Then, show the result of each operation to the user. */
/* const numberOne = Number(prompt('Give me a number.'))
const numberTwo = Number(prompt('Give me another number.'))

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const division = numberOne / numberTwo
const multiplication = numberOne * numberTwo
const remainder = numberOne % numberTwo

alert(`The result of the sum is ${sum}.`)
alert(`The result of the subtraction is ${subtraction}.`)
alert(`The result of the division is ${division}.`)
alert(`The result of the multiplication is ${multiplication}.`)
alert(`The result of the remainder is ${remainder}.`) */


/* 4. Ask the name of the student and their grades, then calculate their average score.
	If the student passed, congratulate them. If not, motivate them to try their best at the finals.
	In both cases, show their name and their grade.
	PS.:There are three exams and grades go from 0 to 10, passing score is 7. Lower than 3, it's an automatic fail. */
/* const studentName = prompt("What's the student's name?")
const firstExam = Number(prompt('Grade of the first exam:'))
const secondExam = Number(prompt('Grade of the second exam:'))
const thirdExam = Number(prompt('Grade of the third exam:'))

const average = ((firstExam + secondExam + thirdExam) / 3).toFixed(1)

if (average >= 7) {
	alert(`Congratulations ${studentName}! You passed with an average score of ${average}.
See you next semester!`)
} else if (average < 3) {
	alert(`Hello, ${studentName}. You failed this class with an average score of ${average}.
Apply yourself next semester.`)
} 
	else {
		alert(`Hello, ${studentName}. Your average score of ${average} makes you eligible for the final exam.
Study and you'll do fine.`)
} */


/* 5. Get 10 items to make a grocery list.
After getting these items, show them separated by a comma in a single alert. */

/* let items = []

for (let item = 0; item < 10; item++) {
	let itemName = prompt(`Item ${item + 1}:`)

	items[item] = itemName
}

alert(items) */