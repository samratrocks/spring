import Vector from '@nonphoto/vector'

function dampen(f, v, constant = 1) {
    const dampeningForce = Vector.clone(v).scale(constant)
    return Vector.clone(f).subtract(dampeningForce)
}

function spring(a, b, constant = 1, length = 0) {
    const separation = Vector.clone(a).subtract(b)
    const force = separation.scale(constant)

    return force
}

export { spring, dampen }