class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.04,
        friction:0.001,
        
      
    }
    this.visibility=255
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<2){
      var angle=this.body.angle
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
      rotate(angle)
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world,this.body)
      push();
      this.visibility=this.visibility-1
      tint(255,this.Visiblity);
      pop();
    }
    
  }
};
