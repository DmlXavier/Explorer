import Utilities from "./utilities.js"

const utilities = Utilities()

export default class Router {
	routes = {}

	addRoute(routeName, url) {
		this.routes[routeName] = url
	}

	route(event) {
		event = event || window.event
		event.preventDefault()

		window.history.pushState({}, "", event.currentTarget.href)

		this.handle()
	}

	handle() {
		const { pathname, href } = window.location
		const route = this.routes[pathname] || this.routes[404]

		let allLinks = document.querySelectorAll('a')
		allLinks = utilities.nodeListToArray(allLinks)
		utilities.highlightCurrentPageLink(allLinks, href)

		fetch(route)
		.then(data => data.text())
		.then(html => {
			if (route.match(pathname)) {
				document.body.setAttribute("class", "")
				document.body.classList.add(`${pathname}`)
			}

			document.querySelector('#app').innerHTML = html
		})
	}
}