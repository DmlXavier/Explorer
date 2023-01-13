import {
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
} from "./elements.js";

export default function Events({controls}) {
	// Timer controls
	playBtn.addEventListener('click', () => {
		controls.play()
	})

	pauseBtn.addEventListener('click', () => {
		controls.pause()
	})

	stopBtn.addEventListener('click', () => {
		controls.reset()
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