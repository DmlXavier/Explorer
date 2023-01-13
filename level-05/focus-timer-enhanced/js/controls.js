export default function Controls({ playBtn, pauseBtn, stopBtn, setBtn, plusBtn, minusBtn})
{
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

	function reset() {
		stopBtn.classList.add('hide')
		setBtn.classList.remove('hide')
		playBtn.classList.remove('hide')
		pauseBtn.classList.add('hide')
	}

	function selectSound(btn) {
		if (btn.classList.contains('on')) {
			btn.classList.remove('on')
			return
		}

		btn.classList.add('on')
	}

	return {play, pause, reset, selectSound}
}