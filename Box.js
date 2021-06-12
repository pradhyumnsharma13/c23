class Box {
    //1. 10,20,50,50
    //2. 300,20,100,10 - 
    //properties

    // Pass parameters inside the class
    constructor(x, y, w, h) {
        //x,y,w,h,options(restituition/isStatic)
        //this is the keyword
        var op = {
            'restitution':0.8,
        'friction':0.3,
        'density':1.0
        }
        this.width = w;
        this.height = h
        this.body = Matter.Bodies.rectangle(x, y, w, h, op);
        Matter.World.add(myworld, this.body);

    }
    //functions

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop();
    }

}

//1. create an object of the class => var box1 = new Box();
//2. display it = > box1.display();