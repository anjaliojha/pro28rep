class Stone{
 constructor(x,y,r){

    var option={
        isStatic:false,
        restituition:0,
        friction:1,
        density:1.2
        
    }
     this.x=x;
     this.y=y;
     this.r=r; 
     this.image=loadImage("stone.png");  
      this.body = Bodies.circle(this.x, this.y, this.r/2, option);
      World.add(world, this.body);

 }

 display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    image(this.image, 0, 0,this.r*2,this.r*2);
    pop();
  }



}