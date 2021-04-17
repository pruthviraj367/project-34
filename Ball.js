class Ball{
    constructor(x, y, width, height, angle) {
        var options = {
           
            'frictionAir':0.01,
            'density':0.6,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Superhero-01.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       //ellipse( 0, 0, this.width, this.height);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width*3, this.height*3);
        pop();
      }
}