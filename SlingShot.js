class Chain {
    constructor (body1, pointB){
        var options={
            bodyA:body1,
            pointB:pointB,
            length:20,
            stiffness:0.02
        }
        this.chain=Constraint.create(options);
        World.add(world, this.chain);
        this.pointB=pointB

    }
    display(){
        if (this.chain.bodyA){

        
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.chain.bodyA=null;
    }
}
