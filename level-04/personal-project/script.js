// Variables
let user = prompt('User name:')
let option
let studentName
let gradeOne
let gradeTwo

const mainMenu = () => {
	return Number(prompt(`
	Hello ${user}! Type in the number of the desired option.
	
	1. Register/remove a student.
	2. See list of students.
	3. See report card.
	4. Change user name.
	5. Leave menu.\n`))
}
const regMenu = () => {
	return Number(prompt(`
	Type in the number of the desired option.
				
	1. Register a student.
	2. Remove a student.
	3. Go back to the main menu.\n`))
}
const students = []

//Functions
// Finds the index of an object inside an array using only the student's name
function nameIndex(name, array) {
	for (let object of array) {
		if (object.name == name) {
			return array.indexOf(object)
		}
	}
}

// Creates an array with the values of a particular property from objects inside another array
function createList(array, property) {
	const list = []

	for (let object of array) {
		list.push(object[property])
	}
	return list
}

// Creates a student
function Student(name, gradeOne, gradeTwo) {
	this.name = name
	this.gradeOne = gradeOne
	this.gradeTwo = gradeTwo
	this.average = Number(((gradeOne + gradeTwo) / 2).toFixed(1))
}

// Application starts here
// Check if user name is valid
while (user == "") {
	alert('Please define a user name.')
	user = prompt('User name:')
}

// Main Menu
while (option != 5) {
	option = mainMenu()

	// Check if input is a number
	if (isNaN(option)) {
		alert('Please type in a number.')
		continue
	}

	// Behaviour for each input
	switch (option) {
		// Registry menu
		case 1:
			let optionTwo

			while (optionTwo != 3) {
				optionTwo = regMenu()

				// Check if input is a number.
				if (isNaN(optionTwo)) {
					alert('Please type in a number.')
					continue
				}

				// Behaviour for each input
				switch (optionTwo) {
					// Adding the student
					case 1:
						studentName = prompt('Type in the name of the student.')
						
						//Check if student name is valid
						while (studentName == '') {
							alert('Please inform the name of the student.')
							studentName = prompt('Type in the name of the student.')
						}

						gradeOne = Number(prompt('Grade of the first exam:'))
						gradeTwo = Number(prompt('Grade of the second exam:'))

						if (isNaN(gradeOne) || isNaN(gradeTwo)) {
							alert('Grade needs to be a number.')
						}
						else if (((gradeOne < 0) || (gradeOne > 10)) || ((gradeTwo < 0) || (gradeTwo > 10))) {
							alert('Grades only go from 0 to 10.')
						} else {
							students.push(new Student(studentName, gradeOne, gradeTwo))
							alert(`Confirmed. Student ${studentName} was added to the registry.`)
						}
						break
					
					// Removing the student
					case 2 :
						studentName = prompt('Type in the name of the student.\n* Type "ALL" to remove all students.')

						//Check if student name is valid
						while (studentName == '') {
							alert('Please inform the name of the student.')
							studentName = prompt('Type in the name of the student.\n* Type "ALL" to remove all students.')
						}
					
						const index = nameIndex(studentName, students)
						
						if ((index !== undefined) && (students[index].name.includes(studentName))) {
							students.splice(index, 1)
							alert(`Confirmed. Student ${studentName} was removed from the registry.`)
						}
						else if (studentName == 'ALL') {
							if (students.length == 0) {
								alert('Registry is empty.')
							} else {
								students.splice(0, students.length)
								alert('Confirmed. All students were removed from the registry.')
							}
						} 
						else {
							alert('Student not registered.')
						}
						break
					
					// Return to main menu
					case 3:
						break

					default:
						alert('Invalid option.')
				}
			}
			break

		// List of students' names
		case 2:
			if (students.length == 0) {
				alert('Registry is empty.')
			} else {
				const studentList = createList(students, 'name')
				alert(`${studentList}.`)
			}
			break

		// Student's report card
		case 3:
			if (students.length == 0) {
				alert('Registry is empty.')
			}
			else {
				studentName = prompt('Type in the name of the student.')
				
				//Check if student name is valid
				while (studentName == '') {
					alert('Please inform the name of the student.')
					studentName = prompt('Type in the name of the student.')
				}

				const index = nameIndex(studentName, students)
				
				if ((index !== undefined) && (students[index].name.includes(studentName))) {
					if (students[index].average >= 7) {
						alert(`
					Name: ${students[index].name}
					First exam: ${students[index].gradeOne}
					Second exam: ${students[index].gradeTwo}
					Average score: ${students[index].average}
					Status: Approved.`)
					}
					else if (students[index].average < 3) {
						alert(`
					Name: ${students[index].name}
					First exam: ${students[index].gradeOne}
					Second exam: ${students[index].gradeTwo}
					Average score: ${students[index].average}
					Status: Failed.`)
					}
					else {
						alert(`
					Name: ${students[index].name}
					First exam: ${students[index].gradeOne}
					Second exam: ${students[index].gradeTwo}
					Average score: ${students[index].average}
					Status: Eligible for final exam.`)
					}
				}
				else {
					alert('Student not registered.')
				}
			}
			break
	
		// Change user name
		case 4:
			user = prompt('User name:')

			while (user == "") {
				alert('Please define a user name.')
				user = prompt('User name:')
			}
			break
		
		// Leave main menu
		case 5:
			alert(`Goodbye ${user}!`)
			break
		
		default:
			alert('Invalid option.')
	}
}