const canvasWidth = 600
const canvasHeight = 400
const gridSpacing = 20


function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    
    // In de eerste (linker kolom) tonen we de nummers 1 t/m 12, met een vaste x-positie
    const aantalRijen = canvasHeight / gridSpacing
    const aantalKolommen = canvasWidth / gridSpacing

    // Maak een offset variabele aan om het startpunt van het grid niet helemaal linksboven te plaatsen, maar iets meer naar binnen
    const offset = gridSpacing / 2 
    
    // Maak variable voor het formaat van de vierkantjes
    const vierkantje = gridSpacing

    // Zorg ervoor dat er geen outline om de vormen wordt getekend
    noStroke()

    // Geneste for-lus: een for-lus binnen een for-lus 
    // Elke y-waarde, loop je door alle x-waardes
    for (let y = 0; y < aantalRijen; y++) {
        for (let x = 0; x < aantalKolommen; x++) {


            // Deze if-else structuur is een beetje omslachtig
            // Het maakt gebruik van 2 helper functies, regel1 en regel2
            // Die bepalen welke kleur er gebruikt wordt op basis van de x-waarde
            // Ze maken eigenlijk allebei gebruik van dezelfde modulo logica, maar de kleuren zijn alleen omgedraaid
            if (y == 1) {
                regel1(x)
            } else if (y == 2) {
                regel2(x)
            }  else if (y == 3) {
                regel1(x)
            } else if (y == 6) {
                regel1(x)
            } else if (y == 7) {
                regel2(x)
            }  else if (y == 8) {
                regel1(x)
            } else if (y == 11) {
                regel1(x)
            } else if (y == 12) {
                regel2(x)
            }  else if (y == 13) {
                regel1(x)
            }   else if (y == 16) {
                regel1(x)
            } else if (y == 17) {
                regel2(x)
            } else if (y == 18) {
                regel1(x)
            } else {
                fill("rebeccapurple") 
            }

            // Bovenstaande code kan ook vervangen worden door deze code,
            // Deze maakt gebruik van de modulo op basis van de y waarde, dat betekend dat wanneer je bijvoorbeeld de gridSpacing verlaagt, 
            // het nog steeds hetzelfde patroon blijft behouden
            // if (y % 5 == 0 || y % 5 == 4) {
            //     fill("rebeccapurple") 
            // } else if (y % 5 == 1 || y % 5 == 3) {
            //     regel1(x)
            // } else if (y % 5 == 2) {
            //     regel2(x)
            // }
            
            // Teken de vierkantjes op basis van de x en y posities in de for-lus
            const posX = offset + x * gridSpacing - vierkantje/2
            const posY = offset + y * gridSpacing - vierkantje/2
           
            square( posX, posY, vierkantje);
        }
    }
}

// Helper functies voor het tekenen van een reeks paarse vierkantjes, behalve op elke 8e positie (dan wit)
const regel1 = function(x) {
    if ( x % 8) {
        fill("rebeccapurple") 
    } else {
        fill("white")
    }
}

// Helper functies voor het tekenen van een reeks witte vierkantjes, behalve op elke 8e positie (dan paars)
const regel2 = function(x) {
    if ( x % 8 == 0) {
        fill("rebeccapurple") 
    } else {
        fill("white")
    }
}

/***** TIP! ******************
Maak tijdens het ontwikkelen gebruik van simpele if-statements.

⬜️⬛️⬜️⬜️⬜️⬛️
⬜️⬜️⬛️⬜️⬛️⬜️
⬜️⬜️⬜️⬛️⬜️⬜️
⬛️⬜️⬜️⬜️⬜️⬜️

Neem bovenstaande patroon als voorbeeld, laten we beginnen met de eerste regel (y == 0):
if (x == 1 || x == 4) {
    fill("black")
}
⬜️⬛️⬜️⬜️⬜️⬛️

Vervolgens de tweede regel (y == 1):
if (x == 2 || x == 4) {
    fill("black")
}
⬜️⬜️⬛️⬜️⬛️⬜️

Enzovoorts.

Daarna ga je het ombouwen naar modulo logica. De x-waarden worden 6 keer herhaald, dus we gebruiken x % 6.
if (x % 6 == 1 || x % 6 == 4) {
    fill("black")
}
⬜️⬛️⬜️⬜️⬜️⬛️

Voor de tweede regel:
if (x % 6 == 2 || x % 6 == 4) {
    fill("black")
} 
⬜️⬜️⬛️⬜️⬛️⬜️

Als we dat combineren met de y-waarden, kunnen we op dezelfde manier, het gehele patroon tekenen:
fill("white")
if (y % 4 == 0) {
    if (x % 6 == 1 || x % 6 == 5) {
        fill("black")
    }
} else if (y % 4 == 1) {
    if (x % 6 == 2 || x % 6 == 4) {
        fill("black")
    }
} else if (y % 4 == 2) {
    if (x % 6 == 3) {
        fill("black")
    }
} else if (y % 4 == 3) {
    if (x % 6 == 0) {
        fill("black")
    }
}
    
⬜️⬛️⬜️⬜️⬜️⬛️
⬜️⬜️⬛️⬜️⬛️⬜️
⬜️⬜️⬜️⬛️⬜️⬜️
⬛️⬜️⬜️⬜️⬜️⬜️

Zorg er wel voor dat je van tevoren fill("white") neerzet, zo is de default kleur wit, en teken je alleen de zwarte vakjes.
*****************************/