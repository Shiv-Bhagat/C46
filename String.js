class strg{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.004,
            length : 10

        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain);

    }
    fly(){
        this.chain.bodyA= null;
    }
    attach(s1){
        this.chain.bodyA = s1;

    }
    display(){
        if (this.chain.bodyA){
        var bodyA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        }
    }
}