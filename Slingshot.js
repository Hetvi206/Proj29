
    class Launcher { constructor(bodyA, pointB) {
      var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.2,
            length: 10
        }
         this.pointB = pointB;
        this.Launch = Constraint.create(options);
        World.add(world, this.chain); }
 /*fly() {
        this.Lauch.bodyA = null;
    }*/
    display() {
 if(this.Launch.bodyA) {
 var pointA = this.Launch.bodyA.position;
 var pointB = this.pointB;
strokeWeight(3);
line(pointA.x, pointA.y, pointB.x, pointB.y);
 pop();
 }
 }
}
