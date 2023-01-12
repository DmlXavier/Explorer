import {
	playBtn, 
	pauseBtn, 
	stopBtn, 
	setBtn, 
	soundBtn, 
	muteBtn
} from "./elements.js"

export default function Events({controls, sounds, timer}) {
	// Timer controls
	// Click play
	playBtn.addEventListener('click', () => {
			controls.play()
			timer.countDown()
			sounds.buttonPress()
	})
	// Click pause
	pauseBtn.addEventListener('click', () => {
			controls.pause()
			timer.hold()
			sounds.buttonPress()
	})
	// Click stop
	stopBtn.addEventListener('click', () => {
			timer.reset()
			controls.reset()
			sounds.buttonPress()
	})
	// Click set
	setBtn.addEventListener('click', () => {
			let newTime = controls.setTime()
		
			if (!newTime) {
				timer.reset()
				return
			}
			
			timer.updateDisplay(newTime.newMinutes, newTime.newSeconds)
			timer.updateMinutesAndSeconds(newTime.newMinutes, newTime.newSeconds)
			sounds.buttonPress()
	})

	// Sound controls
	// Music on
	soundBtn.addEventListener('click', () => {
			sounds.buttonPress()
			controls.sound()
			sounds.bgAudio.play()
	})
	// Music off
	muteBtn.addEventListener('click', () => {
			sounds.buttonPress()
			controls.mute()
			sounds.bgAudio.pause()
	})
}