var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(400,450);
monkey = createSprite(80,265,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,300,900,10);
ground.velocityX = -4
ground.x = ground.width/2;

FoodGroup = createGroup();
obstacleGroup = createGroup();
}


function draw() {
  background(255);
  if(keyDown("space") && monkey.y >= 250) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  fill("black");
  textSize(20);
  survivalTime=Math.round(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 125, 50);
  
  monkey.collide(ground);
  food();
  obstacles();
  drawSprites();
}

function food() {
  if (World.frameCount%80===0){
   banana = createSprite(400,200,50,50);
   banana.y = Math.round(random(120,200));
   banana.addImage("banana",bananaImage);
   banana.velocityX = -8
   banana.scale = 0.1;
   banana.lifetime = 200;
   FoodGroup.add(banana);
  }
}

function obstacles() {
  if (World.frameCount%300===0){
   obstacle = createSprite(400,280,50,50);
   obstacle.addImage("obstacle",obstacleImage);
   obstacle.velocityX = -8
   obstacle.scale = 0.1;
   obstacle.lifetime = 200;
   obstacleGroup.add(obstacle);
  }
}





