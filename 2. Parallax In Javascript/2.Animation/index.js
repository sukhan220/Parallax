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
let x =0;

function animate(){
    context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    context.drawImage(backGroundLayer4,x,0);
    x-=gameSpeed;
    requestAnimationFrame(animate);
}
animate();
