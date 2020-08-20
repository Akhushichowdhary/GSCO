var car;
var speed,weight;
var stand,stand2,stand3;


function setup() {
  createCanvas(1600,400);
  car = createSprite(30,200,20,30);
 speed = random(60,90);
 weight = random(400,1200);

 car2 = createSprite(30,350,20,30);
 speed = random(45,90);
 weight = random(400,1300);

 car3 = createSprite(30,50,20,30);
 speed = random(70,90);
 weight = random(400,1400);



 stand = createSprite(1300,200,50,50);
 stand2 = createSprite(1300,350,50,50);
 stand3 = createSprite(1300,50,50,50);
 

  
 
}

function draw() {
  background("black");  
  drawSprites();

car.velocityX = speed;
car2.velocityX = speed;
car3.velocityX = speed;





if(stand.x - car.x < (car.width + stand.width)/2){
  car.velocityX = 0;
  
  var deformation  = 0.5 * width * speed * speed/22509;
    
  if(deformation >180)
  {
     car.shapeColor = "green";
     
  }
 
  if(deformation < 180 && deformation > 100)
  {
    car.shapeColor = "yellow";
    car2.velocityX  = 0;
  }

  if(deformation < 100)
  {
    car.shapeColor = "red";
    car3.velocityX = 0;
}

}



}