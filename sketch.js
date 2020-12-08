
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  rectMode(CENTER);
  createCanvas(1350, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    this.paper = new Paper(50,200); 
    this.ground = new Ground(675,450,1350,20);
    this.db1 = new dustBin(1100,430,200,20);
    this.db2 = new dustBin(990,365,20,150);
    this.db3 = new dustBin(1200,365,20,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  this.ground.display();
  this.paper.display();  
  this.db1.display();
  this.db2.display();
  this.db3.display();
  drawSprites(); 
}

function keyPressed (){

  if( keyCode === UP_ARROW ){
   Matter.Body.applyForce(this.paper.body,this.paper.body.position,{x:1200,y:-1100})
  }
  
}

// function keyPressed (){
  
// }



