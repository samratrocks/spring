import Vector from '@nonphoto/vector'

export default class Entity {
	constructor(x = 0, y = 0, mass = 1) {
		this.position = new Vector(x, y)
        this.velocity = new Vector()
        this.mass = mass
        this.inverseMass = 1 / mass
	}

	applyImpulse(impulse) {
        const acceleration = Vector.clone(impulse).scale(this.inverseMass)
		this.velocity.add(acceleration)
	}

	update() {
		this.position.add(this.velocity)
	}
}
