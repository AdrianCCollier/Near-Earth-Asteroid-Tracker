let centre
let border
let vel
let time = 0

function setup() {
  createCanvas(1200, 600)
  centre = createVector(width / 2, height / 2)
  border = createVector(width / 2, height / 2 + 200)
  vel = createVector(2, 0)
}

function draw() {
  background(0)
  let acc = p5.Vector.sub(centre, border)
  acc.setMag(0.01)
  vel.add(acc)
  border.add(vel)

  // Draw the sun
  fill(255, 204, 0)
  noStroke()
  ellipse(centre.x, centre.y, 100, 100)

  // Draw the earth
  fill(0, 0, 255)
  noStroke()
  ellipse(border.x, border.y, 50, 50)

  // Draw the orbit




    time++
}

function stop() {
  vel.mult(0)
}

function resume() {
  vel = p5.Vector.sub(centre, border)
  vel.setMag(0.01)
}
