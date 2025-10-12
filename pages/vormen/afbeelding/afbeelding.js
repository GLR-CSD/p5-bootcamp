const canvasWidth = 640
const canvasHeight = 480
let achtergrond, afbeelding 

// De preload functie wordt automatisch door P5 aangeroepen voordat de setup functie wordt uitgevoerd
// Dit is de plek om dingen in te laden die je later in de setup of draw functie wilt gebruiken
// https://p5js.org/reference/#/p5/preload
function preload() {
    // Laad twee afbeeldingen in het geheugen
    achtergrond = loadImage('./../../../resources/images/snow-background.jpg');
    afbeelding = loadImage('./../../../resources/images/zen.png');
}

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    
    // Teken de achtergrond afbeelding op het canvas
    // Afbeelding, x positie, y positie
    image(achtergrond, 0, 0);
    
    // Tip! Wanneer je de afbeelding in de console logt, kun je alle eigenschappen van het afbeeldings object bekijken en zien welke eigenschappen we kunnen gebruiken.
    console.log(afbeelding);


    const afbeeldingRatio = afbeelding.width / afbeelding.height
    const afbeeldingMaxBreedte = 480
    let nieuweBreedte = canvasWidth / afbeelding.width * afbeeldingMaxBreedte
    let nieuweHoogte = nieuweBreedte / afbeeldingRatio
    const xPos = canvasWidth / 2 - nieuweBreedte / 2
    const yPos = canvasHeight / 2 - nieuweHoogte / 2

    // Teken het figuur in het midden van het canvas
    // Afbeelding, x positie, y positie, breedte, hoogte
    image(afbeelding, xPos, yPos, nieuweBreedte, nieuweHoogte);
}
