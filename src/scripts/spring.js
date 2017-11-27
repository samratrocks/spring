import Vector from '@nonphoto/vector'

function dampen(f, v, constant = 1) {
    const dampeningForce = Vector.clone(v).scale(constant)
    return Vector.clone(f).subtract(dampeningForce)
}

function spring(a, b, constant = 1, length = 0) {
    const separation = Vector.clone(b).subtract(a)
    const separationLength = separation.length
    const force = separation.normalize().scale((separationLength - length) * -constant)

    return force
}

export { spring, dampen }