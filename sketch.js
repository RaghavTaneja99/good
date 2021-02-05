var path,boy,cash,diamonds,jwellery,sword,score,reset,r
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup,gamestage

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  r=loadImage("gameOver.png")
}

function setup(){
score=0  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 3+width/100

  boy = createSprite(1000,width-width/2.20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08+width/100000
 reset=createSprite(width/2,height/2,0,10)
 reset.addImage(r)
  
  reset.scale=0.7+width/1000
//creating boy running

  
  gamestage="serve"
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  background(0);
  boy.x = World.mouseX;
  if(path.y>height){
    path.y=height/4
  }
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > width ){
    path.y = height/2;
  }
  if(gamestage==="serve"){
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    boy.visible=true
    path.velocityY=4+width/1000
    boy.y=width-width/2
    reset.visible=false
   
}
   drawSprites();
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      score=score+100
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      score=score+200
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      score=score+150
      
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
      
      gamestage="play"
    }
    

   
  }
if(gamestage==="play"){
    fill("Red")
if(mousePressedOver(reset)){
  gamestage="serve"
  score=0
}jwelleryG.destroyEach();
         diamondsG.destroyEach();
         cashG.destroyEach();
         swordGroup.destroyEach();
        jwelleryG.setVelocityYEach(0);
         diamondsG.setVelocityYEach(0);
         cashG.setVelocityYEach(0);
         swordGroup.setVelocityYEach(0);
  jwelleryG.setLifetimeEach(-1);
         diamondsG.setLifetimeEach(-1);
      cashG.setLifetimeEach(-1);
         swordGroup.setLifetimeEach(-1);
        path.velocityY=0
  boy.visible=false
 
  reset.visible=true
  boy.visible=false
  boy.y=100000
}
 
  textSize(20+width/100);
  fill(255);
  text("Treasure: "+ score,width/2-20,50);
  

 

}

function createCash() {
  if (World.frameCount % 80 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12+width/10000
  cash.velocityY = 3+width/100
  cash.lifetime = 3000;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03+width/50000
  diamonds.velocityY = 3+width/100
  diamonds.lifetime = 3000
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13+width/10000
  jwellery.velocityY = 3+width/100
  jwellery.lifetime = 5000
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 80== 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1+width/10000
  sword.velocityY = 3+width/100
  sword.lifetime = 5000
  swordGroup.add(sword);
  }
}