// Met deze 3 variabelen kun je de afmetingen en achtergrondkleur van het canvas aanpassen
const canvasWidth = 600
const canvasHeight = 400
const backgroundColor = "tomato"

// De setup functie wordt één keer aangeroepen door P5 zodra de pagina geladen is
// https://p5js.org/reference/p5/setup/
function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
    
    // Teken de achtergrond met een willekeurige kleur
    colorMode(HSL);
    const hue = random(0, 360);
    const saturation = random(50, 100);
    const lightness = random(40, 60);
    
    background(hue, saturation, lightness);

    // Teken twee willekeurige emojis in het midden van het scherm
    // Dit zorgt ervoor dat de tekst gecentreerd wordt zowel horizontaal als verticaal
    textAlign(CENTER, CENTER);
    textSize(128);
    const emojis = ["✊", "✋", "✌️"];
    const emoji1 = random(emojis);
    const emoji2 = random(emojis);
    fill("black");
    text(emoji1, canvasWidth / 2 - 100, canvasHeight / 2);
    text(emoji2, canvasWidth / 2 + 100, canvasHeight / 2);
    
    
    // Toon winnaar onderaan het scherm
    fill("white");
    textSize(80);
    if ((emoji1 == "✊" && emoji2 == "✌️") ||
        (emoji1 == "✋" && emoji2 == "✊") ||
        (emoji1 == "✌️"  && emoji2 == "✋" )
    ) {
        text("Links wint!", canvasWidth / 2, canvasHeight - 60);
    } else if ((emoji2 == "✊" && emoji1 == "✌️") ||
        (emoji2 == "✋" && emoji1 == "✊") ||
        (emoji2 == "✌️"  && emoji1 == "✋" )
    ) {
        text("Rechts wint!", canvasWidth / 2, canvasHeight - 60);
    }
}
