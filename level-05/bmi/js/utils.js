// Calculate BMI
export function calcBmi(weight, height) {
	return (weight / ((height / 100) ** 2)).toFixed(2)
}

// Checks if a value is NaN or an empty string
export function notANumber (value) {
	return isNaN(value) || value == ''
}
