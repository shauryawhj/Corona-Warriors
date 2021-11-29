var bg;
var doctor
var doctorImage
var corona
var virusGroupG,virusGroupY,virusGroupB,virusGroupP,virusGroupR
var virus1,virus2,virus3,virus4,virus5
var patient1,patient2,patient1Img,patient2Img;
var score = 0;
var play = 1;
var end = 0;
var gameState = play;
var winnerImg,gameOverImg,winner,gameOver;
function preload(){
bg=loadImage("Hospital cw.jpg");
doctorImage=loadImage("Doctor cw.png");
virus1=loadImage("coorona cw.png")
virus2=loadImage("corona1 cw.png")
virus3=loadImage("corona2 cw.png")
virus4=loadImage("corona3 cw.png")
virus5=loadImage("corona4 cw.png")
patient1Img=loadImage("patient 1 cw.png")
patient2Img=loadImage("patient 2 cw.png")
winnerImg=loadImage("winner cw.jpg")
gameOverImg=loadImage("game over cw.jpg")


}
function spawnVirusG(){
if(frameCount%80===0){
  var virusG=createSprite(0,0,50,50)
  virusG.velocityX=4;
  virusG.y=Math.round(random(50,350))
  virusG.addImage(virus1);
  
  
virusG.scale=0.15;
virusGroupG.add(virusG);
}
}

function spawnVirusY(){
  if(frameCount%100===0){
    var virusY=createSprite(0,0,50,50)
    virusY.velocityX=4;
    virusY.y=Math.round(random(50,350))
    virusY.addImage(virus2);
    
    
  virusY.scale=0.15;
  virusGroupY.add(virusY);
  }
  }

  function spawnVirusB(){
    if(frameCount%120===0){
      var virusB=createSprite(0,0,50,50)
      virusB.velocityX=4;
      virusB.y=Math.round(random(50,350))
      virusB.addImage(virus3);
      
      
    virusB.scale=0.15;
    virusGroupB.add(virusB);
    }
    }

    function spawnVirusP(){
      if(frameCount%140===0){
        var virusP=createSprite(0,0,50,50)
        virusP.velocityX=4;
        virusP.y=Math.round(random(50,350))
        virusP.addImage(virus4);
        
        
      virusP.scale=0.15;
      virusGroupP.add(virusP);
      }
      }

      function spawnVirusR(){
        if(frameCount%160===0){
          var virusR=createSprite(0,0,50,50)
          virusR.velocityX=4;
          virusR.y=Math.round(random(50,350))
          virusR.addImage(virus5);
          
          
        virusR.scale=0.15;
        virusGroupR.add(virusR);
        }
        }

function setup() {

  createCanvas(800,400);
  doctor=createSprite(450,200,50,50);
  doctor.addImage("doctor",doctorImage);
  doctor.scale=0.4;
  //doctor.debug=true;
  doctor.setCollider("rectangle",0,0,200,300);
  patient1=createSprite(700,250,50,50)
  patient2=createSprite(650,250,50,50)
  patient1.addImage("patient1",patient1Img)
  patient2.addImage("patient2",patient2Img)
  patient1.scale=0.4
  patient2.scale=0.5

  winner=createSprite(400,200,100,100);
  winner.addImage("winnerImg",winnerImg)
  winner.scale=0.4;


gameOver=createSprite(400,200,100,100);
gameOver.addImage("gameOverImg",gameOverImg)
gameOver.scale=0.5;


  virusGroupG=createGroup();
  virusGroupY=createGroup();
  virusGroupB=createGroup();
  virusGroupP=createGroup();
  virusGroupR=createGroup();
 
  //createSprite(400, 200, 50, 50);
}

function reset() {
  virusGroupG.destroyEach();
  virusGroupB.destroyEach();
  virusGroupR.destroyEach();
  virusGroupP.destroyEach();
  virusGroupY.destroyEach();
  winner.visible=false;
gameOver.visible=false;
gameState = play;
score=0
}

function draw() {
  background(bg); 
  textSize(25);
  fill("red");
  stroke(4);
  text("SCORE ~ "+score,600,50);
winner.visible=false;
gameOver.visible=false;
  if(gameState===play){
    if(keyDown(UP_ARROW)){
      doctor.y=doctor.y-5;
        }
        if(keyDown(DOWN_ARROW)){
          doctor.y=doctor.y+5;
            }
            if(virusGroupG.isTouching(doctor)){
           virusGroupG.destroyEach();
           score=score+1;
           }
            if(virusGroupY.isTouching(doctor)){
              virusGroupY.destroyEach();
              score=score+1;
               }
               if(virusGroupB.isTouching(doctor)){
                virusGroupB.destroyEach();
                score=score+1;
                 }
                 if(virusGroupP.isTouching(doctor)){
                  virusGroupP.destroyEach();
                  score=score+1;
                   }
                   if(virusGroupR.isTouching(doctor)){
                    virusGroupR.destroyEach();
                    score=score+1;

                    
                     }
          if(score===50){
            winner.visible=true;
          }          
            if(virusGroupG.isTouching(patient1) || virusGroupG.isTouching(patient2) ||
            virusGroupY.isTouching(patient1) || virusGroupY.isTouching(patient2) ||
            virusGroupB.isTouching(patient1) || virusGroupB.isTouching(patient2) ||
            virusGroupR.isTouching(patient1) || virusGroupR.isTouching(patient2) ||
            virusGroupP.isTouching(patient1) || virusGroupP.isTouching(patient2) 
            ) {
gameState=end;
            } 

  spawnVirusG() ;
  spawnVirusY() ;
  spawnVirusB() ;
  spawnVirusP() ;
  spawnVirusR() ;
  }
if (gameState===end)
{
  gameOver.visible=true;
virusGroupG.setLifetimeEach(-1);
virusGroupG.setVelocityXEach(0);
virusGroupB.setLifetimeEach(-1);
virusGroupB.setVelocityXEach(0);
virusGroupY.setLifetimeEach(-1);
virusGroupY.setVelocityXEach(0);
virusGroupR.setLifetimeEach(-1);
virusGroupR.setVelocityXEach(0);
virusGroupP.setLifetimeEach(-1);
virusGroupP.setVelocityXEach(0);
}
if(keyDown("space")){
  reset();
}

  drawSprites();
}