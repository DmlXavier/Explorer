export const Alert = {
	element: document.querySelector('.alert'),
	open() {
		Alert.element.classList.add('open')
	}, close() {
		Alert.element.classList.remove('open')
	}
}