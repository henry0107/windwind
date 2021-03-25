// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover(width / 2, 30, 5);
  createP('Click mouse to apply wind force.');
}
function myFunction() {
  var p,v,a,x, y, m;
  y = document.getElementById("mynumbery").value;
  document.getElementById("demo").innerHTML = y;
  x = document.getElementById("mynumberx").value;
  document.getElementById("demo1").innerHTML = x;
  m = document.getElementById("mynumberm").value;
  document.getElementById("demo2").innerHTML = m;
  p = document.getElementById("mynumberposition").value;
  document.getElementById("demo3").innerHTML = p;
  v = document.getElementById("mynumbervelocity").value;
  document.getElementById("demo4").innerHTML = v;
  a = document.getElementById("mynumberacceleration").value;
  document.getElementById("demo5").innerHTML =a;
   y = parseFloat(y);
   x = parseFloat(x);
   m = parseFloat(m);
   p = parseFloat(p);
   v = parseFloat(v);
   a = parseFloat(a);
}
function draw() {
  background(51);

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }
  if (mover.contactEdge()) {
    let c = 0.1;
    let friction = mover.velocity.copy();
    friction.mult(-1);
    friction.setMag(c);
    mover.applyForce(friction);
  }

  mover.bounceEdges();
  mover.update();
  mover.display();

}
