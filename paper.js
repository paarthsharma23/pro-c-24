class Paper {
constructor(x,y){
    var options ={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
this.img = loadImage("crumple.jpg");
this.radius=70;
this.body = Bodies.circle(x,y,this.radius,options);
World.add(world,this.body);
}

display(){
push();
var pos = this.body.position ; 
translate(pos.x,pos.y);
imageMode(CENTER);
// fill("white");
image(this.img,0,0,this.radius,70);
pop();
}

};