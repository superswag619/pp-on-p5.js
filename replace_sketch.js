function setup() {
  createCanvas(600, 600);
  background(220);
  
  //how many to start with
  desiredPP = 20;
  
  //draw the pp
  for (let i = 0; i < desiredPP; i++) {   
    erectness = random(50, 150);
    drawPP();
  }
}

function draw() {
  
  fr = 10; // <== framerate
  //uncomment underneath for infinite
  // setInterval(drawPP());
  frameRate(fr);
}
