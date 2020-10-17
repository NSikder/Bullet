var bullet, wall;
var speed, weight, thickness;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet = createSprite(50,200,15,10);
  bullet.shapeColor = color(255,255,255);
  bullet.velocityX = speed;
  //wall.debug = true;
  //bullet.debug = true;
}

function draw() {
  background(0); 
  
  
  if(bullet.x+bullet.width >= wall.x){

    bullet.velocityX = 0;
    deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    console.log(deformation)
    if (deformation > 10){
      wall.shapeColor = color(255,0,0);
    } else {
      wall.shapeColor = color(0,255,0)
    }
  }

  drawSprites();
}
