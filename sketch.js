var Play=1;
var End=0;
var gameState=Play;
var ground,invisibleGround;
var score=0;
var player;
var gameOver,restart;



function preload(){
  backgroundImage = loadImage("background.jpg");
  groundImage = loadImage("ground2.png");
  player_running = loadAnimation("running1.gif");
  endImage = loadImage("gameOver.png");
  restartImage = loadImage("restart.png");

}
function setup(){
  createCanvas(1200,500);

  player = createSprite(200,400,30,30);
  player.addAnimation("running", player_running);
  player.scale=0.5;

  ground = createSprite(600,470,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2
  ground.velocityX = -(6+3*score/100);

var invisibleGround = createSprite(200,490,400,5);
invisibleGround.visible = false;

var gameOver = createSprite(200,300);
var restart = createSprite(200,340);
gameOver.addImage("gameOver",endImage);
gameOver.scale = 0.5;
restart.addImage("restart",restartImage);
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;

textSize(18);
textFont("Georgia");
textStyle(BOLD);
console.log(player.y);


}
function draw(){
  background(backgroundImage);
  drawSprites();
}