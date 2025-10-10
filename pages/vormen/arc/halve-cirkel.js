const canvasWidth = 640
const canvasHeight = 480

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
   
    // Arc's worder standaard in radians getekend, maar we willen graag in graden werken (0-360)
    angleMode(DEGREES)

    // Teken twee halve cirkels in het midden van het scherm om een ovaal te vormen
    fill("yellowgreen")
    // x, y, width, height, start, stop
    arc(canvasWidth/2, canvasHeight/2, canvasWidth, canvasHeight/2, 180, 0)
    arc(canvasWidth/2, canvasHeight/2, canvasWidth, canvasHeight/2, 0, 180)

    // Teken een blauwe halve cirkel in het midden van het scherm, waarbij het vlakke gedeelte onder is
    fill("azure")
    arc(canvasWidth/2, canvasHeight/2, 320, 320, 180, 0)
}
