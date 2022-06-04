const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const CANVASWIDTH = canvas.width = 800;
const CANVASHEIGHT = canvas.height =700;


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

function animate(){
    context.drawImage(backGroundLayer1,0,0);
    context.drawImage(backGroundLayer2,0,0);
    context.drawImage(backGroundLayer3,0,0);
    context.drawImage(backGroundLayer4,0,0);
    context.drawImage(backGroundLayer5,0,0);
    requestAnimationFrame(animate);
}
animate();
