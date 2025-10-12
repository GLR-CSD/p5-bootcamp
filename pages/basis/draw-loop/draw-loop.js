// Met deze 3 variabelen kun je de afmetingen en achtergrondkleur van het canvas aanpassen
const canvasWidth = 600
const canvasHeight = 400

let kleurWaarde = 128   // De rode kleur waarde
let modfier = 4         // Hoe hoger dit cijfer, hoe sneller de kleur veranderd

// De setup functie wordt één keer aangeroepen door P5 zodra de pagina geladen is
function setup() {
    // https://p5js.org/reference/p5/createCanvas/ 
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background(kleurWaarde, 0, 0);
}

// De draw functie wordt ieder frame aangeroepen door P5
function draw() {
    // Verander de rood waarde met de modifier (met 1 omhoog of 1 omlaag)
    kleurWaarde = kleurWaarde + modfier

    // Als de rode waarde groter is dan 255, zet deze dan terug naar 0
    if (kleurWaarde > 255) {
        modfier = -4
    }
    if (kleurWaarde < 0) {
        modfier = 4
    }

    // Stel de achtergrondkleur in met de nieuwe RGB waarden
    // red, green, blue
    background(kleurWaarde, 0, 0);
    // Verander de background functie hierboven eens naar background(0,0,kleuwWaarde) om te zien wat er gebeurt
}
