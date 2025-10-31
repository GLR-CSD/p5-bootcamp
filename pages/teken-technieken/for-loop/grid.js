const canvasWidth = 600
const canvasHeight = 400
const gridSpacing = 40


function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    
    // In de eerste (linker kolom) tonen we de nummers 1 t/m 12, met een vaste x-positie
    const aantalRijen = canvasHeight / gridSpacing
    const aantalKolommen = canvasWidth / gridSpacing
    // Maak een offset variabele aan om het startpunt van het grid niet helemaal linksboven te plaatsen, maar iets meer naar binnen
    const offset = gridSpacing / 2 

    // Geneste for-lus: een for-lus binnen een for-lus 
    // Elke y-waarde, loop je door alle x-waardes
    for (let y = 0; y < aantalRijen; y++) {
        for (let x = 0; x < aantalKolommen; x++) {

            fill("rebeccapurple") // Kleur voor de stippen
            stroke("transparent") // Randkleur voor de stippen
            const posX = offset + x * gridSpacing
            const posY = offset + y * gridSpacing
            circle(posX, posY, 4);
            
            // Vierkantjes met een willekeurige offset
            noFill() // Kleur voor de vierkantjes
            stroke("#333") // Randkleur voor de vierkantjes
            const offsetX = random(-2, 2) - 5
            const offsetY = random(-2, 2) - 5
            // Un-comment de regel hieronder om de vierkantjes te tonen
            square( posX + offsetX, posY + offsetY, 10);
        }
    }
}

