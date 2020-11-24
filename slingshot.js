class Slingshot {

    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            bodyB: pointB,
            stiffnes: 0.1,
            length: 6
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
fly(){
    this.sling.bodyA = null
}

    display() {
        // var pointA = this.sling.bodyA.position;
        // var pointB = this.pointB;
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, pointB.x, pointB.y);
    }
}

