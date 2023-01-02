// Variables
const screenOne = document.querySelector(".box1")
const screenTwo = document.querySelector(".box2")
const guessBtn = document.querySelector('#guessBtn')
const resetBtn = document.querySelector('#resetBtn')
const subText = screenOne.querySelector('p')

//Generate a random number from 0 to 10
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

// Functions
// Prevents the page from refreshing and checks the input
function guessClick (e) {
	e.preventDefault()

	const guessNumber = document.querySelector('#guessNumber')

	if ((guessNumber.value == '') || (isNaN(guessNumber.value))) {
		subText.innerText = 'Please guess a number.'
		return
	}
	else if ((guessNumber.value < 0) || (guessNumber.value > 10)) {
		subText.innerText = 'Hint: The number is greater than 0 and lesser than 10.'
	}
	else if (Number(guessNumber.value == randomNumber)) {
		switchScreen()

		if (attempts == 1) {
			screenTwo.querySelector("h2").innerText = `Well done! You guessed the number in 1 try.`
		} else {
			screenTwo.querySelector("h2").innerText = `Well done! You guessed the number in ${attempts} tries.`
		}	
	}
	else {
		subText.innerText = 'Oops. You guessed wrong, try again.'
	}
	
	guessNumber.value = ''
	attempts++
}

// Behaviour for the "play again button"
function resetClick (e) {
	randomNumber = Math.round(Math.random() * 10)

	switchScreen()

	attempts = 1
}

// Switches between screens
function switchScreen () {
	screenTwo.classList.toggle('hide')
	screenOne.classList.toggle('hide')

	subText.innerText = 'Guess the number from 0 to 10.'
}

// Accepts "enter" at the second screen
function handleEnter (e) {
	if ((e.key == "Enter") && (screenOne.classList.contains('hide'))) {
		resetClick()
	}
}

// Events
// Click the guess button
guessBtn.addEventListener('click', guessClick)

// Click the play again button
resetBtn.addEventListener('click', resetClick)
// Press enter to play again
document.addEventListener('keydown', handleEnter)