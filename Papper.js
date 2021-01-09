class Papper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.4,
          density:1
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r
      

      World.add(world, this.body);
    }
    db=loadImage("papper.png");
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.r*2, this.r*2);
    }
  };
  