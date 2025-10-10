const canvasWidth = 640
const canvasHeight = 480

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    
    fill("crimson")
    // Teken een rechthoek aan de bovenkant van het scherm
    // x positie, y positie, breedte, hoogte
    rect (0, 0, 640, canvasHeight / 3)
    
    fill("white")
    // Teken een rechthoek in het midden van het scherm
    // x positie, y positie, breedte, hoogte
    rect(0, canvasHeight / 3, canvasWidth, canvasHeight / 3 * 2)
    
    
    fill("midnightblue")
    // Teken een rechthoek aan de linkerkant van het scherm
    const x = 0
    const width = canvasWidth
    const y = canvasHeight / 3  * 2
    const height = canvasHeight / 3
    rect (x, y, width, height)
}
