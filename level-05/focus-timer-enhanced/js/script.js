import Controls from "./controls.js";
import Events from "./events.js";
import Timer from "./timer.js";
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

const controls = Controls({
	playBtn, 
	pauseBtn, 
	stopBtn, 
	setBtn
})
const timer = Timer({
	minutesDisplay, 
	secondsDisplay,
	resetControls: controls.reset,
	check: controls.checkInput
})

Events({controls, timer})