var inc = 0.1;
var zoomIn = true;

function setup() {

  createCanvas(windowWidth/2, windowHeight/2);

}

function windowResized() {
    resizeCanvas(windowWidth/2, windowHeight/2);
}
function draw() {

  var yOff = 0;
  loadPixels();
  for (var y = 0; y < height; y++) {
    var xOff = 0;
    for (var x = 0; x < width; x++) {

      var index = (x + y * width) * 4;
      var r = noise(xOff, yOff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xOff += inc;
    }
    yOff += inc;
  }

  updatePixels();

  if (zoomIn) {
    inc = inc + 0.01;
    if (inc > 0.5) {
      zoomIn = !zoomIn;
    }
  } else {
    inc = inc - 0.01;
    if (inc < .05) {
      zoomIn = !zoomIn;
    }
  }
}