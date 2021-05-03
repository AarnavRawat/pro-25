class Trash {
    constructor(xInput, yInput) {
        var options = {
            isStatic: 'true'
        }
        //adding the image
        this.image = loadImage("trashImg.png");
        this.dustbinWidth = 200;
        this.dustbinHeight = 213;
        this.wallThickness = 20;
        //creating var for the trash 
        this.bottomBody = Bodies.rectangle(xInput, yInput, this.dustbinWidth, this.wallThickness,options);
        World.add(userWorld, this.bottomBody);

        this.leftWallBody = Bodies.rectangle(xInput-this.dustbinWidth/2-10, yInput-100,this.wallThickness, this.dustbinHeight,options);
        World.add(userWorld, this.leftWallBody);

        this.rightWallBody = Bodies.rectangle(xInput+this.dustbinWidth/2+8, yInput-100 , this.wallThickness, this.dustbinHeight,options);
        World.add(userWorld, this.rightWallBody);




    }
    display() {
        //Bottom Body
        var posBottom = this.bottomBody.position;
        push()
        translate(posBottom.x, posBottom.y + 10);
        rectMode(CENTER); 
        strokeWeight(4);
        angleMode(RADIANS);
        fill("0");
        imageMode(CENTER);
        //adding image to the bottom body
        image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
        
        pop()

        //Left Wall Body
        var posLeft = this.leftWallBody.position;
        push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER);
        strokeWeight(4);
        angleMode(RADIANS);
        fill(0);
        rotate(this.angle); 
        rect(0,0,this.wallThickness, this.dustbinHeight);
        pop();

        //RIGHT WALL BODY
        var rightpos = this.rightWallBody.position;
        push()
        translate(rightpos.x, rightpos.y)
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(-1 * this.angle);
        fill(0);
        rect(0,0, this.wallThickness, this.dustbinHeight);
        
        //image(this.image, 650, 515, 125, 150);
    }
}