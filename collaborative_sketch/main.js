// Initialize Firebase
var config = {
    apiKey: "AIzaSyBaV1MZiYi3qj5UhFRYC4y7OUjeJsiFmMU",
    authDomain: "collaborative-sketch-2deb0.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-2deb0.firebaseio.com",
    projectId: "collaborative-sketch-2deb0",
    storageBucket: "",
    messagingSenderId: "387149412315"
};
firebase.initializeApp(config);
var pointsData = firebase.database().ref();

function setup() {
    var canvas = createCanvas(400, 400);
    background(255);
    fill(0);
    pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
  
  canvas.mousePressed(drawPoint);
  canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
    background(255);
    
    for (var i = 0; i < points.length; i++) {
      var point = points[i];
      ellipse(point.x, point.y, 5,5);
      
  }
} 

function drawPoint() {
  pointsData.push({x: mouseX, y: mouseY});
}

function drawPointIfMousePressed() {
  if (mouseIsPressed) {
    drawPoint();
  }
}





