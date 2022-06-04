const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 10;

const backGroundLayer1 = new Image();
backGroundLayer1.src = "Img/layer-1.png";
const backGroundLayer2 = new Image();
backGroundLayer2.src = "Img/layer-2.png";
const backGroundLayer3 = new Image();
backGroundLayer3.src = "Img/layer-3.png";
const backGroundLayer4 = new Image();
backGroundLayer4.src = "Img/layer-4.png";
const backGroundLayer5 = new Image();
backGroundLayer5.src = "Img/layer-5.png";

/* 
Image size width 2400px
Canvas Width 800px


Draw Image         x                x2

 -2400             0               2400
---|---------------|----------------|----------
                 image1           image2

 if we use after x<-2400 ==> x =2400
But Here a gap between two image 

so, x new postion will be x=2400+x2-gameSpeed
and x2 new postion will be x2 = 2400+x-gameSpeed
e.g: x2=0 and x=-2400 and gameSpeed = 5
 x new position is x = 2400+0-5 = 2395

 upadte mathod using this condition{
    if (x < -2400) x = 2400 + x2 - gameSpeed;
    else x -= gameSpeed;
    if (x2 < -2400) x2 = 2400 + x - gameSpeed;
    else x2 -= gameSpeed;
 
    this.width=2400
    this.x=0
    this.x2=this.width=2400
    so, this.x2 don't need
    finally drawImageI(this.image,this.x+this.width,this.y,this.width,this.height)
    this.speed is gamespeed
    so, this.speed = gamespeed*this.speedModifier
    Finally the code looks like this

     if (this.x < -this.width){
            this.x = 0
    }
refactor,
 Draw Image       this.x       this.x+this.width

 -2400             0               2400
---|---------------|----------------|----------
                 image1           image2


*/

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x < -this.width) {
            this.x = 0
        }

        this.x = Math.floor(this.x - this.speed);//x=x-gamespeed floor for int number


    }
    draw() {
        context.drawImage(this.image,this.x,this.y,this.width,this.height);
        context.drawImage(this.image, this.x+this.width,this.y,this.width,this.height);


    }
}
const layer1 = new Layer( backGroundLayer1,0.2)
const layer2 = new Layer( backGroundLayer2,0.4)
const layer3 = new Layer( backGroundLayer3,0.6)
const layer4 = new Layer( backGroundLayer4,0.8)
const layer5 = new Layer( backGroundLayer5,1)
// create a game objectn array
const gameObject =[layer1,layer2,layer3,layer4,layer5];



function animate() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObject.forEach(object=>{
        object.update();
        object.draw();
    })
    requestAnimationFrame(animate);
}
animate();
