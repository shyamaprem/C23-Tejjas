class Box {
    constructor(x, y, width, height){

        var options = {
            restitution: 1.0,
            friction : 0.3,
            density : 0.1  
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display(){
        fill("white");
        stroke("green");
        strokeWeight(3);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }


};