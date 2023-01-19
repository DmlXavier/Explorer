export default function Sound() {
	const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
	const forest = new Audio('../focus-timer-enhanced/assets/forest.wav')
	const rain = new Audio("../focus-timer-enhanced/assets/rain.wav")
	const coffee = new Audio("../focus-timer-enhanced/assets/coffee-shop.wav")
	const fire = new Audio("../focus-timer-enhanced/assets/fireplace.wav")

	forest.loop = true
	rain.loop = true
	coffee.loop = true
	fire.loop = true

	function buttonPressed() {
		buttonPressAudio.play()
	}

	function timeUp() {
		kitchenTimer.play()
	}

	return {
		buttonPressed,
		timeUp,
		forest,
		rain,
		coffee,
		fire
	}
}