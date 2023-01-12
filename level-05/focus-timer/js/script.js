import Timer from "./timer.js"
import Controls from "./controls.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
	playBtn, 
	pauseBtn, 
	stopBtn, 
	setBtn, 
	soundBtn, 
	muteBtn, 
	minuteDisplay, 
	secondDisplay
} from "./elements.js"

const controls = Controls({
	playBtn, 
	pauseBtn, 
	stopBtn, 
	setBtn, 
	soundBtn, 
	muteBtn
})
const timer = Timer({
	resetControls: controls.reset,
	minuteDisplay,
	secondDisplay
})
const sounds = Sound()

Events({controls, sounds, timer})
