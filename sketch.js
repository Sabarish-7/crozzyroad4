var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var city;

function preload()
{
 carAnimation1=loadAnimation("car1.png");
 carAnimation2=loadAnimation("car2.png");
 playerAnimation=loadAnimation("PLayer-03.png");
 logAnimation1=loadAnimation("log1.png");
 logAnimation2=loadAnimation("log2.png");
 cityAnimation1=loadAnimation("city1.png");
 cityAnimation2=loadAnimation("city2.png");}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();

  city=createSprite(width/2,-1500)


  for( i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)
    {
 var road = createSprite(683,height-150-(i*400)-grassHeight,width,300)
    road.shapeColor="BLack";   
 }
   bottomGrass1.shapeColor=" grey";
 }

for(vari=0;i<90;i++){
  cars=new Car(2);
  carGroup1.add(cars.spt);
 
}


for(i=1;i<logGroup1.length;i++){
if(logGroup[1].x<0)
{
logGroup1[1].x=width;
  }
  
}
player=new Player(width/2,height-25);
     

}

function draw() {
  background("skyblue");
  
  translate(0,-player.spt.y+height-150); 
  
  if(city.isTouching(player.spt)){
    gameState = "win";
  }
  if(gameState === "Win"){
    stroke("Green");
    fill("Green");
    text("Congratulations! You Made It",width/2-250,-1700);
    carGroup1.destroyEach()
    logGroup1.destroyEach()
    
  }

  if(carGroup1.isTouching(player.spt)){
    player.spt.x=width/2
    player.spt.y = height-75
  }
  if(logGroup1.isTouching(player.spt)){
    player.spt.x=player.spt.x-3
  }
  else if((player.spt.y > height-1550 && player.spt.y < height-1300)||
          (player.spt.y < height-550 && player.spt.y > height-850)||
          (player.spt.y>height)||
          (player.spt.x < 0)||
          (player.spt.y > width)){
  
    player.spt.x = width/2
    player.spt.y  = height-75
  }
  for(i=1;i<carGroup1.length;i++){
    if(carGroup1[1].x<0)
      {
      carGroup1[1].x=width;
      }
        }

        for(i=1;i<logGroup1.length;i++){
          if(logGroup[1].x<0)
            {
            logGroup1[1].x=width;
            }
              }
              city.addAnimation("city",cityAnimation1)
              city.addAnimation("city",cityAnimation2)
  drawSprites();
}

 


function keyPressed(){
  if(keyCode == UP_ARROW){
    player.move(0,-2);
  }else if(keyCode == DOWN_ARROW){
    player.move(0,2);
  }else if(keyCode == LEFT_ARROW){
    player.move(-2,0);
  }else if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }
}

