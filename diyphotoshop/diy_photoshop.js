var img;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var initials ='mc'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  img = loadImage('https://Meshjue.github.io/images/boo.png'); //boo
  img1 = loadImage('https://Meshjue.github.io/images/curtain.png'); //curtain
  img2 = loadImage('https://Meshjue.github.io/images/guy.png'); //guy
  img3 = loadImage('https://Meshjue.github.io/images/haha.png'); //laughing
  img4 = loadImage('https://Meshjue.github.io/images/mic.png'); //mic and mic stand
  img5 = loadImage('https://Meshjue.github.io/images/rose.png'); //rose
  img6 = loadImage('https://Meshjue.github.io/images/stool.png'); //stool
  img7 = loadImage('https://Meshjue.github.io/images/theater.png'); //theater
  img8 = loadImage('https://Meshjue.github.io/images/tomato.png'); //tomato
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool - boo
   
    image(img, mouseX-45, mouseY-35);
    
  } else if (toolChoice == '2') { // second tool - curtain

    image(img1, mouseX-90, mouseY-60);
    
  } else if (toolChoice == '3') { // third tool - guy

   image(img2, mouseX-40, mouseY-120);
   
  } else if (toolChoice == '4') { // fourth tool - laughter

   image(img3, mouseX-60, mouseY-33);
 
  } else if (toolChoice == '5') { // fifth tool - mic
    
    image(img4, mouseX-25, mouseY-100);
  
  } else if (toolChoice == '6') { // sixth tool - rose

    image(img5, mouseX-40, mouseY-30);
    
  } else if (toolChoice == '7') { // seventh tool - stool

   image(img6, mouseX-80, mouseY-68);
   
  } else if (toolChoice == '8') { // eighth tool - theater

   image(img7, mouseX-30, mouseY-20);
   
  } else if (toolChoice == '9') { // ninth tool - tomato

   image(img8, mouseX-25, mouseY-37.5);
  
  } else if (toolChoice == '0') { // tenth tool - yellow transparent circle for spotlight
    
    noStroke();
    fill(245, 235, 167, 5);   
    circle(mouseX, mouseY, 200, 200);
    
  } else if (toolChoice == 'o' || toolChoice == 'O') { // eleventh tool - brown for stage
    
    strokeWeight(8);
    stroke(90, 52, 7);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 'p' || toolChoice == 'P') { // twelfth tool - brick-like color for wall 
    
    strokeWeight(8);
    stroke(137, 48, 39);
    line(mouseX, mouseY, pmouseX, pmouseY); 
    
  } else if (toolChoice == 'l' || toolChoice == 'L') { // thirteenth tool - lines for brick wall 
    
    strokeWeight(1);
    stroke(85);
    line(mouseX, mouseY, pmouseX, pmouseY); 
    
  }
 }
 
 function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'c' || key == 'C') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second

}
