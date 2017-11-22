export default class Main {
	constructor() {
		this.panel = document.getElementsByClassName('spring-panel')[0]

		document.addEventListener('click', this.handleClick.bind(this))
	}

	handleClick(event) {
		const x = event.clientX / window.innerWidth * 100
		this.panel.style.transform = `translate3d(${x}%, 0, 0)`
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const main = new Main()
})