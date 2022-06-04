const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height =700;
let gameSpeed =5;

const backGroundLayer1 = new Image();
backGroundLayer1.src="Img/layer-1.png";
const backGroundLayer2 = new Image();
backGroundLayer2.src="Img/layer-2.png";
const backGroundLayer3 = new Image();
backGroundLayer3.src="Img/layer-3.png";
const backGroundLayer4 = new Image();
backGroundLayer4.src="Img/layer-4.png";
const backGroundLayer5 = new Image();
backGroundLayer5.src="Img/layer-5.png";
let x =0;// 1st image start from 0px 
let x2 = 2400;// 2nd image start from 2400px 

/* 
Image size width 2400px
Canvas Width 800px


Draw Image         x                x2

 -2400             0               2400
---|---------------|----------------|----------
                 image1           image2

*/


function animate(){
    context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    context.drawImage(backGroundLayer4,x,0);
    context.drawImage(backGroundLayer4,x2,0);
    if(x< -2400) x = 2400;
    else x-=gameSpeed;
    if (x2<-2400) x2 = 2400;
    else x2 -=gameSpeed;
    requestAnimationFrame(animate);
}
animate();
