export const Buttons = {
	play: document.querySelector('#playBtn'),
	pause: document.querySelector('#pauseBtn'),
	stop: document.querySelector('#stopBtn'),
	set: document.querySelector('#setBtn'),
	sound: document.querySelector('#soundBtn'),
	mute: document.querySelector('#muteBtn')
}
const Timer = {
	minute: document.querySelector('#minutes'),
	second: document.querySelector('#seconds')
}
let timeSetMinutes


function countDown() {
	setTimeout(() => {
		let seconds = Number(Timer.second.textContent)
		let minutes = Number(Timer.minute.textContent)

		if (seconds <= 0) {
			seconds = 60
			Timer.minute.textContent = String(minutes - 1).padStart(2, '0')
		}

		Timer.second.textContent = String(seconds - 1).padStart(2, '0')

		if (minutes <= 0) {
			return
		}

		countDown()
	}, 1000)
}


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
})
// Click the stop button
Buttons.stop.addEventListener('click', () => {
	Buttons.play.classList.remove('hide')
	Buttons.pause.classList.add('hide')
	Buttons.stop.classList.toggle('hide')
	Buttons.set.classList.toggle('hide')
})
// Click the set button
Buttons.set.addEventListener('click', () => {
	timeSetMinutes = prompt('How many minutes would you like to set the timer at?')
	Timer.minute.textContent = String(timeSetMinutes).padStart(2, '0')
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