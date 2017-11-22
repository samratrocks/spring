import AnimationLoop from '@nonphoto/animation-loop'
import Vector from '@nonphoto/vector'
import Entity from './entity'
import { spring, dampen } from './spring'

export default class Main {
	constructor() {
		this.panel = document.getElementsByClassName('spring-panel')[0]

		this.animationLoop = new AnimationLoop(this.handleAnimationFrame.bind(this))
		this.animationLoop.start()

		this.center = new Vector(0.5, 0.5)
		this.entity = new Entity(0.5, 0.5)

		document.addEventListener('click', this.handleClick.bind(this))
	}

	handleAnimationFrame() {
		const impulse = spring(this.center, this.entity.position, 0.05)
		this.entity.applyImpulse(dampen(impulse, this.entity.velocity, 0.2))
		this.entity.update()

		const x = this.entity.position.x * 100
		this.panel.style.transform = `translate3d(${x}%, 0, 0)`
	}

	handleClick(event) {
		this.entity.position.x = event.clientX / window.innerWidth
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const main = new Main()
})