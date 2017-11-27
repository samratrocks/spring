import AnimationLoop from '@nonphoto/animation-loop'
import Vector from '@nonphoto/vector'
import Entity from './entity'
import { spring, dampen } from './spring'

export default class Main {
	constructor() {
		this.panel = document.getElementsByClassName('spring-panel')[0]

		this.animationLoop = new AnimationLoop(this.handleAnimationFrame.bind(this))
		this.animationLoop.start()

		this.center = new Entity(0.5, 0.5)
		this.entity = new Entity(0.5, 0.5)

		document.addEventListener('click', this.handleClick.bind(this))
	}

	handleAnimationFrame() {
		const velocity = Vector.clone(this.entity.velocity).subtract(this.center.velocity)
		const impulse = spring(this.center.position, this.entity.position, 0.05)
		this.entity.applyImpulse(dampen(impulse, velocity, 0.1))
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