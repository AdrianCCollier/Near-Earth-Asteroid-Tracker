let Z_MAX = 500
let amount = 1000
let stars = []

let randomPosition = (w, h, d) =>
  createVector(random(-w / 2, w / 2), random(-h / 2, h / 2), random(10, Z_MAX))

function setupStars() {
  for (let i = 0; i < amount; i++)
    stars[i] = {
      p: randomPosition(width, height),
      s: random(0.1, 1),
    }
}

function renderStars() {
  stars.forEach((star) => {
    star.p.z -= 5
    if (star.p.z < -Z_MAX) {
      star.p.x = random(-width / 10, width / 2)
      star.p.y = random(-height / 5, height / 5)
      star.p.z = random(0, Z_MAX)
    }
    fill(lerpColor(color(0), color(255), star.p.z))

    let size = Z_MAX / (Z_MAX + star.p.z)

    fill(255)
    ellipse(star.p.x * size, star.p.y * size, star.s * size)
  })
}

export { setupStars, renderStars }
