const canvasWidth = 600
const canvasHeight = 400
const circleDiameter = 100
const backgroundColor = "white"

// De setup functie wordt één keer aangeroepen door P5 zodra de pagina geladen is
// https://p5js.org/reference/p5/setup/
function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background(backgroundColor);

    fill("red")
    circle(canvasWidth/5 + circleDiameter/2, canvasHeight/2, circleDiameter)
    
    fill("orange")
    circle(canvasWidth/2, canvasHeight/2, circleDiameter)

    fill("green")
    circle(canvasWidth/5 * 4 - circleDiameter/2, canvasHeight/2, circleDiameter)
}
