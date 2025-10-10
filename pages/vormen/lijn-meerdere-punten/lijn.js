const canvasWidth = 640
const canvasHeight = 480

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
   
    stroke("blue")
    // Teken een blauwe lijn in het midden van het scherm met de line functie
    // x1, y1, x2, y2
    line(0, canvasHeight/2 - 10, canvasWidth, canvasHeight / 2 - 10)
    
    
    stroke("red")
    // Teken onder de blauwe, een rode lijn als custom shape
    beginShape();
    vertex(0, canvasHeight/2 + 10);
    vertex(canvasWidth, canvasHeight/2 + 10);
    endShape(CLOSE);
    
    stroke("green")
    strokeWeight(4)
    // Om een lijn met meerdere punten te tekenen, moet je eerst beginShape() uitvoeren
    // Daarna gabruik je de vertex() functie om de punten van de lijn te bepalen
    // En sluit je de lijn weer af met endShape()
    beginShape();
    vertex(0, 100);
    vertex(10, 20);
    vertex(150, 150);
    vertex(20, 50);
    endShape(CLOSE);
}