import Controls from "./controls.js";
import Timer from "./timer.js";
import Events from "./events.js";
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
	fireBtn,
	minutesDisplay,
	secondsDisplay
} from "./elements.js";


const controls = Controls({
	playBtn, 
	pauseBtn, 
	stopBtn, 
	setBtn, 
	plusBtn, 
	minusBtn
})
const timer = Timer({
	minutesDisplay, 
	secondsDisplay
})

Events({controls})