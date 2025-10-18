// Met deze 3 variabelen kun je de afmetingen en achtergrondkleur van het canvas aanpassen
const canvasWidth = 640
const canvasHeight = 480
const maxSpeed = 15
const karakters = []


function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background("#fff");
}


function draw() {
    // Teken eerst de achtergrond
    background("#fff");
    
    noStroke();
    fill("black")
    karakters.forEach((karakter, index) => {
        textSize(karakter.size)
        fill(karakter.kleur)
        text(karakter.karakter, karakter.x, karakter.y)
        updateKarakterPositie(index)
    })
}


function updateKarakterPositie(karaktersIndex) {
    const karakter = karakters[karaktersIndex]
    // Als het karakter buiten het canvas is, verwijderen we deze uit de array
    if (karakter.y > canvasHeight + 100) {
        karakters.splice(karaktersIndex, 1)
        return
    }

    // Laat het karakter naar beneden vallen
    karakter.y += 2
}

function keyPressed() {
    // Log de ingedrukte toets in de console
    console.log(key)

    // Zorg ervoor dat de karakters verschillende groottes en kleuren hebben
    const size = random(24, 80)
    const kleur = random(["#000", "#333", "#666", "#999", "#CCC"])

    // Voeg het karakter toe aan de karakters array
    karakters.push({
        x: random(0, canvasWidth - size/2),
        y: -size/2,
        karakter: key,
        size: size,
        kleur: kleur,
    })
}
