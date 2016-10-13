var mySound;
var once = 1;
var actualTime;
var loadTime;

var s = 0;  //scale
var x = 0;
var y = 0;

var speed = 15;
var diameter = 200;
var i;
var j;


function setup(){
  frameRate(30);
  createCanvas(640, 480);
  mySound = loadSound("music.mov", playMusic);

  i = width/2;
  j = height/2;
}

function draw(){
  background(22, 68, 99, 100);

  actualTime = millis() - loadTime;
  println(actualTime);

  //little flashy circles
  noStroke();
  fill(255, 50);
  ellipse(random(width),random(height),20);

  //wiggly circle
  stroke(0);
  fill(204, 176, 42);
  if (actualTime > 500 && actualTime < 10500){
    i += random(-speed, speed);
    j += random(-speed, speed);
    ellipse(i, j, diameter, diameter);
  }

  fill(255, 50);
  noStroke();
  //pulsing square
  rectMode(CENTER);
  if (actualTime > 1000 && actualTime < 5000){
    if (s < 1){
      s = 0.1 + s;
      scale(s);
    }
    else{
      s = s * 0.1;
      scale(s);
    }
    rect(width/2, height/2, 300, 300);
  }

  fill(random(255), random(255), random(255));
  ellipseMode(CENTER);

  //first
  if (actualTime > 5000 && actualTime < 5250){
    background(32, 101, 148);
    ellipse(width/2, height/2, 60);
  }

  if (actualTime > 5250 && actualTime < 5500){
    background(32, 101, 148);
    ellipse(width/2 + 60, height/2 - 60, 60);
  }

  //second
  if (actualTime > 10500 && actualTime < 10750){
      background(32, 101, 148);
    ellipse(width/2, height/2, 60);
  }

  if (actualTime > 10750 && actualTime < 11000){
        background(32, 101, 148);
    ellipse(width/2 + 60, height/2 - 60, 60);
  }

  if (actualTime > 11000 && actualTime < 11250){
      background(32, 101, 148);
    ellipse(width/2 + 120, height/2, 60);
  }

  //third
  fill(255);
  if (actualTime > 16250 && actualTime < 16500){
        background(13, 40, 59);
    ellipse(width/2 + 60, height/2 - 60, 60);
  }

  if (actualTime > 16500 && actualTime < 16750){
    background(13, 40, 59);
    ellipse(width/2 + 120, height/2, 60);
  }

  fill(random(255), random(255), random(255), 100);
  if (actualTime > 11250){
    if (s < 1){
      s = 0.1 + s;
      scale(s);
    }
    else{
      s = s * 0.1;
      scale(s);
    }
    rect(width/2, height/2, 300, 300);
  }


  if (actualTime > 20000){
    background(255);
    mySound.pause();
  }
}


function playMusic(){
  loadTime = millis();
  mySound.play();
}

function mouseReleased(){
  if (once == 1){
    mySound.pause();
    once = 0;
  } else{
    mySound.play();
    once = 1;
  }
}
