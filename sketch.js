const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, paper;
var dustbin;
var stand1, stand2;

function setup() {
	var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
  paper = new Paper(200,200,70);
	
  stand1 = new Stand(815,325,20,130);
  stand2 = new Stand(690,325,20,130);
  stand3 = new Stand(760,380,120,20);

  dustbin = new Dustbin(750,325,120,130);

	Engine.run(engine);
}


function draw() {
  background("white");
  Engine.update(engine);

  ground.display();
  paper.display();
  
  stand1.display();
  stand2.display();
  stand3.display();

  dustbin.display();
  
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:860,y:-660});
  }
}