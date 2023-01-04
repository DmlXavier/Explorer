import { Buttons, resetControls } from "./controls.js"
import { Timer, timerTimeOut, resetTimer, countDown, updateTimerDisplay } from "./timer.js"

export let minutes = Number(Timer.minute.textContent)
export let seconds = Number(Timer.second.textContent)


// Timer controls
// Click the play button
Buttons.play.addEventListener('click', () => {
	Buttons.play.classList.toggle('hide')
	Buttons.pause.classList.toggle('hide')
	Buttons.set.classList.add('hide')
	Buttons.stop.classList.remove('hide')

	countDown()
})
// Click the pause button
Buttons.pause.addEventListener('click', () => {
	Buttons.pause.classList.toggle('hide')
	Buttons.play.classList.toggle('hide')

	clearTimeout(timerTimeOut)
})
// Click the stop button
Buttons.stop.addEventListener('click', () => {
	resetControls()
	resetTimer()
})
// Click the set button
Buttons.set.addEventListener('click', () => {
	let newMinutes = prompt('How many minutes would you like to set the timer at?')
	let newSeconds = prompt('How many seconds?')

	if (!newMinutes || !newSeconds) {
		resetTimer()
		return
	}

	minutes = newMinutes
	seconds = newSeconds

	updateTimerDisplay(minutes, seconds)
})


// Sound controls
// Click the sound button
Buttons.sound.addEventListener('click', () => {
	Buttons.sound.classList.toggle('hide')
	Buttons.mute.classList.toggle('hide')
})
// Click the mute button
Buttons.mute.addEventListener('click', () => {
	Buttons.mute.classList.toggle('hide')
	Buttons.sound.classList.toggle('hide')
})
