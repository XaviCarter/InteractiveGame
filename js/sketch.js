function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(220);
    

}

var widthRect = 100;
var heightRect = 100;

function draw() {
    


}

function mousePressed() {
    if(mouseButton == LEFT){
      fill(255, 255, 255);
      rectMode(CENTER)
      rect(mouseX, mouseY, widthRect, heightRect); 
 
    }

    if(mouseButton == RIGHT){
        fill(255,255,255);
        ellipseMode(CENTER)
        ellipse(mouseX, mouseY, widthRect, heightRect);
    
    }
    

   


}

function keyPressed() {
    if(keyCode == ENTER){
        background(220); 
    }

    if(keyCode == UP_ARROW){
        fill(random(0,255), random(0,255), random(0,255))
        rect(mouseX, mouseY, widthRect+50, heightRect)
    }

    if(keyCode == DOWN_ARROW){
        fill('#24FFFF')
        triangle(mouseX, mouseY, mouseX+100, mouseY, mouseX+100, mouseY-100)
    }  

    if(keyCode == LEFT_ARROW){
        fill('#2424FF')
        rect(mouseX, mouseY, 100, 150)
        
    }
}