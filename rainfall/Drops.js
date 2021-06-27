class Drops{
    constructor(x,y){
         var options={
            friction=0.1,
            restitution=0.001
        }
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
update(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}
  showDrop(){
    fill();
    ellipseMode(CENTER)  
    ellipse(this.rain.position.x,this.rain.position.y,this.r,this.r)
  }  
    
}