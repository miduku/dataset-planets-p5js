// for filling whole document
var w = window,
    wX = w.innerWidth,
    wY = w.innerHeight;

// colors
var h = 360,
    s = 0,
    b = 90,
    a = 100;

var bodies;

/*
* preload
*/
function preload() {
  bodies = loadJSON('assets/json/planets.json');
}

/*
* only executed once
*/
function setup(){
  var planets, 
        name = [],    // planet names
        moons = [];   // moon names
  // change color mode to hsl
  colorMode(HSB, 360, 100, 100, 100);
  var bgrColor = color(h, s, b, a);

  var c = createCanvas(wX, wY);
      c.parent("container");

  // rectangle/background
  background(bgrColor);

  // main key
  planets = bodies.planets;

  for (var key in planets) {
    name.push(planets[key].name);
    moons.push(planets[key].moons);
  }

  console.log(planets);
}


/*
* this will be executed all the time
*/
function draw(){
}
