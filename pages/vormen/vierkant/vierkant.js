const canvasWidth = 640
const canvasHeight = 480

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
   
    // Teken een grijs vierkant in het midden van het scherm
    fill("darkgray")
    // x positie, y positie, grootte
    // x positie = helft van de canvas breedte - de helft van de grootte van het vierkant (640/2 - 320/2) => (320 - 160) => 160
    // y positie = helft van de canvas hoogte - de helft van de grootte van het vierkant (480/2 - 320/2) => (240 - 160) => 80
    // grootte = 320
    square(160, 80, 320)

    // Teken een donkerder grijs vierkant in het midden van het scherm (met afgeronde hoekjes)
    // Zelfde formule, maar nu met variabelen geschreven
    fill("gray")
    const size = 294
    const radius = 10
    square(canvasWidth/2 - size/2, canvasHeight/2 - size/2, size, radius)

    // Teken een rode cirkel door een vierkant te tekenen met sterk afgeronde hoeken
    fill("red")
    const redSize = 8
    const redRadius = 8
    square(canvasWidth/2 + 148, canvasHeight/2 +148, redSize, redRadius)
}
