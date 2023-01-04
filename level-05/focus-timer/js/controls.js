import { resetTimer } from "./timer.js"

export const Buttons = {
	play: document.querySelector('#playBtn'),
	pause: document.querySelector('#pauseBtn'),
	stop: document.querySelector('#stopBtn'),
	set: document.querySelector('#setBtn'),
	sound: document.querySelector('#soundBtn'),
	mute: document.querySelector('#muteBtn')
}

export function resetControls() {
	Buttons.play.classList.remove('hide')
	Buttons.pause.classList.add('hide')
	Buttons.stop.classList.toggle('hide')
	Buttons.set.classList.toggle('hide')

	resetTimer()
}