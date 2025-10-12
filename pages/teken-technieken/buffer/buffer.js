const canvasWidth = 600
const canvasHeight = 400
let imageBuffer

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")

    // Dit is hoe je een afbeeldingsbuffer maakt
    // breedte, hoogte
    imageBuffer = createGraphics(canvasWidth / 6, canvasHeight);

    // Alles wat je standaard kan in P5, kun je nu binnen de buffer doen door de variabel naam ervoor te zetten
    // Zoals bijvoorbeeld de kleur aanpassen met fill:
    imageBuffer.fill("rebeccapurple")

    // Of een cirkel tekenen met circle:
    const x = random(50, imageBuffer.width - 50)
    const y = random(50, imageBuffer.height - 50)
    const diameter = random(25, 100)
    imageBuffer.circle(x, y, diameter)

    // Teken een tweede vorm in de buffer
    imageBuffer.fill("hotpink")
    const diameter2 = random(25, 100)
    const x2 = random(50, imageBuffer.width - 50) - diameter2 / 2
    const y2 = random(50, imageBuffer.height - 50)
    imageBuffer.square(x2, y2, diameter2)

    // Nu we klaar zijn met tekenen op de buffer, kunnen we deze (zesmaal) op het hoofdcanvas tekenen
    for (let i = 0; i < 6; i++) {
        // xPositie
        const xPositie = i * imageBuffer.width
        const yPositie = 0

        image(imageBuffer, xPositie, yPositie)
    }
}
