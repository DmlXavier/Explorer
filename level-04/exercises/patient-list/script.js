/* 
  Create a list of patients.

  Each patient needs to have:
    name
    age
    weight
    height

	Create one list for each information from the patients.
  Write a description for each patient with all their information.
*/

const patients = [
	{
		name:"John",
		age: 23,
		weight: 63,
		height: 166
	},
	
	{
		name: "Mary",
		age: 17,
		weight: 55,
		height: 160
	},

	{
		name: "Brian",
		age: 43,
		weight: 77,
		height: 166
	}
]

let patientName= []
let patientAge= []
let patientWeight= []
let patientHeight= []
let index = 0

for (let patient of patients) {
	patientName.push(patient.name)
	patientAge.push(patient.age)
	patientWeight.push(patient.weight)
	patientHeight.push(patient.height)


	alert(`${patientName[index]} is ${patientAge[index]} years old,
${patientHeight[index]} cm tall and weighs ${patientWeight[index]}kg.`)

	index++
}


