class Ground {

    constructor() {
        var myoptions = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(200, 380, 400, 100, myoptions);
        Matter.World.add(myworld, this.body);





    }

    display() {
        var pos = this.body.position
        fill("gray")
        rectMode(CENTER)
        rect(pos.x, pos.y, 400, 100)


    }


}