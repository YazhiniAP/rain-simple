const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops=[]
function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
   
 //drop=new Drop(ran);
}

function draw() {
  background(0);  
  Engine.update(engine);
  var i=0;
  if(frameCount%100===0){
rain();
  }
 // drawSprites();*/
 for(i=0;i<drops.length;i++)
{
  circle(this.drops[i].body.position.x,this.drops[i].body.position.y,10,10)
}
}

function rain(){
  var x=0;
  for (var i = 0; i <= width / 30; i++) {
     drop = new Drop(x);
    
    drops.push(drop);
    console.log(drops)
    x += 30;
  }
}