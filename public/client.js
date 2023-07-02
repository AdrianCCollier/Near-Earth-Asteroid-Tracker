let sun;
let earth;

function setup() {
     let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.8)
    canvas.parent('terminal-window');

    sun = {
        x: width / 20,
        y: height / 20,
        radius: 50
    };

    earth = {
        x: sun.x + 100,
        y: sun.y,
        radius: 25,
    };
}

function draw() {
    background(50);

    // Draw the sun
    fill(255, 204, 0);
    ellipse(sun.x, sun.y, sun.radius * 2, sun.radius * 2);

    // Draw the earth
    fill(0, 0, 255);
    ellipse(earth.x, earth.y, earth.radius * 2, earth.radius * 2);
}