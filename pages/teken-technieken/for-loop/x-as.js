const canvasWidth = 600
const canvasHeight = 400
const aantalVierkanten = 12


function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")

    // Op de bovenste rij tekenen we 12 vierkanten met een vaste x-positie
    fill("rebeccapurple")
    for (let i = 0; i < 12; i++) {
        // xPositie
        const x = i * 50
        const y = 25
        square(x,y, 50)
    }


    // Voor de tweede rij gebruiken we de modulus operator (%) om de even en oneven vierkanten van kleur te laten wisselen
    for (let i = 0; i < aantalVierkanten; i++) {
        // xPositie
        const x = i * 50
        const y = 100
        if (i % 2 === 0) {
            fill("mediumslateblue")
        } else {
            fill("rebeccapurple")
        } 
        square(x,y, 50)
    }


    // Voor de derde rij gebruiken maken we gebruik van een helper functie om te laten zien hoe je de code wat overzichtelijker zou kunenn maken
    for (let i = 0; i < aantalVierkanten; i++) {
        fill("hotpink")
        tekenVierkant(i)
    }

    // Voor de vierde rij tekenen we alleen vierkanten op de even posities
    fill("mediumslateblue")
    for (let i = 0; i < aantalVierkanten; i++) {
        // xPositie
        const x = i * (canvasWidth / aantalVierkanten)
        const y = 250
        const size = canvasWidth / aantalVierkanten
        
        if (i % 2 === 0) {
            square(x,y, size)
        } 
    }
    

    // Tot slot tekenen we op de vijfde een laatste rij met vierkanten op de oneven posities, cirkels op de even posities met een willekeurige kleur en een kleine afwijking op de y-positie
    const kleuren = ["mediumslateblue", "rebeccapurple", "hotpink", "#9f0", "#f09"]
    for (let i = 0; i < aantalVierkanten; i++) {
        // xPositie
        const x = i * (canvasWidth / aantalVierkanten)
        const y = random(340,350)
        const size = (canvasWidth / aantalVierkanten) * .75
        
        fill(random(kleuren))
        if (i % 2 === 0) {
            square(x,y, size)
        } else {
            circle(x + size/2, y + size/2, size)
        }
    }
}

const tekenVierkant = function(pos) {
    const x = pos * (canvasWidth / aantalVierkanten)
    const y = 175
    const size = canvasWidth / aantalVierkanten
    square(x,y, size)
}
