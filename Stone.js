class stone{
    constructor(x,y,r){
        var options = {
            density:1.2,
            //isStatic:true
        }
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.r=r;
this.S=loadImage("stone.png")
    }
    display(){
        push ();
        fill ("blue")
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        //imageMode (CENTER)
        //image (this.S,0,0,this.r*2,this.r*2)
        ellipseMode(CENTER)
        ellipse(0,0,this.r*2,this.r*2)
        pop ();
        
        
        
    }
}