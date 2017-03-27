var pingpong = [];

function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < 100; i++) {
    pingpong[i] = new Ball(random(width), random(height), 50, random(1,4));
  }
}

function draw() {
  background(255, 255, 0);
  fill(255, 0, 255);
  for (var i = 0; i < pingpong.length; i++) {
    pingpong[i].render();
    pingpong[i].move();
  }
}



function Ball(x, y, sz,sp) {
  this.xpos = x;
  this.ypos = y;
  this.size = sz;
  this.speed = sp


  this.render = function() {
    ellipse(this.xpos, this.ypos, this.size, this.size);
  }

  this.move = function() {
    this.xpos = this.xpos + this.speed; // i forgot my variable names in class, in class i wrote this.x instead of this.xpos
  }
}