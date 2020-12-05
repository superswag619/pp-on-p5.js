function pp(x, y, pLength, r, g, b) {
  //drawing the vile shape
  fill(r, g, b)
  ellipse(x - 25, y + pLength - 50, 50);
  rect(x - 50, y - 50, 50, pLength);
  ellipse(x - 50, y - 50, 50, 50);
  ellipse(x, y - 50, 50, 50);
  line(x - 25, y + pLength - 50, x - 25, y + pLength - 25)
}

function drawPP() {
  //placement randomization
  let x = random(50, width);
  let y = random(50, height - 50);
  //color randomization
  let red = random(0, 255);
  let green = random(0, 255);
  let blue = random(0, 255);
  //pp function
  pp(x, y, erectness, red, green, blue);
}
