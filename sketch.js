const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var trash
var bin,bin2,bin3
var ground,groundSprite

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

trash = new Trash(200,637,10);
bin = new Bin(700,657,2,100);
//bin2 = new Bin(700,320,20,100);
//bin3 = new Bin(700,320,20,100);
ground= new Ground(width/2,670,width,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bin.display();
  //bin2.display();
  //bin3.display();
  ground.display();
  trash.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
  }
}