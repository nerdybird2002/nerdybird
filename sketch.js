function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background('#fea');
  circle(200,200,50);
  stroke('#2785E2')
  ellipse(50,75,80,185);
  stroke(255, 204, 0);
strokeWeight(4);
rect(20, 40, 60, 60);
  quad(90, 90, 55, 90, 20, 15, 10, 5);
  strokeWeight(10);
line(20, 70, 80, 70);
  triangle(400, 300, 400, 20, 300, 75);
  rectMode(3)
  line(200,200,50);
  stroke('#EB25DD')
  ellipse(100,30,30,30);
  quad(200, 350, 86, 50, 50, 38, 14, 50);
  fill('#E090DE')
  strokeWeight(10);
line(20, 70, 80, 70);
  circle(300,300,300)
    noFill()
 circle(50,60,70)
  triangle(200,350,300)
  //comment out background to have a trail
let r = 0;
let g = 150;
let b = 100;
let size = 60;
let x = size/2;
let y = size/2;
let ballSpeedX = 5;
let ballSpeedY = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(0, 200);
  b = random(0, 255);
  noStroke()
}

function draw() {
  //background(r, g, b);
  circle(x, y, size);
  console.log("x");
  circle(random(width), random(height),random(0,100))

  x = x + ballSpeedX;
  y = y + ballSpeedY;

  if (x > width-size/2 || x < size/2) {
    ballSpeedX = ballSpeedX *-1;
    fill(random(255),random(255),random(255),random(255))
    
  }

  if (y > height-size/2|| y < size/2) {
    ballSpeedY = ballSpeedY * -1;
    fill(random(255), random(255), random(255),random(255))
  }
}

}
