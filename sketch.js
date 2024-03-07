let velocity;
let gravity;
let uCounterForce;
let rCounterForce;
let lrCounterForce;
let parties = [];
let dark = true;
// make the counterForce direction equal  PI - 2 * theta  
function setup() {
  createCanvas(800, 800);
  background(0, 0, 40);
  for(let i = 0; i < 1000; i++){
    parties[i] = new Part();
  }
  // inertia = createVector(random(-0.05, 0.05), 0);
  gravity = createVector(0, 0.2);
  lrCounterForce = createVector(0, -0.5);
  lCounterForce = createVector(0.2, 0);
  rCounterForce = createVector(-0.2, 0);
  uCounterForce = createVector(0, 0.15)

}

function draw() {
  // background(0, 0, 40);

  for(let i = 0; i < 1000; i++){
    // parties[i] = new Part();
    parties[i].display();
    parties[i].move();
  }
}


class Part{
  constructor(){
  this.location = createVector(random(width), 0);
  this.velocity = createVector(0, random(10));

  }
  move(){

    this.location.add(this.velocity);
    this.velocity.add(gravity);
    if(this.location.y > height/2){     
      this.velocity.add(lrCounterForce);       
    }
    if(this.location.y < height / 3){
      this.velocity.add(uCounterForce);
    }
    if(this.location.x < width/2){
      this.velocity.add(lCounterForce);
    }
    if(this.location.x > width/2){
      this.velocity.add(rCounterForce);
    }
  }
  display(){
    noStroke();
    if(dark){
      fill(255);
      ellipse(this.location.x, this.location.y, random(1, 3), random(1, 3));
    }else{
      fill(0, 0, 40);
      ellipse(this.location.x, this.location.y, random(1, 3), random(1, 3))
    }
  }
}

function keyPressed(){
if(keyCode === 32 && dark == true){
  dark = false;
}else{
  dark = true;
}


}