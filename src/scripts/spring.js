import Vector from '@nonphoto/vector'

function spring(a, b, constant = 1, length = 0) {
    const separation = Vector.clone(a).subtract(b)
    const force = separation.scale(constant)

    return force
}

export { spring }