// Met deze 3 variabelen kun je de afmetingen en achtergrondkleur van het canvas aanpassen
const canvasWidth = 640
const canvasHeight = 480
const backgroundColor = "white"
const kleurPalet = ["red", "orange", "yellow", "green", "blue", "purple"]
const lijnen = []
let tekenLijn = false
let geselecteerdeKleur = "red"


function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background(backgroundColor);
}


function draw() {
    // Teken eerst de achtergrond
    background(backgroundColor);
    


    // Teken daarna alle lijnen
    lijnen.forEach(lijn => {
        noFill();
        beginShape();
        lijn.forEach(punt => {
            stroke(punt.kleur);
            strokeWeight(4);
            vertex(punt.x, punt.y);
        })
        endShape();
    })


        
    // Teken tot slot het kleurpalet. Eerst de achtergrond, daarna de zijlijn en dan de kleurcirkels
    noStroke()
    rectMode(CORNER);
    // Teken achtergrond
    fill("white")
    rect(0, 0, 100, canvasHeight);
    // Lijntje aan de rechterkant
    strokeWeight(1)
    stroke("#ccc")
    line(100, 0, 100, canvasHeight)
    noStroke()

    // Teken de kleuren die je kunt selecteren
    for (i=0; i<kleurPalet.length; i++) {
        const kleur = kleurPalet[i]

        if (kleur === geselecteerdeKleur) {
            stroke("black")
            strokeWeight(2)
        } else {
            noStroke()
        }

        fill(kleur)
        circle(50, 50 + i*50, 32) // Let op! Deze afmetingen moeten overeenkomen met de checks in de mousePressed functie
    }
}


function mousePressed() {
    // Check of er op een kleur is geklikt
    for (i=0; i<kleurPalet.length; i++) {
        const inCircle = puntInCirkel(mouseX, mouseY, 50, 50 + i*50, 32) // // Let op! Deze afmetingen moeten overeenkomen met de checks in de mousePressed functie
        if (inCircle) {
            geselecteerdeKleur = kleurPalet[i]
            return; // Stop met de functie uitvoeren als er een kleur is geselecteerd
        }
    }

    if (mouseX > 100) {
        tekenLijn = true
        lijnen.push([]) // Voeg een nieuwe lege lijn toe aan de lijnen array
    }
}


function mouseReleased() {
    // Zorg ervoor dat er niet meer getekend kan worden als de muisknop is losgelaten
    tekenLijn = false
}

function mouseDragged() {
    // Als er getekend mag worden, voeg dan steeds een nieuw punt toe aan de laatste lijn in de lijnen array
    if (tekenLijn) {
        const laatsteLijn = lijnen[lijnen.length - 1]
        laatsteLijn.push({
            kleur: geselecteerdeKleur,
            x: mouseX,
            y: mouseY,
        })
    }
}

// Helper functie om te checken of een punt binnen een cirkel ligt
function puntInCirkel(x, y, cx, cy, r) {
    const dx = x - cx;
    const dy = y - cy;
    return (dx * dx + dy * dy) <= (r * r);
}
