import { resetControls } from "./controls.js"
import { minutes, seconds } from "./script.js"

export const Timer = {
	minute: document.querySelector('#minutes'),
	second: document.querySelector('#seconds')
}
export let timerTimeOut


export function countDown() {
	timerTimeOut = setTimeout(() => {
		let seconds = Number(Timer.second.textContent)
		let minutes = Number(Timer.minute.textContent)

		updateTimerDisplay(minutes, 0)
		
		if (minutes <= 0 && seconds == 0) {
			resetControls()
			resetTimer()
			return
		}

		if (seconds <= 0) {
			seconds = 60
			--minutes
		}
		
		updateTimerDisplay(minutes, String(seconds - 1))

		countDown()
	}, 1000)
}

export function resetTimer() {
	clearTimeout(timerTimeOut)
	updateTimerDisplay(minutes, seconds)
}

export function updateTimerDisplay(minutes, seconds) {
	Timer.minute.textContent = String(minutes).padStart(2, '0')
	Timer.second.textContent = String(seconds).padStart(2, '0')
}