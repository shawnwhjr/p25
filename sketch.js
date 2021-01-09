
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
db=loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground = new Ground (400,690,800,10);
	//Create the Bodies Here.
	box1 = new Ground (620,625,20,125);
	box2 = new Ground (770,625,20,125);
	box3 = new Ground (700,675,150,20);
	papper = new Papper (100,600,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display()

  box1.display()
  box2.display()
  box3.display()

  papper.display()
image(db,600,560,200,120)
  drawSprites();
 
}
function keyPressed() {
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(papper.body,papper.body.position,{x:60,y:-50});
	  }
}