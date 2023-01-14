import {
	minutesDisplay,
	secondsDisplay,
	playBtn,
	pauseBtn,
	stopBtn,
	setBtn,
	plusBtn,
	minusBtn,
	forestBtn,
	rainBtn,
	coffeeBtn,
	fireBtn
} from "./elements.js"


export default function Events({controls, timer}) {
	// Timer controls
	playBtn.addEventListener('click', () => {
		controls.play()
		timer.countdown()
	})

	pauseBtn.addEventListener('click', () => {
		controls.pause()
		timer.stop()
	})

	stopBtn.addEventListener('click', () => {
		controls.reset()
		timer.reset()
	})

	setBtn.addEventListener('click', () => {
		let newTime = controls.setTimer()
		
		if (!newTime) {
			timer.reset()
			return
		}

		timer.updateValues(newTime.newMinutes, newTime.newSeconds)
		timer.updateDisplay(newTime.newMinutes, newTime.newSeconds)
	})

	plusBtn.addEventListener('click', () => {
		timer.addFiveMin()
	})

	minusBtn.addEventListener('click', () => {
		timer.subFiveMin()
	})


	// Sound controls
	forestBtn.addEventListener('click', () => {
		controls.selectSound(forestBtn)
	})

	rainBtn.addEventListener('click', () => {
		controls.selectSound(rainBtn)
	})

	coffeeBtn.addEventListener('click', () => {
		controls.selectSound(coffeeBtn)
	})

	fireBtn.addEventListener('click', () => {
		controls.selectSound(fireBtn)
	})
}