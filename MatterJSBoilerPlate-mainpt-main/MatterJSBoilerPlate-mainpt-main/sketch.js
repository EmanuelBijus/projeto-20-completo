
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500,380);
    engine = Engine.create();
	world = engine.world;

	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	} 
	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.01
	}
	var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	var plane_options = {
		isStatic : true
	}

	//Crie os Corpos Aqui.
	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(101,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3);

	plane = Bodies.rectangle(200,390,400,20,plane_options);
	World.add(world,plane);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1);
  Engine.update(engine);

  ellipse(block1.position.x,block1.position.y,20);
  rect(block2.position.x,block2.position.y,20);
  rect(block3.position.x,block3.position.y,20);
  drawSprites();
}



