const students = [
	{
		name:"John",
		gradeOne: 2,
		gradeTwo: 3
	},
	
	{
		name: "Mary",
		gradeOne: 10,
		gradeTwo: 10
	},

	{
		name: "Brian",
		gradeOne: 7,
		gradeTwo: 5
	},

	{
		name: "Sofia",
		gradeOne: 8,
		gradeTwo: 6
	},

	{
		name: "Mike",
		gradeOne: 6,
		gradeTwo: 6
	}
]

function calcAvg(gradeOne, gradeTwo) {
	return ((gradeOne + gradeTwo) / 2).toFixed(1)
}

for (let student of students) {
	let average = calcAvg(student.gradeOne, student.gradeTwo)

	if (average >= 7) {
		alert(`The average score of the student ${student.name} is ${average}.
Congratulations ${student.name}! You passed this class!`)
	}
	else if (average < 3) {
		alert(`The average score of the student ${student.name} is ${average}.
Unfortunately ${student.name}, you failed this class.`)
	}
	else {
		alert(`The average score of the student ${student.name} is ${average}.
Hello ${student.name}, you are eligible to do the final exam.`)
	}
}