import Vector from '@nonphoto/vector'

export default class Entity {
	constructor(x, y) {
		this.position = new Vector(x, y)
		this.velocity = new Vector()
	}

	applyImpulse(impulse) {
		this.velocity.add(impulse)
	}

	update() {
		this.position.add(this.velocity)
	}
}
