import Sound from "./sounds.js"

export default function Timer({resetControls, minuteDisplay, secondDisplay}) {
	
	let minutes = Number(minuteDisplay.textContent)
	let seconds = Number(secondDisplay.textContent)
	let timerTimeOut
	
	function reset() {
		updateDisplay(minutes, seconds)
		clearTimeout(timerTimeOut)
	}
	
	function countDown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondDisplay.textContent)
      let minutes = Number(minuteDisplay.textContent)
			let finished = minutes <= 0 && seconds == 0

      if (finished) {
				Sound().timeUp()
				reset()
				resetControls()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, (seconds - 1))

      countDown()
    }, 1000)
  }

	function hold() {
		clearTimeout(timerTimeOut)
	}
	
	function updateDisplay(minutes, seconds) {
		minuteDisplay.textContent = String(minutes).padStart(2, '0')
		secondDisplay.textContent = String(seconds).padStart(2, '0')
	}

	function updateMinutesAndSeconds(newMinutes, newSeconds) {
		minutes = newMinutes
		seconds = newSeconds
	}

	return {
		countDown,
		reset,
		updateDisplay,
		minutes,
		seconds,
		hold,
		updateMinutesAndSeconds
	}
}