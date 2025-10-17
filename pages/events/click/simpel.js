// Met deze 3 variabelen kun je de afmetingen en achtergrondkleur van het canvas aanpassen
const canvasWidth = 600
const canvasHeight = 400
const backgroundColor = "black"
const cirkelKleur = "white"
const cirkels = []

// De setup functie wordt één keer aangeroepen door P5 zodra de pagina geladen is
// https://p5js.org/reference/p5/setup/
function setup() {
    // Met de createCanvas functie creëren we het P5 canvas. 
    // De .parent methode die daarop volgt, koppelt het canvas het #p5-container HTML element.
    // https://p5js.org/reference/p5/createCanvas/ 
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background(backgroundColor);
}

function draw() {
    noStroke();
    fill(cirkelKleur);
    cirkels.forEach(cirkel => {
        circle(cirkel.x, cirkel.y, cirkel.diameter)
    })
}

function mousePressed() {
    cirkels.push({
        diameter: 32,
        x: mouseX,
        y: mouseY,
    })
}