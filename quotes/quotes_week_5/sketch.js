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
  var quotes = ['How long will quarantine last?', 'Grocery shopping feels like a deadly mission in a video game.', 'My friends and I often set up zoom calls at night to stay in touch, it keeps me sane to just talk and laugh with them as much as I can.', 'Things have been slowly improving. I have a better sense of routine than I have had in a while, but socializing has still been hard, since everything around me is still shut down.'];
  textFont(deca);
  textSize(windowWidth / 25);
  fill(184, 53, 106);
  textAlign(CENTER, CENTER);
  text(random(quotes), windowWidth / 3.5, windowHeight / 5.5, windowWidth / 2.25, windowHeight / 1.60);
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}