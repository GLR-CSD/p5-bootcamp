const canvasWidth = 640
const canvasHeight = 480

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
   
    stroke("blue")
    // Teken een blauwe lijn van linksboven naar rechtsonder
    // x1, y1, x2, y2
    line(0, 0, canvasWidth, canvasHeight)
    
    // Teken een rode lijn van rechtsboven naar linksonder
    stroke("red")
    // x1, y1, x2, y2
    line(canvasWidth, 0, 0, canvasHeight)

    // Teken een groene lijn van links naar rechts
    stroke("green")
    const x1 = 0
    const y1 = canvasHeight/2
    const x2 = canvasWidth
    const y2 = canvasHeight/2
    line(x1, y1, x2, y2)
}
