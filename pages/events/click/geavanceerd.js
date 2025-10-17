// Met deze 3 variabelen kun je de afmetingen en achtergrondkleur van het canvas aanpassen
const canvasWidth = 600
const canvasHeight = 400
const backgroundColor = "azure"
const vormTypes = ["circle", "square", "triangle"];
const kleuren = ["mediumslateblue", "rebeccapurple", "hotpink", "#9f0", "#f09"]

let nieuweVorm = {
    type: "circle",
    kleur: "mediumslateblue",
    size: 50,
}

const vormen = []

// De setup functie wordt één keer aangeroepen door P5 zodra de pagina geladen is
// https://p5js.org/reference/p5/setup/
function setup() {
    // Met de createCanvas functie creëren we het P5 canvas. 
    // De .parent methode die daarop volgt, koppelt het canvas het #p5-container HTML element.
    // https://p5js.org/reference/p5/createCanvas/ 
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    background(backgroundColor);

    rect(canvasWidth - 80, canvasHeight - 80, canvasWidth, canvasHeight);
    
    huidigeVorm = genereateVorm()
    nieuweVorm = genereateVorm()
}

function draw() {
    
    noStroke();
    vormen.forEach(vorm => {
        drawVorm(vorm)
    })

    stroke("black");
    fill("white");
    rectMode(CORNER);
    rect(canvasWidth - 80, canvasHeight - 80, 81, 81);

    noStroke();
    drawVorm( {
        x: canvasWidth - 40,
        y: canvasHeight - 40,
        type: nieuweVorm.type,
        kleur: nieuweVorm.kleur,
        size: nieuweVorm.size,
    })
}

function mousePressed() {
    vormen.push({
        type: nieuweVorm.type,
        kleur: nieuweVorm.kleur,
        size: nieuweVorm.size,
        x: mouseX,
        y: mouseY,
    })
    
    nieuweVorm = genereateVorm()
}

const genereateVorm = () => {
    return {
        type: random(vormTypes),
        kleur: random(kleuren),
        size: random(32, 64)
    }
}

const drawVorm = (vorm) => {
    fill(vorm.kleur);
    if (vorm.type === "circle") {
        circle(vorm.x, vorm.y, vorm.size);
    } else if (vorm.type === "square") {
        rectMode(CENTER);
        rect(vorm.x, vorm.y, vorm.size, vorm.size);
    } else if (vorm.type === "triangle") {
        const hoogte = vorm.size/2
        const breedte = vorm.size/2
        triangle(
            vorm.x, vorm.y - hoogte,
            vorm.x - breedte, vorm.y + hoogte,
            vorm.x + breedte, vorm.y + hoogte,
        );
    }
}