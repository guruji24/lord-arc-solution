var logoImage,logo;
var time;
var posterImage,poster;
var music1;
var gameState = "intro"
var MainWallpaper;
var CreateServerButton,AdderverButton,JoinServerButton;
var ipInput;
var serverScreenSprite;

function preload()
{

logoImage = loadImage("../data/BEAST GAMERS.png");
posterImage = loadImage("../data/lord arc poster.png");
music1 = loadSound("../data/background music 1.mp3");
MainWallpaper = loadImage("../data/MainBackground.png");

}


function setup()
{

createCanvas(windowWidth,windowHeight);

time = 0;

logo = createSprite(720,350,100,100);
logo.addImage(logoImage);

poster = createSprite(720,350);
poster.addImage(posterImage);


logo.visible = false;
poster.visible = false;

}


function draw()
{

background("black");

//console.log(time);

if(frameCount%7===1)
{

time = time+1;

}

if(gameState==="intro"){

if(time===5)
{

logo.visible = true;

}

if(time===15)
{

logo.destroy();

}

if(time===20)
{

poster.visible = true

}else if(time===30)
{

poster.destroy();

}

if(time===35)
{

gameState = "mainMenu"
music1.play();

}

}

//console.log(gameState);

if(gameState==="mainMenu")
{

background(MainWallpaper);



}

if(gameState==="serverScreen")
{

background("white");

serverScreenSprite = new serverScreen();
serverScreenSprite.display();

}


drawSprites();

if(gameState==="mainMenu")
{

fill("black");
textSize(40);
text("Press enter or touch anywhere on screen to continue",350,700);    

if(keyDown("Enter"))
{

gameState = "serverScreen"

}

}


}


