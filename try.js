let extraCanvas;

function setup() {
  frameRate(40);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();
  background(0);
}

function draw() {
    rectMode(CENTER);
    background(0);
    for (let i=0; i<200; i++) {
        extraCanvas.fill(255, 0, 0, 4);
        extraCanvas.noStroke();
        extraCanvas.ellipse(random(windowWidth), random(windowHeight), 60, 60);
        extraCanvas.fill(0, 4);
        extraCanvas.ellipse(random(windowWidth), random(windowHeight), 100, 100);
    }
    image(extraCanvas, 0, 0);
}
