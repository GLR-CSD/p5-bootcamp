const canvasWidth = 320
const canvasHeight = 320
let kleurWaarde = 128

function setup() {

    // Deze functie zet de kleurmodus op HSL
    // Dit betekend dat we de kleuren definiëren met de waarden hue, saturation en lightness
    // Hiermee kun je op een andere manier kleuren maken dan met RGB
    colorMode(HSL);
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background(kleurWaarde, 0, 0);
}


function draw() {
    kleurWaarde++

    // Als de kleurWaarde groter is dan 360, zet deze dan terug naar 0
    if (kleurWaarde > 360) {
        kleurWaarde = 0
    } 

    // Hue, Saturation, Lightness
    // Hue is een waarde tussen 0 en 360
    // Saturation en Lightness zijn waarden tussen 0 en 100
    background(kleurWaarde, 100, 50);
}
