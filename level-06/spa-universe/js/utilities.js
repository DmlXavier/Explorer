export default function Utilities() {
	function nodeListToArray(nodeList) {
		let array = Array.from(nodeList)
	
		return array
	}

	function highlightCurrentPageLink(array, href) {
		for (let link of array) {
			link.setAttribute('class', "")

			if (link.href == href) {
				link.classList.add("selected")
			}
		}
	}

	function triggerBtnClick() {
		const link = document.querySelector("#universeLink")

		link.click()
	}

	return {nodeListToArray, highlightCurrentPageLink, triggerBtnClick}
}
