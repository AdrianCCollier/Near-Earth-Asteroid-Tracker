let sun;
let earth;
let vel;
let speed = 0

function setup() {
    createCanvas(800, 1000)
    sun = createVector(width / 2, height / 2)
    earth = createVector(width / 2, height / 2 + 200)
    vel = createVector(2, 0)
}

function draw() {
    background(0)
    let acc = p5.Vector.sub(sun, earth)
    acc.setMag(0.01)
    vel.add(acc)
    earth.add(vel)

    // Draw the sun
    ellipse(sun.x, sun.y, 100, 100)

    // Draw the earth
    ellipse(earth.x, earth.y, 50, 50)
    
    speed++
}

function stop() {
  vel.mult(0)
}

function resume() {
  vel = p5.Vector.sub(sun, earth)
  vel.setMag(0.01)
}
