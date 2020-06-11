var cvs = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var cat = new Image();
var floor = new Image();
var cucumUp = new Image();
var cucumDown = new Image();
var background = new Image();


cat.src = "Pictures/smudge.png";
floor.src = "Pictures/flr.png";
cucumUp.src = "Pictures/cuUp.png";
cucumDown.src = "Pictures/cDown.png";
background.src = "Pictures/bg.PNG";


var gap = 90;
var constant = cucumUp.height+gap;

var cX = 10;
var cY = 150;


var gravity = 1.5;

function moveUp() {
  cY -= 30;
}

document.addEventListener("keydown",moveUp);

var cucumbers = [];

cucumbers[0] = {
  x : cvs.width,
  y : 0
};


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
