var car,wall;
var speed,weight;
speed=random(50,90);
weight=random(400,1500);
car=createSprite(50,200,50,50);
wall=createSprite(1500,200,60,height/2);
car.velocityX=speed;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}