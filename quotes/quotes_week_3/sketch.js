function preload() {
  deca = loadFont('assets/LexendDeca-Regular.ttf');
  zetta = loadFont('assets/LexendZetta-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(39, 30, 76);
  push();
  textFont(zetta);
  textSize(width / 5);
  fill(101, 112, 181);
  textAlign(CENTER, CENTER);
  text('"', windowWidth / 3.2, windowHeight / 3);
  pop();

  push();
  textFont(zetta);
  textSize(width / 5);
  fill(101, 112, 181);
  textAlign(CENTER, CENTER);
  text('"', windowWidth / 1.4, windowHeight / 1.4);
  pop();

  push();
  frameRate(0.35);
  var quotes = ['I do not know how to accomplish my work under these circumstances. It should not be this hard, but it is.', 'My motivation to get things done is out of the window.', 'Relentlessly optimistic', 'Slower productivity more eating.'];
  textFont(deca);
  textSize(windowWidth / 25);
  fill(184, 53, 106);
  textAlign(CENTER, CENTER);
  text(random(quotes), windowWidth / 3.5, windowHeight / 5.5, windowWidth/2.25, windowHeight/1.60);
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}