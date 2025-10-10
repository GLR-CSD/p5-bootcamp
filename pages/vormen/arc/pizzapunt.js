const canvasWidth = 360
const canvasHeight = 360

// Voor een uitleg over de arc functie, zie: https://p5js.org/reference/p5/arc

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
   
    // Arc's worder standaard in radians getekend, maar we willen graag in graden werken want dat is makkelijker (0-360)
    angleMode(DEGREES)

    const x = canvasWidth/2
    const y = canvasHeight/2
    const diameter = 300
    const sliceSize = 45
    const startDegree = -80
    // teken de achterkant (bodem) van de pizza
    fill("sandybrown")
    // x, y, width, height, start, stop
    arc(x, y, diameter + 30, diameter + 30, startDegree, startDegree + sliceSize, PIE)
    
    fill("tomato")
    // x, y, width, height, start, stop, [mode]) (zie de documentatie voor uitleg over mode, PIE betekend dat er een lijn om de arc wordt getekend)
    arc(x, y, diameter, diameter, startDegree, startDegree + sliceSize, PIE)
}
