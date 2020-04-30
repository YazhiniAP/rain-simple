class Drop{
    constructor(x){
        this.x=x;
        this.y=random(-4000,0);
        this.body=Bodies.circle(this.x,this.y,10,10)
        World.add(world,this.body)
    }
  
}