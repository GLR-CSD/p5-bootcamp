// Met deze 3 variabelen kun je de afmetingen en achtergrondkleur van het canvas aanpassen
const canvasWidth = 640
const canvasHeight = 480
const maxSpeed = 15
const stip = {
    x: canvasWidth/2,
    y: canvasHeight/2,
    angle: 0,
    speed: 0
}



function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background("#fff");
}


function draw() {
    // Teken eerst de achtergrond
    background("#fff");
    
    updateStipPositie()
    noStroke();
    fill("red")
    circle(stip.x, stip.y, 32)
}


function updateStipPositie() {
    // Als de stip snelheid negatief is, zetten we die op 0 en stoppen we de functie
    if (stip.speed < 0) {
        stip.speed = 0
        return
    }

    // Als mouseX óf mouseY niet bestaan, dan willen we niet dat de rest van de code wordt uitgevoerd. 
    // Dus dan voeren we een return commando uit, zodat de rest van de code uit de functie niet meer wordt uitgevoerd.
    if (!mouseX || !mouseY) {
        return
    }

    // Als de muis buiten de canvas is, zetten we de stip stil 
    if (mouseX < 0 || mouseX > canvasWidth || mouseY < 0 || mouseY > canvasHeight) {
        stip.speed = 0
        return
    }
    
    
    // Als de stip bijna bij de muis is, dan zorgen we ervoor dat die stopt met bewegen
    if (puntInCirkel(stip.x, stip.y, mouseX, mouseY, 4)) {
        stip.speed = 0
    } 
    // Als de stip bijna bij de muis is, dan zorgen we ervoor dat die steeds langzamer gaat bewegen
    else if (puntInCirkel(stip.x, stip.y, mouseX, mouseY, 64)) {
        stip.speed -= .4
    } 
    // Verhoog de snelheid van de stip tot aan de maximum snelheid (de waarde van maxSpeed)
    else if (stip.speed < maxSpeed) {
        stip.speed +=.2
    }

    // Update de hoek van de stip naar de muis toe, en pas de x en y positie aan
    stip.angle = berekenHoek(stip.x, stip.y, mouseX, mouseY)

    // Update de positie van de x & y positie van de stip
    stip.x += Math.cos(stip.angle) * stip.speed
    stip.y += Math.sin(stip.angle) * stip.speed
}

// Helper functie om de hoek tussen twee punten te berekenen
function berekenHoek(x1,y1, x2,y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const hoek = Math.atan2(dy, dx); // in radialen
    return hoek;
}

// Helper functie om te checken of een punt binnen een cirkel ligt
function puntInCirkel(x, y, cx, cy, r) {
    const dx = x - cx;
    const dy = y - cy;
    return (dx * dx + dy * dy) <= (r * r);
}
