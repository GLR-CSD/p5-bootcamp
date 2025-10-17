// Met deze 3 variabelen kun je de afmetingen en achtergrondkleur van het canvas aanpassen
const canvasWidth = 600
const canvasHeight = 400
const blokBreedte = canvasWidth / 4;
const blokHoogte = canvasWidth / 4;
const vierkant = {
    fill: "white",
    stroke: "black",
    x: canvasWidth/2,
    y: canvasWidth/2,
    size: 50,
    active: false
}
let backgroundColor = "white"

// De setup functie wordt één keer aangeroepen door P5 zodra de pagina geladen is
// https://p5js.org/reference/p5/setup/
function setup() {
    // Met de createCanvas functie creëren we het P5 canvas. 
    // De .parent methode die daarop volgt, koppelt het canvas het #p5-container HTML element.
    // https://p5js.org/reference/p5/createCanvas/ 
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background(backgroundColor);
}

function draw() {
    // Teken eerst de achtergrond
    background(backgroundColor);
    
    // Teken daarna de blokken onderaan
    noStroke()
    rectMode(CORNER);
    fill("red")
    rect(0, canvasHeight - blokHoogte/2, blokBreedte, blokHoogte);
    fill("green")
    rect(blokBreedte, canvasHeight - blokHoogte/2, blokBreedte, blokHoogte);
    fill("blue")
    rect(2 * blokBreedte, canvasHeight - blokHoogte/2, blokBreedte, blokHoogte);
    fill("yellow")
    rect(3 * blokBreedte, canvasHeight - blokHoogte/2, blokBreedte, blokHoogte);


    // En tot slot het vierkant zelf
    strokeWeight(2);
    stroke(vierkant.stroke);
    fill(vierkant.fill);
    rectMode(CENTER);
    square(vierkant.x, vierkant.y, vierkant.size);

}

function mousePressed() {
    // Check of de muis binnen het vierkant is
    if ((mouseX > vierkant.x - vierkant.size/2 && mouseX < vierkant.x + vierkant.size/2) &&
        (mouseY > vierkant.y - vierkant.size/2 && mouseY < vierkant.y + vierkant.size/2)) {
        vierkant.active = true
    }
}

function mouseReleased() {
    vierkant.active = false

}

function mouseDragged() {
    if (vierkant.active) {
        vierkant.x = mouseX
        vierkant.y = mouseY

        if (vierkant.y > canvasHeight - blokHoogte/2) {
            if (vierkant.x < blokBreedte) {
                backgroundColor = "red"
            } else if (vierkant.x < 2 * blokBreedte) {
                backgroundColor = "green"
            } else if (vierkant.x < 3 * blokBreedte) {
                backgroundColor = "blue"
            } else {
                backgroundColor = "yellow"
            }
        } else {
            backgroundColor = "white"
        }
    }
}