
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,box1,box2,box3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box3 = new Box(400, 570, 150, 150)
	paper = new Ball (100,100,20)
	ground = new Ground(400,680,800,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
	background(255);
	box3.display();
	paper.display();
	ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 30, y: -30 })
    }
}

