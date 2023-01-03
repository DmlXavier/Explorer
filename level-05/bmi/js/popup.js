// Popup window with the result
export const PopUp = {
	wrapper: document.querySelector('.result-wrapper'),
	message: document.querySelector('.result .title'),
	closeButton: document.querySelector('.result button'),

	open() {
		PopUp.wrapper.classList.add('open')
	}, close() {
		PopUp.wrapper.classList.remove('open')
	}
}

// Click the "close" button in the popup window
PopUp.closeButton.onclick = () => {
	PopUp.close()
}
// Close the window by pressing "esc"
window.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		PopUp.close()
	}
})