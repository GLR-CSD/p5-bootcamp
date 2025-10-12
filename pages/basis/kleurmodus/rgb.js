const canvasWidth = 320
const canvasHeight = 320
let kleurWaardeRGB = 128
let modfierRGB = 4

function setup() {

    // Deze functie zet de kleurmodus op RGB
    // Dit betekend dat we de kleuren definiëren met de waarden rood, groen en blauw
    // De standaard modus is RGB, dus eigenlijk kan deze regel weg gelaten worden
    colorMode(RGB);
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background(kleurWaardeRGB, 0, 0);
}


function draw() {
    kleurWaardeRGB = kleurWaardeRGB + modfierRGB

    // Als de rode waarde groter is dan 255, zet deze dan terug naar 0
    if (kleurWaardeRGB > 255) {
        modfierRGB = -4
    } else if (kleurWaardeRGB < 0) {
        modfierRGB = 4
    }

    // red, green, blue
    // alle drie de waarden zijn tussen 0 en 255
    background(kleurWaardeRGB, 0, 0);
}
