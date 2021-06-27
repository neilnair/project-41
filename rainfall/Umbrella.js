class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.r=r;
        this.image = loadImage("Walking Frame/walking_1.png")
        this.body = Bodies.circle(x,y,this.r,options)
        world.add(world,this.body)
    }
    display(){
        
        var pos = this.body.position
        imageMode(CENTER)
        noStroke()
        image(this.image,pos.x,pos.y+70,300,300)



    }
}