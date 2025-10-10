const canvasWidth = 600
const canvasHeight = 400
const backgroundColor = "rebeccaPurple"

function setup() {
    
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")

    // Maak de achtergrond paars
    background(backgroundColor);
    
    // Teken een witte cirkel in het midden van het canvas
    // x positie, y positie, diameter
    circle (canvasWidth/2, canvasHeight/2, 120)
    
    // Teken een oranje cirkel hierover heen
    fill("sandybrown")
    const x = canvasWidth/2
    const y = canvasHeight/2
    const diameter = 50
    circle (x, y, diameter)
}
