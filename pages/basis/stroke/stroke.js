const canvasWidth = 600
const canvasHeight = 400
const circleDiameter = 100
const backgroundColor = "white"

// De setup functie wordt één keer aangeroepen door P5 zodra de pagina geladen is
// https://p5js.org/reference/p5/setup/
function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background(backgroundColor);

    stroke("rebeccapurple");
    fill("white")
    circle(canvasWidth/5 + circleDiameter/2, canvasHeight/2, circleDiameter)
    
    fill("purple")
    noStroke();
    circle(canvasWidth/2, canvasHeight/2, circleDiameter)

    fill("white")
    stroke("rebeccapurple");
    strokeWeight(8);
    circle(canvasWidth/5 * 4 - circleDiameter/2, canvasHeight/2, circleDiameter)
}
