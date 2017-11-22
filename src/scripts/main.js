import AnimationLoop from '@nonphoto/animation-loop'

export default class Main {
	constructor() {
		this.panel = document.getElementsByClassName('spring-panel')[0]

		this.animationLoop = new AnimationLoop(this.handleAnimationFrame.bind(this))
		this.animationLoop.start()

		document.addEventListener('click', this.handleClick.bind(this))
	}

	handleAnimationFrame() {

	}

	handleClick(event) {
		const x = event.clientX / window.innerWidth * 100
		this.panel.style.transform = `translate3d(${x}%, 0, 0)`
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const main = new Main()
})