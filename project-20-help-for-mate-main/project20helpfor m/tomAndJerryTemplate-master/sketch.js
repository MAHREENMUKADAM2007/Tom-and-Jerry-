var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;
var bg;
var canvas;



function preload() {
  bg = loadImage("images/garden.png");
  tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");



}
function setup(){
createCanvas(1500,1000);



tom = createSprite(870,600)
tom.addAnimation("tomSleeping",tomImg1);
tom.scale = 0.2;

jerry = createSprite(150,600);
jerry.addAnimation("jerryStanding",jerryImg2);
jerry.scale = 0.1;


}

function draw(){

background(bg);

if(tom.x - jerry.x<(tom.width- jerry.width)/2)
{
tom.addAnimation("tomLastImage",tomImg3);
tom.x=300;
tom.scale=0.2;
tom.changeAnimation("tomLastImage");


 jerry.addAnimation("jerryLastImage",jerryImg1)
 jerry.scale=0.1;
 jerry.changeAnimation("jerryLastImage");
}


drawSprites();

}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}