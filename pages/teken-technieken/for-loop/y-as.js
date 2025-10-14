const canvasWidth = 600
const canvasHeight = 400


function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    textAlign(CENTER, CENTER);
    fill("rebeccapurple")

    // In de eerste (linker kolom) tonen we de nummers 1 t/m 12, met een vaste x-positie
    const aantalRijenEersteKolom = 12
    const kolomHoogte = canvasHeight / aantalRijenEersteKolom
    for (let i = 0; i < aantalRijenEersteKolom; i++) {
        const x = 25
        const y = kolomHoogte * i
        text(i+1, x, y, 50, 50);
    }
    
    // Daarna tekenen we op dezelfde manier vierkantjes, maar dan ook nog met een oplopende x-positie
    // Alle cijfers in de positie bepaling van de for-lus zijn vervangen door variabelen
    const startX = 75
    const startY = kolomHoogte / 2
    const squareSize = 20
    const kolomBreedte = (canvasWidth - startX) / aantalRijenEersteKolom
    for (let i = 0; i < aantalRijenEersteKolom; i++) {
        const x = startX + (i * kolomBreedte) 
        const y = startY + kolomHoogte * i
        square( x, y, squareSize);
    }
}

