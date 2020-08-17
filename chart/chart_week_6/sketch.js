let myFont;
let myFont2;
let gradient;
let title = 24;

function preload() {
  myFont = loadFont('LexendZetta-Regular.ttf');
  myFont2 = loadFont('LexendDeca-Regular.ttf');
  gradient = loadImage('Gradient.png');
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  textFont(myFont);
  textSize(24);
  
}

function draw() {
  background(39,30,76);
  noStroke();
  text('APRIL 17-APRIL 23', 10, 35);
  image(gradient,10,50,windowWidth-20,windowHeight-60);
  stroke(255);
  strokeCap(ROUND);
  strokeWeight(3);
  line(40,90,40,windowHeight-65);
  line(40,windowHeight-65,windowWidth-30,windowHeight-65);
  push();
  if(windowWidth<=500 || windowHeight<=500){
  strokeWeight(0);
  }else{
  strokeWeight(3);
  }
  
  
  translate(25,0)
  line(windowWidth*(9/100),windowHeight-70,windowWidth*(9/100),windowHeight-65);
  line(windowWidth*(18/100),windowHeight-70,windowWidth*(18/100),windowHeight-65);
  line(windowWidth*(27/100),windowHeight-70,windowWidth*(27/100),windowHeight-65);
  line(windowWidth*(36/100),windowHeight-70,windowWidth*(36/100),windowHeight-65);
  line(windowWidth*(45/100),windowHeight-80,windowWidth*(45/100),windowHeight-65);
  line(windowWidth*(54/100),windowHeight-70,windowWidth*(54/100),windowHeight-65);
  line(windowWidth*(63/100),windowHeight-70,windowWidth*(63/100),windowHeight-65);
  line(windowWidth*(72/100),windowHeight-70,windowWidth*(72/100),windowHeight-65);
  line(windowWidth*(81/100),windowHeight-70,windowWidth*(81/100),windowHeight-65);
  pop();
  push();
  if(windowWidth<=500 || windowHeight<=500){
  strokeWeight(0);
  }else{
  strokeWeight(3);
  }
  translate(0,65);
  line(40,windowHeight*(9/100),45,windowHeight*(9/100));
  line(40,windowHeight*(17/100),45,windowHeight*(17/100));
  line(40,windowHeight*(25/100),45,windowHeight*(25/100));
  line(40,windowHeight*(33/100),45,windowHeight*(33/100));
  line(40,windowHeight*(41/100),55,windowHeight*(41/100));
  line(40,windowHeight*(49/100),45,windowHeight*(49/100));
  line(40,windowHeight*(57/100),45,windowHeight*(57/100));
  line(40,windowHeight*(65/100),45,windowHeight*(65/100));
  line(40,windowHeight*(73/100),45,windowHeight*(73/100));
  
  
  pop();
  push();
  strokeWeight(3);
  fill(255,255,255,80)
  ellipse(windowWidth*(54/100)+25,90,20);
  ellipse(windowWidth*(63/100)+25,windowHeight*(25/100)+65,20);
  ellipse(windowWidth*(72/100)+25,90,20);
  ellipse(windowWidth*(45/100)+25,windowHeight*(33/100)+65,20);
  ellipse(windowWidth*(18/100)+25,windowHeight*(73/100)+65,20);
  ellipse(windowWidth*(54/100)+25,windowHeight*(9/100)+65,20);
  ellipse(windowWidth*(27/100)+25,windowHeight*(17/100)+65,20);
  ellipse(windowWidth*(45/100)+25,windowHeight*(49/100)+65,20);
  ellipse(windowWidth*(63/100)+25,windowHeight*(17/100)+65,20);


  
  pop();
  push();
  textFont(myFont2);
  noStroke();
  textSize(16);
  text('anxious', 20, 75);
  text('calm', 20, windowHeight-40);
  text('connected', 20, windowHeight-20);
  text('disconnected', windowWidth-140, windowHeight-20);
  text('0',50,windowHeight-75);
  text('10',15,100);
  text('10',windowWidth-60,windowHeight-40);
  text('10',windowWidth-60,windowHeight-40);
  text('5',windowWidth*(45/100)+20,windowHeight-40);
  pop();
  
}


function windowResized() {
  let w = windowWidth;
  let h = windowHeight;
  resizeCanvas(w, h);
  if(windowWidth<=500){
  textSize(18);
  }else{
  textSize(24);
  }
  
  
  
}