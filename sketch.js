
var myengine, myworld, myobj;
var mycircle;
var box1, box2
var ground
function setup() {
  createCanvas(400, 400);

  //engine
  myengine = Matter.Engine.create();
  //world
  myworld = myengine.world;
  box1 = new Box(100, 200, 50, 50)
  box2 = new Box(120, 100, 50, 100)
  ground = new Ground()
}

function draw() {
  background("black");


  Matter.Engine.update(myengine)

ground.display()
  box1.display()
  box2.display()
}

//rect(x,y,w,h)
//rectMode(CENTER)
//physics engine
