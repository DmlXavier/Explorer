// Variables 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const PopUp = {
	wrapper: document.querySelector('.result-wrapper'),
	message: document.querySelector('.result .title'),
	closeButton: document.querySelector('.result button'),

	open() {
		PopUp.wrapper.classList.add('open')
	}, close() {
		PopUp.wrapper.classList.remove('open')
	}
}

// Functions
// Calculate BMI
function calcBmi(weight, height) {
	return (weight / ((height / 100) ** 2)).toFixed(2)
}

// Events
// Press the "calculate" button
form.onsubmit = e => {
	e.preventDefault()

	const weight = inputWeight.value
	const height = inputHeight.value
	const result = calcBmi(weight, height)

	PopUp.message.innerText = `Your BMI is ${result}`
	PopUp.open()
}

// Click the "close" button in the popup window
PopUp.closeButton.onclick = () => {
	PopUp.close()
}