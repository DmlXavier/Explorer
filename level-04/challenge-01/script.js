const numberOne = Number(prompt('Give me a number.'))
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
alert(`The result of the remainder is ${remainder}.`)

if (sum % 2 == 0) {
	alert(`The sum of the two numbers is even: ${sum}.`)
} else {
	alert(`The sum of the two numbers is odd: ${sum}.`)
}

if (numberOne != numberTwo) {
	alert('Both numbers are different.')
} else {
	alert('Both numbers are the same.')
}