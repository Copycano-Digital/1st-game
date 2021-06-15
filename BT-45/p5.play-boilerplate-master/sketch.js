var Crims;
var Dandi;
var Grass;

function setup() {
  createCanvas(800,400);
  Crims = createSprite(400, 200, 50, 50);
  Crims.shapeColor = rgb(233,0,0);

  Dandi = createSprite(400, 260, 50, 50);
  Dandi.shapeColor = rgb(255,233,0);

  Grass = createSprite(400, 320, 150, 50);
  Grass.shapeColor = rgb(0, 200, 0);
}

function draw() {
  background(150,170,255);  

  if((keyWentUp(LEFT_ARROW)) || (keyWentUp(RIGHT_ARROW))){
    Crims.velocityX = 0;
  }

  if((keyWentUp(UP_ARROW))){
    Crims.velocityY = 0;
  }

  if(keyWentDown(LEFT_ARROW)){
    Crims.velocityX = -7;
  }

  if(keyWentDown(RIGHT_ARROW)){
    Crims.velocityX = 7;
  }

  if((keyWentDown("space")) && Crims.collide(Grass)){
    Crims.velocityY = -12;
  }

  Crims.collide(Grass);

  Crims.velocityY = Crims.velocityY + 0.8

  drawSprites();
}