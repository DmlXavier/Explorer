export default function Controls({playBtn, pauseBtn, stopBtn, setBtn, soundBtn, muteBtn}) {
	function play() {
		playBtn.classList.add('hide')
		pauseBtn.classList.remove('hide')
		setBtn.classList.add('hide')
		stopBtn.classList.remove('hide')
	}

	function pause() {
		pauseBtn.classList.add('hide')
		playBtn.classList.remove('hide')
	}

	function setTime() {
		let newMinutes = Number(prompt('How many minutes would you like to set the timer at?'))
		let newSeconds = Number(prompt('How many seconds?'))

		if (!checkTime(newMinutes, newSeconds)) {
			return false
		}

		return {newMinutes, newSeconds}
	}
	
	function checkTime(minutes, seconds) {
		let undefinedInput = minutes === undefined || seconds === undefined
		let greaterThan = minutes >= 100 || seconds >= 60
		let nan = isNaN(minutes) || isNaN(seconds)

		if (undefinedInput || greaterThan || nan) {
				return false
		}

		return true
	}

	function sound() { 
		soundBtn.classList.add('hide')
		muteBtn.classList.remove('hide')
	}

	function mute() {
		muteBtn.classList.add('hide')
		soundBtn.classList.remove('hide')
	}

	function reset() {
		playBtn.classList.remove('hide')
		pauseBtn.classList.add('hide')
		stopBtn.classList.toggle('hide')
		setBtn.classList.toggle('hide')
	}

	return {
		play, 
		pause, 
		setTime, 
		sound, 
		mute, 
		reset
	}
}