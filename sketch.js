// for filling whole document
var w = window,
    wX = w.innerWidth,
    wY = w.innerHeight;

// colors
var h = 360,
    s = 0,
    b = 90,
    a = 100;

/*
* only executed once
*/
function setup(){
  // change color mode to hsl
  colorMode(HSB, 360, 100, 100, 100);
  var bgrColor = color(h, s, b, a);

  var c = createCanvas(wX, wY);
      c.parent("container");

  // rectangle/background
  background(bgrColor);
}


/*
* this will be executed all the time
*/
function draw(){
}
