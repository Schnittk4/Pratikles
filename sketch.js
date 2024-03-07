let velocity;
let gravity;
let counterForce;
let rCounterForce;
let lCounterForce;
let theta;
let inertia;
let parties = [];
// make the counterForce direction equal  PI - 2 * theta  
function setup() {
  createCanvas(800, 800);
  for(let i = 0; i < 20; i++){
    parties[i] = new Part();
  }
  // inertia = createVector(random(-0.05, 0.05), 0);
  gravity = createVector(0, 0.2);
  counterForce = createVector(0, -0.5);
}

function draw() {
  background(225);

  for(let i = 0; i < 20; i++){
    // parties[i] = new Part();
    parties[i].display();
    parties[i].move();
  }
}


class Part{
  constructor(){
  this.location = createVector(random(width), 0);
  this.velocity = createVector(0, random(5));

  }
  move(){

    this.location.add(this.velocity);
    this.velocity.add(gravity);
    if(this.location.y > height/2){
      // this.location.add(velocity);
      this.velocity.add(counterForce);
      
      // this.counterForce = rotate(PI - 2 * theta);   
    }
  }
  display(){
    fill(0);
    ellipse(this.location.x, this.location.y, 5, 5);
  }
}
