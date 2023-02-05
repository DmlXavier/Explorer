class Favorite {
	constructor(root) {
		this.root = document.querySelector(root)

		this.load()
	}

	load() {
		this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
	}

	delete(user) {
		const filteredEntries = this.entries.filter(entry => entry.login !== user.login)
		
		this.entries = filteredEntries
		
		this.update()
	}
}


export class FavoritesView extends Favorite {
	constructor(root) {
		super(root)

		this.tbody = this.root.querySelector('tbody')

		this.update()
	}

	update() {
		this.removeAllTr()

		this.entries.forEach(user => {
			const row = this.createRow()

			row.querySelector('.user-profile img').src = `https://github.com/${user.login}.png`
			row.querySelector('.user-profile img').alt = `${user.name}'s profile picture.`
			row.querySelector('.user-profile a').href = `https://github.com/${user.login}`
			row.querySelector('.user-profile a p').textContent = `${user.name}`
			row.querySelector('.user-profile a span').textContent = `${user.login}`

			row.querySelector('.repositories').textContent = `${user.public_repos}`

			row.querySelector('.followers').textContent = `${user.followers}`

			row.querySelector('.removeBtn').onclick = () => {
				const confirmed = confirm('Are you sure you want to delete this user?')

				if (confirmed) {
					this.delete(user)
				}
			}

			this.tbody.append(row)
		})
	}

	removeAllTr() {
		this.tbody.querySelectorAll('tr')
			.forEach(tr => {
				tr.remove()
			})
	}

	createRow() {
		const tr = document.createElement('tr')

		tr.innerHTML = `
			<td class="user-profile">
				<img src="" alt="">
				<a href="" target="_blank">
					<p></p>
					<span></span>
				</a>
			</td>

			<td class="repositories"></td>

			<td class="followers"></td>

			<td>
				<button class="removeBtn">&times;</button>
			</td>
		`

		return tr
	}
}