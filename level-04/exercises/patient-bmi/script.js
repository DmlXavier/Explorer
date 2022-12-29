/* 
  Given a list of patients, find out each patient's BMI and show:

  "Patient X has a BMI of: Y"

  Create a function to calculate.

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

function calcBmi(weight, height) {
	return (weight / ((height / 100) ** 2)).toFixed(2)
}

for (let patient of patients) {
	alert(`Patient ${patient.name} has a BMI of ${calcBmi(patient.weight, patient.height)}.`)
}