class Trash{
    constructor(x, y,r) {
      var options = {	
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
         
      }
      
      this.x=x
      this.y=y
     
      this.r=this.r 
      this.body = Bodies.circle(x, y,r, options);
     
     
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  