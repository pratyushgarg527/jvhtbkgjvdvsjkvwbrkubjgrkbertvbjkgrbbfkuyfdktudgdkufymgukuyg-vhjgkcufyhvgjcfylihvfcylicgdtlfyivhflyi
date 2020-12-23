var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var aSprite,bSprite,cSprite
var aBody,bBody,cBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	aSprite=createSprite(400,610,200,20)
	bSprite=createSprite(400,615,20,100)
	cSprite=createSprite(600,615,20,100)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

	a = Bodies.rectangle(400,650,200,20,{restitution:0.5, isStatic:true})
	World.add(world,a);

	b = Bodies.rectangle(290,610,20,100,{restitution:0.5, isStatic:true})
	World.add(world,b);

	c = Bodies.rectangle(490,610,20,100,{restitution:0.5, isStatic:true})
	World.add(world,c);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y=packageBody.position.y 

  aSprite.x= a.position.x 
  aSprite.y=a.position.y 

  aSprite.shapeColor ="red" 

  bSprite.x= b.position.x 
  bSprite.y=b.position.y 

  bSprite.shapeColor ="red" 

  cSprite.x= c.position.x 
  cSprite.y= c.position.y 

  cSprite.shapeColor ="red" 

  keyPressed(); 

  drawSprites();
 
}

function keyPressed() {
 if (keyDown("down")) {

	Matter.Body.setStatic( packageBody, false);
	
	
    
  }
}



