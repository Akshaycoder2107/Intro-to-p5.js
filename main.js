function preload() {
    
}

function setup() {
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}

function draw() {
image(video,179,151,301,201);
fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);
circle(50,399,80);
circle(559,50,80);
circle(559,399,80);
fill(0,0,255);
stroke(0,0,255);
rect(89,29,439,50);
rect(30,84,50,280);
rect(89,380,439,50);
rect(539,84,50,280);

}
function take_snapshot(){
    save("filter_image.png");
}
