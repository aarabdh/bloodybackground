let l1, l2;
let k=0;
let result;
function preload() {
  result = loadStrings('assets/test.txt');
}

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    l1 = createGraphics(windowWidth, windowHeight);
	l2 = createGraphics(windowWidth, windowHeight);
	l1.clear();
    l2.clear();
    frameRate(40);
    background(0);
    l2.rectMode(CENTER);
}


function draw() {
	for (let i=0; i<200; i++) {
        l2.noStroke();
        l2.fill(255, 0, 0, 4);
        l2.rect(random(windowWidth), random(windowHeight), 60, 60);
        l2.fill(0, 255, 0, 4);
        l2.fill(0, 0, 255, 4);
        l2.fill(0, 4);
        l2.rect(random(windowWidth), random(windowHeight), 60, 60);
	}
    fill(255);
	image(l2, 0,0);
    textAlign(CENTER);
    textSize(15);
    text(result[k], 10, windowHeight/3, windowWidth-15, windowHeight);
    fill(255);
    textAlign(LEFT);
    textSize(12);
    text("Copyright owned by JKR, this is for demonstration purpose only.", windowWidth-370, windowHeight-20, windowWidth-10, windowHeight);
}


function mouseClicked() {
    l1.clear();
    k++;
    if (k-result.length ==0){
        k=0;
    }
}
