let sides;
let dataLocation = 0.01;
let framerate;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
    //Create the canvas with dimesions equal to the open window.
    createCanvas(windowWidth, windowHeight);

    //set the framerate
    frameRate(1);

    //add a slider to change the frame rate
    framerate = createSlider(1, 60, 1);
    framerate.position(width * dataLocation, height * 0.96);
    
    //Define initial parameters
    sides = 3; //Smallest Initial Polygon
}

function calculatePolygonSidelength(sides){
    
    let sidelength = (Math.tan(Math.PI/sides) * 2); //find the side length for any given polygon

    return sidelength
    
}

function approximatePi(sides){

    let sidelength = calculatePolygonSidelength(sides);
    let perimeter = sidelength * sides;
    let pi = perimeter/2;

    return pi;

}

function drawPolygon(x, y, radius, npoints){
        let angle = TWO_PI / npoints;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius;
          let sy = y + sin(a) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);
}

function draw() {
    //clear the canvas
    background(255);

    //update the framerate based on the slider
    frameRate(framerate.value());

    sides += 1; //increase the number of sides by 1

    //draw a circle overlay
    ellipse(width * 0.7, height/2, 2 * width * 0.2, 2 * width * 0.2);

    //Draw the polygon
    drawPolygon(width * 0.7, height/2, width * 0.2, sides);

    //Show pi approximation
    textSize(22);
    text("Appox Pi: " + approximatePi(sides), width * dataLocation, height * 0.8);

    //show actual pi
    textSize(22);
    text("Actual Pi: " + Math.PI, width * dataLocation , height * 0.85);

    //show the number of sides
    textSize(16);
    text("Sides: " + sides, width * dataLocation, height * 0.9);

    //show the framerate
    textSize(16);
    text("Framerate: " + frameRate().toFixed(2), width * dataLocation, height * 0.94);

    //label the site
    textSize(40);
    text("Visual PI", width * dataLocation, height * 0.07);

    //explanation of the program
    textSize(14);
    textWrap(WORD);
    text("Approximates PI by drawing a polygon with a given number of sides and dividing its perimeter by a unit diameter of two (Radius of 1). The number of sides is increased by 1 each frame. The framerate can be controlled by the slider.", width * 0.01, height * 0.1, width * 0.3);


}


