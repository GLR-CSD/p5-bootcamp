const canvasWidth = 640
const canvasHeight = 480

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    
    
    // Extra variabele om de grootte van de zandloper te bepalen. Handig om de rest van de code leesbaarder te maken
    const zandloperSize = 300

    // Teken het bovenste gedeelte van de zandloper
    const glasStartX = canvasWidth/2 - zandloperSize/2
    const glasEindX = canvasWidth/2 + zandloperSize/2

    fill("azure")
    // Teken het bovenste gedeelte van de zandloper
    // x1, y1, x2, y2, x3, y3
    triangle(glasStartX, 0, glasEindX, 0, canvasWidth/2, canvasHeight/2)
    
    // Teken het onderste gedeelte van de zandloper
    triangle(glasStartX, canvasHeight, glasEindX, canvasHeight, canvasWidth/2, canvasHeight/2)

    // Teken het zand als driehoek in het onderste gedeelte
    fill("tan")
    const x1 = glasStartX + 5
    const y1 = canvasHeight
    const x2 = glasEindX - 5
    const y2 = canvasHeight
    const x3 = canvasWidth/2
    const y3 = canvasHeight/2 + 50
    triangle(x1, y1, x2, y2, x3, y3)
}
