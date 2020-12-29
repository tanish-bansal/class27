
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var ground,bobdiameter;
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(200,545,20);
bob2=new Bob(240,545,20);
bob3=new Bob(280,545,20);
bob4=new Bob(320,545,20);
bob5=new Bob(360,545,20);
ground=new Roof(270,300,250,30);
bobdiameter=40;
rope1=new Rope(bob1.body,ground.body,-bobdiameter*2,0)
rope2=new Rope(bob2.body,ground.body,-bobdiameter*1,0)
rope3=new Rope(bob3.body,ground.body,0,0)
rope4=new Rope(bob4.body,ground.body,bobdiameter*1,0)
rope5=new Rope(bob5.body,ground.body,bobdiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
 bob3.display();
bob4.display();
bob5.display();
ground.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
  text(mouseX+":"+mouseY,mouseX,mouseY);

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-48})

	}}
