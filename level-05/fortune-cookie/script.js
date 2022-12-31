// Variables
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookie = document.querySelector('#cookie')
const resetBtn = document.querySelector('#resetBtn')
const fortune = document.querySelector('#fortune')
const fortuneList = [
	'Talk less, do more.',
	"There's time for everything.",
	"Don't wait until it happens to you to understand another's pain.",
	"Being important is nice, but it's more important to be nice.",
	'Sometimes, the most valuable treasure is in the most ignored place.'
]

// Functions
// Changes screen
function changeScreen() {
	screen1.classList.toggle('hide')
	screen2.classList.toggle('hide')
}
// Chooses a fortune
function chooseFortune() {
	const totalFortune = fortuneList.length
	const randomFortune = Math.floor(Math.random() * totalFortune)

	fortune.innerText = fortuneList[randomFortune]
}

// Events
// Click to see fortune
cookie.addEventListener('click', () => {
	chooseFortune()
	changeScreen()
})
// Click to go back.
resetBtn.addEventListener('click', changeScreen)