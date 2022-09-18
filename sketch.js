var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage;
var obstacleImage1;
var obstacleImage2;
var obstacleImage3;
var obstacleImage4;
var obstacleImage5;
var obstacleImage6;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obstacleImage1 = loadImage("obstacle1.png");
  obstacleImage2 = loadImage("obstacle2.png");
  obstacleImage3 = loadImage("obstacle3.png");
  obstacleImage4 = loadImage("obstacle4.png");
  obstacleImage5 = loadImage("obstacle5.png");
  obstacleImage6 = loadImage("obstacle6.png");

}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 

}

function draw() {
  //set background color
  background(180);
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  spawnClouds();
  spawnObstacles();
  drawSprites();
  
}

function spawnClouds(){
  if(frameCount % 60===0){
    var cloud = createSprite(600,100,10,10); 
    cloud.addImage(cloudImage)
    cloud.scale = 0.5;
    cloud.velocityX = -2;
    cloud.y = Math.round(random(30,120));
    cloud.depth = trex.depth;
    trex.depth+= 1;
    cloud.lifeTime = 300;
  }
  
}

  function spawnObstacles(){
    if(frameCount % 60===0){
    var obstacle = createSprite(600,150,10,10);
    var rand = Math.round(random(1,6));
    switch(rand){}
    obstacle.velocityX = -3;
    
  }
}