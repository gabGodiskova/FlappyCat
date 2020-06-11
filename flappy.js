var cvs = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//images
var cat = new Image();
var floor = new Image();
var cucumUp = new Image();
var cucumDown = new Image();
var background = new Image();

//sourcing images
cat.src = "Pictures/smudge.png";
floor.src = "Pictures/flr.png";
cucumUp.src = "Pictures/cuUp.png";
cucumDown.src = "Pictures/cuDown.png";
background.src = "Pictures/bg.PNG";

//gap between cucumbers
var gap = 95;
var constant = cucumUp.height+gap;

var cX = 10;    //cat x position
var cY = 150;   // cat y position

//gravity causing fall of cat during flight
var gravity = 1.5;

function moveUp() {
  cY -= 20;
}

document.addEventListener("keydown",moveUp);

var cucumbers = [];

cucumbers[0] = {
  x : cvs.width,
  y : 0
};

//draw images
function draw() {
  ctx.drawImage(background,0,0);

  for(var i = 0; i < cucumbers.length; i++) {
    ctx.drawImage(cucumUp,cucumbers[i].x,cucumbers[i].y);
    ctx.drawImage(cucumDown,cucumbers[i].x,cucumbers[i].y+constant);
    cucumbers[i].x--;

    if (cucumbers[i].x == 125) {
      cucumbers.push({
        x : cvs.width,
        y : Math.floor(Math.random()*cucumUp.height) - cucumUp.height
      });
    }
  }
  ctx.drawImage(floor,0,cvs.height-floor.height);
  ctx.drawImage(cat,cX,cY);
  cY+= gravity;
  requestAnimationFrame(draw);
}

draw();
