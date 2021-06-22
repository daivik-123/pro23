const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1,base2;


function preload{
base1Img = loadImage("./assets/base1.png");
base2Img = loadImage("./assets/base2.png");  
}

function setup() {
  canvas = createCanvas(800,700);
  base1 = new Base(300,400,50,50);
  base2 = new Base(600,400,50,50);
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   base1.display();
   base2.display();

   //display Player and computerplayer


}
