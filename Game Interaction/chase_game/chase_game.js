var ballx = 300; 
var bally = 300;
var ballSize = 40; 
var score = 0;
var gameState = "L1";
var time = 0;

function setup() {
createCanvas(600,600);
textAlign(CENTER);
textSize(20);
}// end setup

function draw() {
background(220);
if(gameState == "L1"){
  levelOne();
}
if(gameState == "L2"){
  levelTwo();
}
if(gameState == "L3"){
  levelThree();
}
if(gameState == "L4"){
  levelFinal();
}

text(("Score: " + score),width/2, 40);
} // end draw

function levelOne(){
  text('Level 1', width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
 if (distToBall<ballSize /2){
   ballx = random(width);
   bally = random(height);
   score =score +1;
 }
 if (score>5){
   gameState = "L2";
 } //if distToBall
  ellipse(ballx,bally, ballSize, ballSize);
  line(ballx,bally,mouseX,mouseY);
} //end of level 1

function levelTwo(){
  text('Level 2', width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
 if (distToBall<ballSize /2){
   ballx = random(width);
   bally = random(height);
   score =score +1;
 }
 if (score>10){
   gameState = "L3";
 } //if distToBall
  ellipse(ballx,bally, ballSize, ballSize);
  
  
} //end of level 2

function levelThree(){
  text('Level 3', width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
 if (distToBall<ballSize /2){
   ballx = random(width);
   bally = random(height);
   score =score +1;
   ballSize = ballSize - 5;
 }
 if (score>15){
   gameState = "L4";
 } //if distToBall
  ellipse(ballx,bally, ballSize, ballSize);
  
  
} //end of level 3

function levelFinal(){
  text('You Win!', width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
 }
 if (score>16){
   background(random(255));
  
 
} //end of level 4
