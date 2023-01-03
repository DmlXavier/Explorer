import { PopUp } from "./popup.js"
import { Alert } from "./alert.js"
import {calcBmi, notANumber} from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

function displayResult (result) {
	PopUp.message.innerText = `Your BMI is ${result}`
	PopUp.open()
}

// Press the "calculate" button
form.onsubmit = e => {
	e.preventDefault()

	const weight = inputWeight.value
	const height = inputHeight.value
	const inputIsNotANumber = notANumber(weight) || notANumber(height)

	if (inputIsNotANumber) {
		Alert.open()
		return
	}

	Alert.close()

	const result = calcBmi(weight, height)
	displayResult(result)
}

//Type anything in the input field
inputWeight.oninput = () => Alert.close()
inputHeight.oninput = () => Alert.close()
