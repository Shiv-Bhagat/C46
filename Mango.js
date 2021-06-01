class mango{
    constructor(x,y,r){
        this.body=Bodies.circle(x,y,r,{isStatic:true})
        World.add(world,this.body)
        this.r=r;
this.M=loadImage("mango.png")
    }
    display(){
        push ();
        fill("yellow")
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        //imageMode (CENTER)
        //image (this.M,0,0,this.r*2,this.r*2)
        ellipseMode(CENTER)
        ellipse(0,0,this.r*2,this.r*2)
        pop ();
        
        
        
    }
}