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
  var quotes = ['I am unsure how I will get my food from now on', 'It feels like the world is ending and I feel stuck.', 'Concerned but Keeping a positive mindset.', 'I’m a senior and expected to have 2 more months at Tyler. My last day of classes ever came suddenly and it was very sad.'];
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