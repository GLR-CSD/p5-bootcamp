const canvasWidth = 640
const canvasHeight = 480

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    
    textSize(100);
    // Tekst string, x positie, y positie
    text('hoi', 50, 100);

    // Emoji tekenen
    textSize(200);
    text('👋', 300, 250);

    // Je kunt ook een tekstbox maken
    textSize(16);
    let tekst = 'Koude Willy had bijna het hoogste cijfer van het pinquin-quiz-examen.';
    // string, x, y, breedte, hoogte
    text(tekst, 16, 200, 80, 80);
    // Als je goed kijkt dan zie je dat de tekst niet buiten de box wordt getekend, 
    // doordat we een hoogte hebben meegegeven aan de text functie. Als we die zouden weghalen (dat is de laatste parameter) 
    // dan wordt de tekst niet vroegtijdig afgebroken.
}
