const Engine=Matter.Engine
const World =Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var world,engine
var ground,stand1,stand2,box1,box2,box3,box4,box5,box6,box7,box8,box9,
box10,box11,box12,box13,box14,box15,box16,box17,box18
var stone,stoneImg
var rope

function preload(){
stoneImg=loadImage('polygon.png')
}

function setup(){
 var canvas = createCanvas(1365,625);
 engine = Engine.create();
 world = engine.world;
 Engine.run(engine)
 ground=new Ground(1367,627,10000,20)
 stand1=new Stand(1028,280,300,20)
 stand2=new Stand(690,500,300,20)
 //level1
 
 box1=new Box(610,480,40,40)
 box2=new Box(630,480,40,40)
 box3=new Box(670,480,40,40)
 box4=new Box(710,480,40,40)
 box5=new Box(750,480,40,40)
 box6=new Box(633,460,40,40)
 box7=new Box(670,460,40,40)
 box8=new Box(710,460,40,40)
 box9=new Box(670,440,40,40)
 box10=new Box(990,250,40,40)
 box11=new Box(1010,250,40,40)
 box12=new Box(1030,250,40,40)
 box13=new Box(1050,250,40,40)
 box14=new Box(1070,250,40,40)
 box15=new Box(1010,230,40,40)
 box16=new Box(1030,230,40,40)
 box17=new Box(1050,230,40,40)
 box18=new Box(1030,210,40,40)

 stone= Bodies.circle(50,50,20)
 World.add(world,stone)
 
rope= new Slingshot(this.stone,{x:250,y:410})
}

function draw (){
background('black')
ground.display();
stand1.display();
stand2.display();
fill('blue');
box1.display();
box6.display();
box7.display();
box8.display();
box5.display();
fill('yellow');
box2.display();
box3.display();
box4.display();
fill('blue');
box9.display();

box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
rope.display();
fill('yellow')
textSize(25)
text('drag hexagonal blocks and release it to launch it towards the blocks',100,250)
imageMode(CENTER)
image(stoneImg,stone.position.x,stone.position.y,40,40)

}

function mouseDragged(){
    Matter.Body.setPosition(this.stone,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    rope.fly()
}