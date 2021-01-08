const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

var engine,world;
var stand2,stand3,stand1,polygon;
var ground,polygon_img,slingshot;
var block1, block2, block3, block4, block5, block6, block7,block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18;
var backgroundImg;
var gameState = "on slingshot";
var bg = "Sprites/bg.jpg";



var score = 0;


function preload(){
    getBackgroundImg();
    backgroundImg = loadImage("Sprites/bg.jpg");
    
    polygon_img=loadImage("polygon.png");


}
 function setup(){
     createCanvas(1200,400);
     engine = Engine.create();
     world=engine.world;
     
     block1= new block(330,235,30,40);
     block2= new block(360,235,30,40);
     block3= new block(390,235,30,40);
     block4= new block(420,235,30,40);
     block5= new block(450,235,30,40);
     block6= new block(360,195,30,40);
     fill("blue");
     block7= new block(390,195,30,40);
     block8= new block(420,195,30,40);
     block9= new block(390,155,30,40);
     block10= new block(930,235,30,40);
     block11 =new block(960,235,30,40);
     block12= new block(990,235,30,40);
     block13= new block(1020,235,30,40);
     block14= new block(1050,235,30,40);
     block15= new block(960,195,30,40);
     block16= new block(990,195,30,40);
     block17= new block(1020,195,30,40);
     block18= new block(990,155,30,40);


      this.polygon = Bodies.circle(50,200,20);
      World.add(world,this.polygon);

      slingshot = new Slinglaunch(this.polygon,{x:100,y:200});

      stand1 = new Ground(1000,380,100000,20);
      stand2 = new Ground(1000,250,200,15);
      stand3 =new Ground(400,350,200,15);
 }

 function draw(){
     if(backgroundImg){
         background(backgroundImg);
     }
     

     noStroke();
     textSize(20);
     fill("white");
     text("SCORE :" +score,750,40);
     text("Press the space key for another chance!", 400 , 380);

  
     
     Engine.update(engine);


     
     
     
     
     
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();
      block13.display();
     block14.display();
     block15.display();
     block16.display();
     block17.display();
     block18.display();
     
     slingshot.display();
     stand1.display();
     stand2.display();
     stand3.display();

    
     block1.score();
     block2.score();
     block3.score();
     block4.score();
     block5.score();
     block6.score();
     block7.score();
     block8.score();
     block9.score();
     block10.score();
     block11.score();
     block12.score();
     block13.score();
     block14.score();
     block15.score();
     block16.score();
     block17.score();
     block18.score();

     imageMode(CENTER)
     image(polygon_img,polygon.position.x,polygon.position.y,40,40);



 }

 function keyPressed(){
     if(keyCode === 32 && (polygon.body.speed<1)){
     if(keyCode === 32){
     slingshot.attach(this.polygon);
     gameState = "on slingshot"
     }
 }

function mouseDragged(){
    if(gameState!== "launched"){
    Matter.Body.setPosition(this.polygon,{x:mouseX , y:mouseY})
}
}
 function mouseReleased(){
     slingshot.fly();
     gameState="launched";
 }
}
   
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var date = responseJSON.datetime;
    var hour = date.slice(11,13);
    if(hour>=06 && hour<19){
        bg = "Sprites/bg.jpg"
    }
    else{
        bg = "Sprites/bg1.jpg";
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}