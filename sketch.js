const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render=Matter.Render;
var tree, treeImg, stone, stoneImg, ground;

function preload(){
  boy=loadImage("boy.png");
}


function setup() {
	createCanvas(3000, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,400,30);
	mango1 = new Mango(1300,300,30);
	mango2 = new Mango(1400,250,30);
	mango3 = new Mango(1300,200,30);
	mango4 = new Mango(1390,300,30);

	mango5= new Mango(1200,300,30);
  mango6 = new Mango(1500,280,30);

  tree = new Tree(1300,680);

  ground = new Ground(0,680,4000,20);

	chain = new Chain(stone.body,{x:165, y:520});
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  background("cyan")
  fill('red');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);

  image(boy ,130,445,200,300);

  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  
  mango5.display();
  mango6.display();

  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  //detectCollision(stone, mango5);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);

  //drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
   chain.attach(stone.body);
  }
}

function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

   distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}