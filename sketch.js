const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function setup() {
  createCanvas(1200,550);
  engine = Engine.create();
  world = engine.world;

  //create ground and base;
  ground = new Ground(600,500,1200,20);
  base1  = new Ground(700,300,270,20);
  base2  = new Ground(1000,200,210,20);

  //create blocks
  block1 = new Box1(700,280,30,40);
  block2 = new Box1(730,280,30,40);
  block3 = new Box1(760,280,30,40);
  block4 = new Box1(670,280,30,40);
  block5 = new Box1(640,280,30,40);
  block6 = new Box1(610,280,30,40);
  block7 = new Box1(780,280,30,40);

  block8 = new Box3(700,240,30,40);
  block9 = new Box3(730,240,30,40);
  block10 = new Box3(760,240,30,40);
  block11 = new Box3(670,240,30,40);
  block12 = new Box3(640,240,30,40);

  block13 = new Box2(730,200,30,40);
  block14 = new Box2(700,200,30,40);
  block15 = new Box2(670,200,30,40);

  block16 = new Box4(700,160,30,40);

  block17 = new Box1(1000,180,30,40);
  block18 = new Box1(1030,180,30,40);
  block19 = new Box1(1060,180,30,40);
  block20 = new Box1(970,180,30,40);
  block21 = new Box1(940,180,30,40);

  block22 = new Box2(1000,140,30,40);
  block23 = new Box2(1030,140,30,40);
  block24 = new Box2(970,140,30,40);

  block25 = new Box3(1000,100,30,40);

  //hexagon
hexagon= new Hexagon(200,200,10,10);

  //launcher
//launcher=new Launcher(this.hexagon,{x:200,y:200});

}

function draw() {
  background("brown");  
  Engine.update(engine);
  ground.display();
  base1.display();
  base2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  hexagon.display();
 // launcher.display();
  drawSprites();
}