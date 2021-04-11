// Переменные для хранения параметров
"use strict";
    let playerX;
    let playerY;
    let playerDirY;
    let playerDirX;
    let playerSpeed;
    let barrelMoving;
    let health = 3;
    let isPlaying = 1;
    let armorMass;
    let barrelMove1;
    let barrelMove2;
    let barrelMove3;
    let barrelMove4;
    let barrelMove5;
    
    function createPlayer() {
        let player = document.createElement("div");
        player.classList.add("car");
        document.body.appendChild(player);
        
        playerX = 40;
        playerY = 0;
        playerDirY = 0;
        playerDirX = 0;
        playerSpeed = 5;

        return player;
    }
    function randomInt(min= 10,max=350){
        let rand = Math.floor(Math.random() * (max - min)) + min;
        return rand;
    }
    
        function createBarrel(startX, startY) {
             let barrel = document.createElement("div");
            
                 barrel.classList.add("barrelClass");
                 barrel.style.left = startX+'px';
                 barrel.style.top = startY+'px'; 
            
              barrelMoving1 = 570;
              barrelMoving2 = 570;
              barrelMoving3 = 570;
              barrelMoving4 = 570;
              barrelMoving5 = 570;
      
        document.body.appendChild(barrel);

              barrelMove2 = barrelMoving2;
            
    return barrel;
}
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp"){   
        playerDirY = -1;
       player.style.transform = "rotate(170deg)";
     
    }
    
    else if (e.key === "ArrowDown"){
        playerDirY = 1;
    player.style.transform = "rotate(190deg)";
    }

});
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == '39'){
            playerDirX = 1;
        }
      else if  (e.keyCode == '37'){
        playerDirX = -1;         
            }
        
    });
    
    document.addEventListener('keyup', function(e) {
     playerDirY = 0;   
         player.style.transform = "rotate(180deg)";
    });
        document.addEventListener('keyup', function(e) {
     playerDirX = 0;   
         player.style.transform = "rotate(180deg)";
    });
  
        let barrel1 = createBarrel(randomInt,randomInt);
        let barrel2 = createBarrel(randomInt,randomInt);
        let barrel3 = createBarrel(randomInt,randomInt);
        let barrel4 = createBarrel(randomInt,randomInt);
        let barrel5 = createBarrel(randomInt,randomInt);
   
    let barrels = [barrel1,barrel2,barrel3,barrel4,barrel5];

       
   //     barrels[i].createBarrel;
    
   console.log("BARRELS SIZE", barrels.length);
  for(let i =0; i<barrels.length; i++){
  barrels[i].style.top = randomInt() + 'px';
     // barrels[i].style.left = randomInt() + 'px';
      
      
  }
    
    function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}
    
    function collisionDetection(obj1, obj2) {
  let playerWidth =90;
let playerHeight = 50;

let barrelWidth = 50;
let barrelHeight = 50;
       
            
       
    if (
        (getCoords(obj1).left <= getCoords(obj2).left +barrelWidth &&
        getCoords(obj1).left + playerWidth >= getCoords(obj2).left &&
        getCoords(obj1).top <=  getCoords(obj2).top + barrelHeight &&
        playerHeight + getCoords(obj1).top >=  getCoords(obj2).top) 
      
    )
        return true;
        else 
            return false;
        
}

        let requestId;
    
              barrelMove1 = 10+randomInt(10,445);
              barrelMove2 = 10+randomInt(10,455);
              barrelMove3 = 10+randomInt(10,440);
              barrelMove4 = 10+randomInt(10,430);
              barrelMove5 = 10+randomInt(10,455);
    
        let movingRoad = 650;
        let movingRoad2 = 10;
        let roadcoord;
 
        road2Id.style.left = 650+'px';
        road2Id.style.top = 9+'px';

   
    function loop() {
        
         requestId = undefined;
        
         playerY += playerDirY * playerSpeed;
         playerX += playerDirX * playerSpeed;
       
            barrelMoving1 -= 3;
            barrelMoving2 -= 3;
            barrelMoving3 -= 3;
            barrelMoving4 -= 3;
            barrelMoving5 -= 3;

         
            movingRoad-=3;
            movingRoad2-=3;
        
            roadcoord = road2Id.style.left;
        
         if(movingRoad2<-635){
            movingRoad2 = 650;
        }
            if(movingRoad<-635){
            movingRoad = 650;
            }
        
        road2Id.style.left = road1Id.style.right + 'px';
        road1Id.style.right =roadcoord +'px';
        road1Id.style.left =movingRoad +'px';
        road2Id.style.left =movingRoad2 +'px';
       
    player.style.top = playerY + 'px';
    player.style.left = playerX + 'px';
        
    if(playerY <= 10)
    {
    playerY = 10;
    }
        if(playerY >= 348)
        {
        playerY = 348;
        }
            if(playerX >= 502)
            {
            playerX = 502;
            }
                if(playerX <= 12)
                {
                    playerX = 12;
                }

            for(let i =0; i<barrels.length; i++){
                
                barrels[0].style.left = barrelMoving1+barrelMove1 + 'px';
                barrels[1].style.left = barrelMoving2+barrelMove2 + 'px';
                barrels[2].style.left = barrelMoving3+barrelMove3 + 'px';
                barrels[3].style.left = barrelMoving4+barrelMove4 + 'px';
                barrels[4].style.left = barrelMoving5+barrelMove5 + 'px';
    
        if(barrelMoving1<-60-barrelMove1)
            {
                barrelMove1 = 0;
                barrelMoving1 = 570;
                barrels[0].style.left = barrelMoving1 + 'px';          
                barrels[0].style.top = randomInt() + 'px';    

            }
          
        if(barrelMoving2<-60-barrelMove2)
            {
                barrelMove2 = 0;
                barrelMoving2 = 570;
                barrels[1].style.left = barrelMoving2 + 'px';          
                barrels[1].style.top = randomInt() + 'px';    
                 
            }
                 if(barrelMoving3<-60-barrelMove3)
            {
                barrelMove3 = 0;
                barrelMoving3 = 570;
                barrels[2].style.left = barrelMoving3 + 'px';          
                barrels[2].style.top = randomInt() + 'px';    
                
                 
            }
                 if(barrelMoving4<-60-barrelMove4)
            {
                barrelMove4 = 0;
                barrelMoving4 = 570;
                barrels[3].style.left = barrelMoving4 + 'px';          
                barrels[3].style.top = randomInt() + 'px';    
                  
            }
                 if(barrelMoving5<-60-barrelMove5)
            {
                barrelMove5 = 0;
                barrelMoving5 = 570;
                barrels[4].style.left = barrelMoving5 + 'px';          
                barrels[4].style.top = randomInt() + 'px';    

            }
                
             
                function collisionDetect(obj1){
        if (collisionDetection(player, obj1)){
                if(isPlaying == 1){
                        if(obj1==barrels[0]) 
                        {
                            barrelMoving1 = 600;
                            console.log("HIT 0");
                        }
                            if(obj1==barrels[1]) 
                            {
                                barrelMoving2 = 600;
                                  console.log("HIT 1");
                            }
                                if(obj1==barrels[2]) 
                                {
                                    barrelMoving3 = 600;
                                      console.log("HIT 2");
                                }
                                    if(obj1==barrels[3]) 
                                    {
                                        barrelMoving4 = 600;
                                          console.log("HIT 3");
                                    }
                                        if(obj1==barrels[4]) 
                                        {
                                            barrelMoving5 = 600;
                                              console.log("HIT 4");
                                        }
                            
                player.style.borderColor = "red";
                obj1.style.left = 550+'px';
                obj1.style.top = randomInt() + 'px';
                health--;
                console.log(health);
                player.style.borderColor = "red";
                let countLifes = health;
                            
                    if(countLifes>0)
                        armorDiv.removeChild(armorDiv.lastElementChild);
                            
                    countLifes--;
              
            }
} 
                }
                    
                collisionDetect(barrels[0]);
                       collisionDetect(barrels[1]);
                        collisionDetect(barrels[2]);
                       collisionDetect(barrels[3]);
                collisionDetect(barrels[4]);
                

            }
        if(health<=0)
            {
console.log("GAME OVER");
                isPlaying = 0;
                gameOver.classList.add('showOver');
                stop();
                
                return;
            }
        
     game();
}

    let gameID;
    let player = createPlayer();

    function game() {
      
    if (!requestId) {
       
       requestId = window.requestAnimationFrame(loop);
        
    }
}

function stop() {
    
      if (requestId) {
       window.cancelAnimationFrame(requestId);
      }
}
    document.addEventListener('DOMContentLoaded', function(){
     requestId = window.requestAnimationFrame(loop);
       
    })
   function ArmorCount(){
         for(let i =0; i<2; i++){
             
            let add = document.createElement("div");
            add.classList.add('armorClass');
            armorMass += add;
            console.log(armorMass[2]);
            armorDiv.appendChild(add);
             
        }
   }
    ArmorCount();
