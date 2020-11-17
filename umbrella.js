class Umbrella {
    constructor(x, y){
        var options = {
            'isStatic': true,
        }
        this.umbrella = Bodies.circle(x, y, 70, options);
        this.radius = 100;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y+70, 600, 300);
    }
}