var johnny
var wall11
var wall10 
var wall9
var wall8
var wall7
var wall6
var wall5
var wall4
var wall3
var wall2 
var wall1
var wall12
var wall13
var wall14
var wall15
var wall16
var wall17
var enemeydf,enemeydf2,enemeydf3,enemeydf4,enemeydf5,enemeydf6,enemeydf7,enemeydf8,enemeydf9,enemeydf10,enemeydf11,enemeydf12
var bullet,bulletGroup
var life = 3
var life2 = 3
var gameState = "play";

function setup() {
createCanvas(windowWidth, windowHeight);
 johnny = createSprite(50,200,10,10);
 enemeydf2 = createSprite(200,175,10,10);
 enemeydf = createSprite(200,205,10,10);
 enemeydf3 = createSprite(600,280,100,100);
 enemeydf4 = createSprite(600,350,10,10);
 enemeydf5 = createSprite(600,450,10,10);
 enemeydf6 = createSprite(450,400,10,10);
 enemeydf7 = createSprite(400,400,10,10);
 enemeydf8 = createSprite(400,260,10,70);
 enemeydf9 = createSprite(50,340,20,20);

 enemeydf.shapeColor = "red"
 enemeydf2.shapeColor = "red"
 enemeydf3.shapeColor = "red"
 enemeydf4.shapeColor = "red"
 enemeydf5.shapeColor = "red"
 enemeydf6.shapeColor = "red"
 enemeydf7.shapeColor = "red"
 enemeydf8.shapeColor = "red"
 enemeydf9.shapeColor = "red"

 enemeydf.velocityX = 6;
 enemeydf2.velocityX = 6;
 enemeydf3.velocityX = 2;
 enemeydf4.velocityX = 6;
 enemeydf5.velocityY = -6;
 enemeydf6.velocityY = 6;
 enemeydf7.velocityX = 6
 enemeydf8.velocityX = 7
 enemeydf9.velocityX = 8

 wall1 = createSprite(835,125,1600,10);
 wall2 = createSprite(300,215,520,10);
 wall3 = createSprite(40,350,10,440);
 wall4 = createSprite(90,200,10,30);
 wall5 = createSprite(700,320,10,400);
 wall6 = createSprite(500,320,10,200);
 wall7 = createSprite(500,490,400,10);
 wall8 = createSprite(300,400,10,180);
 wall9 = createSprite(210,310,180,10);
 wall10 = createSprite(450,570,820,10);
 wall11 = createSprite(860,370,10,400);
 wall12 = createSprite(1210,170,700,10);
 wall13 = createSprite(1210,150,50,50);
/// wall14 = createSprite(250,310,300,10);
// wall15 = createSprite(250,310,300,10);
bulletGroup = new Group();
}
function draw() {

    background("orange");


    if(gameState === "play"){

    johnny.collide(wall1);
    johnny.collide(wall2);
    johnny.collide(wall3);
    johnny.collide(wall4);
    johnny.collide(wall5);
    johnny.collide(wall6);
    johnny.collide(wall7);
    johnny.collide(wall8);
    johnny.collide(wall9);
    johnny.collide(wall10);
    johnny.collide(wall11);
    johnny.collide(wall12);
    enemeydf.bounceOff(wall4);
    enemeydf.bounceOff(wall5);
    enemeydf2.bounceOff(wall4);
    enemeydf2.bounceOff(wall5);
    enemeydf2.bounceOff(wall3);
    enemeydf3.bounceOff(wall5);
    enemeydf3.bounceOff(wall7);
    enemeydf4.bounceOff(wall5);
    enemeydf4.bounceOff(wall7);
    enemeydf3.bounceOff(wall6);
    enemeydf4.bounceOff(wall6);
    enemeydf5.bounceOff(wall1);
    enemeydf5.bounceOff(wall7);
    enemeydf6.bounceOff(wall7);
    enemeydf6.bounceOff(wall2);
    enemeydf7.bounceOff(wall6);
    enemeydf7.bounceOff(wall8);
    enemeydf8.bounceOff(wall6);
    enemeydf8.bounceOff(wall3);
    enemeydf9.bounceOff(wall6);
    enemeydf9.bounceOff(wall3);

   if(bulletGroup.collide(wall1)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall2)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall3)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall4)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall5)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall6)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall7)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall8)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall9)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall10)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall11)){
      bullet.destroy();
    }
    if(bulletGroup.collide(wall12)){
      bullet.destroy();
    }
    


    //Making enemey killy johnny!!!!
    if(enemeydf.isTouching(johnny)){
      gameState = "end"; 
      enemeydf.velocityX = 0;
      enemeydf.velocityY = 0;
      enemeydf2.velocityX = 0;
      enemeydf2.velocityY = 0;
      enemeydf3.velocityX = 0;
      enemeydf3.velocityY = 0;
      enemeydf4.velocityX = 0;
      enemeydf4.velocityY = 0;
      enemeydf5.velocityX = 0;
      enemeydf5.velocityY = 0;
      enemeydf6.velocityX = 0;
      enemeydf6.velocityY = 0;
      enemeydf7.velocityX = 0;
      enemeydf7.velocityY = 0;
      enemeydf8.velocityX = 0;
      enemeydf8.velocityY = 0;
      enemeydf9.velocityX = 0;
      enemeydf9.velocityY = 0;
    }
    if(enemeydf2.isTouching(johnny)){
      gameState = "end";
      enemeydf.velocityX = 0;
      enemeydf.velocityY = 0;
      enemeydf2.velocityX = 0;
      enemeydf2.velocityY = 0;
      enemeydf3.velocityX = 0;
      enemeydf3.velocityY = 0;
      enemeydf4.velocityX = 0;
      enemeydf4.velocityY = 0;
      enemeydf5.velocityX = 0;
      enemeydf5.velocityY = 0;
      enemeydf6.velocityX = 0;
      enemeydf6.velocityY = 0;
      enemeydf7.velocityX = 0;
      enemeydf7.velocityY = 0;
      enemeydf8.velocityX = 0;
      enemeydf8.velocityY = 0;
      enemeydf9.velocityX = 0;
      enemeydf9.velocityY = 0;
  }
  if(enemeydf3.isTouching(johnny)){
    gameState = "end";
    enemeydf.velocityX = 0;
    enemeydf.velocityY = 0;
    enemeydf2.velocityX = 0;
    enemeydf2.velocityY = 0;
    enemeydf3.velocityX = 0;
    enemeydf3.velocityY = 0;
    enemeydf4.velocityX = 0;
    enemeydf4.velocityY = 0;
    enemeydf5.velocityX = 0;
    enemeydf5.velocityY = 0;
    enemeydf6.velocityX = 0;
    enemeydf6.velocityY = 0;
    enemeydf7.velocityX = 0;
    enemeydf7.velocityY = 0;
    enemeydf8.velocityX = 0;
    enemeydf8.velocityY = 0;
    enemeydf9.velocityX = 0;
    enemeydf9.velocityY = 0;
}
if(enemeydf4.isTouching(johnny)){
  gameState = "end";
  enemeydf.velocityX = 0;
  enemeydf.velocityY = 0;
  enemeydf2.velocityX = 0;
  enemeydf2.velocityY = 0;
  enemeydf3.velocityX = 0;
  enemeydf3.velocityY = 0;
  enemeydf4.velocityX = 0;
  enemeydf4.velocityY = 0;
  enemeydf5.velocityX = 0;
  enemeydf5.velocityY = 0;
  enemeydf6.velocityX = 0;
  enemeydf6.velocityY = 0;
  enemeydf7.velocityX = 0;
  enemeydf7.velocityY = 0;
  enemeydf8.velocityX = 0;
  enemeydf8.velocityY = 0;
  enemeydf9.velocityX = 0;
  enemeydf9.velocityY = 0;
}
if(enemeydf5.isTouching(johnny)){
  gameState = "end";
  enemeydf.velocityX = 0;
  enemeydf.velocityY = 0;
  enemeydf2.velocityX = 0;
  enemeydf2.velocityY = 0;
  enemeydf3.velocityX = 0;
  enemeydf3.velocityY = 0;
  enemeydf4.velocityX = 0;
  enemeydf4.velocityY = 0;
  enemeydf5.velocityX = 0;
  enemeydf5.velocityY = 0;
  enemeydf6.velocityX = 0;
  enemeydf6.velocityY = 0;
  enemeydf7.velocityX = 0;
  enemeydf7.velocityY = 0;
  enemeydf8.velocityX = 0;
  enemeydf8.velocityY = 0;
  enemeydf9.velocityX = 0;
  enemeydf9.velocityY = 0;
}
if(enemeydf6.isTouching(johnny)){
  gameState = "end";
  enemeydf.velocityX = 0;
  enemeydf.velocityY = 0;
  enemeydf2.velocityX = 0;
  enemeydf2.velocityY = 0;
  enemeydf3.velocityX = 0;
  enemeydf3.velocityY = 0;
  enemeydf4.velocityX = 0;
  enemeydf4.velocityY = 0;
  enemeydf5.velocityX = 0;
  enemeydf5.velocityY = 0;
  enemeydf6.velocityX = 0;
  enemeydf6.velocityY = 0;
  enemeydf7.velocityX = 0;
  enemeydf7.velocityY = 0;
  enemeydf8.velocityX = 0;
  enemeydf8.velocityY = 0;
  enemeydf9.velocityX = 0;
  enemeydf9.velocityY = 0;
}
if(enemeydf7.isTouching(johnny)){
  gameState = "end";
  enemeydf.velocityX = 0;
  enemeydf.velocityY = 0;
  enemeydf2.velocityX = 0;
  enemeydf2.velocityY = 0;
  enemeydf3.velocityX = 0;
  enemeydf3.velocityY = 0;
  enemeydf4.velocityX = 0;
  enemeydf4.velocityY = 0;
  enemeydf5.velocityX = 0;
  enemeydf5.velocityY = 0;
  enemeydf6.velocityX = 0;
  enemeydf6.velocityY = 0;
  enemeydf7.velocityX = 0;
  enemeydf7.velocityY = 0;
  enemeydf8.velocityX = 0;
  enemeydf8.velocityY = 0;
  enemeydf9.velocityX = 0;
  enemeydf9.velocityY = 0;
}
if(enemeydf8.isTouching(johnny)){
  gameState = "end";
  enemeydf.velocityX = 0;
  enemeydf.velocityY = 0;
  enemeydf2.velocityX = 0;
  enemeydf2.velocityY = 0;
  enemeydf3.velocityX = 0;
  enemeydf3.velocityY = 0;
  enemeydf4.velocityX = 0;
  enemeydf4.velocityY = 0;
  enemeydf5.velocityX = 0;
  enemeydf5.velocityY = 0;
  enemeydf6.velocityX = 0;
  enemeydf6.velocityY = 0;
  enemeydf7.velocityX = 0;
  enemeydf7.velocityY = 0;
  enemeydf8.velocityX = 0;
  enemeydf8.velocityY = 0;
  enemeydf9.velocityX = 0;
  enemeydf9.velocityY = 0;
}
if(enemeydf9.isTouching(johnny)){
  gameState = "end";
  enemeydf.velocityX = 0;
  enemeydf.velocityY = 0;
  enemeydf2.velocityX = 0;
  enemeydf2.velocityY = 0;
  enemeydf3.velocityX = 0;
  enemeydf3.velocityY = 0;
  enemeydf4.velocityX = 0;
  enemeydf4.velocityY = 0;
  enemeydf5.velocityX = 0;
  enemeydf5.velocityY = 0;
  enemeydf6.velocityX = 0;
  enemeydf6.velocityY = 0;
  enemeydf7.velocityX = 0;
  enemeydf7.velocityY = 0;
  enemeydf8.velocityX = 0;
  enemeydf8.velocityY = 0;
  enemeydf9.velocityX = 0;
  enemeydf9.velocityY = 0;
}

  if(johnny.collide(wall13)){
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    wall13.destroy();
    enemeydf.destroy();
    enemeydf2.destroy();
    enemeydf3.destroy();
    enemeydf4.destroy();
    enemeydf5.destroy();
    enemeydf6.destroy();
    enemeydf7.destroy();
    enemeydf8.destroy();
    enemeydf9.destroy();
  }


    if(keyDown("right")){
        johnny.x = johnny.x + 2.5;
      }
      if(keyDown("left")){
        johnny.x = johnny.x - 2.5;
      }
      if(keyDown("up")){
        johnny.y = johnny.y - 2.5;
      }
      if(keyDown("down")){
        johnny.y = johnny.y + 2.5;
      }
      if(keyDown("W")){
        johnny.x = johnny.x+7
      }
      if(keyDown("S")){
        johnny.x = johnny.x-7
      }

      // Making pew pew
      if(keyWentDown("space")){
        bullet = createSprite(johnny.x,johnny.y,5,5);
        bullet.velocityX = 10;
        bulletGroup.add(bullet);
      }


      if(bulletGroup.isTouching(enemeydf)){
        enemeydf.destroy();        
      }
    if(bulletGroup.isTouching(enemeydf2)){
        enemeydf2.destroy();
      }
      if(bulletGroup.isTouching(enemeydf3)){
        life = life -1
      }
      if(life<=0){
        enemeydf3.destroy();
      }
      if(bulletGroup.isTouching(enemeydf4)){
        enemeydf4.destroy();
      }
     if(bulletGroup.isTouching(enemeydf5)){
        enemeydf5.destroy();
      }
      if(bulletGroup.isTouching(enemeydf6)){
        enemeydf6.destroy();
      }
      if(bulletGroup.isTouching(enemeydf7)){
        enemeydf7.destroy();
      }
      if(bulletGroup.isTouching(enemeydf8)){
        enemeydf8.destroy();
      }
      if(bulletGroup.isTouching(enemeydf9)){
        enemeydf9.destroy();
      }
  }
  
  
  drawSprites();

    if(gameState === "end"){
    textSize(200);
    text("Haha u lose oof",200,400);
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    wall13.destroy();
    enemeydf.destroy();
    enemeydf2.destroy();
    enemeydf3.destroy();
    enemeydf4.destroy();
    enemeydf5.destroy();
    enemeydf6.destroy();
    enemeydf7.destroy();
    enemeydf8.destroy();
    enemeydf9.destroy();
    johnny.destroy();
  }
}