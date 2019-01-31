<!DOCTYPE html>
<html lang="en">

<head>
  <title>Basic Mappa Tutorial</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js" type="text/javascript"></script>
  <script src="https://unpkg.com/mappa-mundi/dist/mappa.js" type="text/javascript"></script>
</head>

<body>
  <script>
let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

// Lets put all our map options in a single object
const options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}
function setup(){
  canvas = createCanvas(640,640);
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas) 

  // Add a color to our ellipse
  fill(200, 100, 100);
    // Only redraw the point when the map changes and not every frame.
  myMap.onChange(drawPoint);
}

function draw(){
}

function drawPoint(){
  clear();

  const nigeria = myMap.latLngToPixel(11.396396, 5.076543); 
  ellipse(nigeria.x, nigeria.y, 20, 20);
}
  </script>
</body>

</html>