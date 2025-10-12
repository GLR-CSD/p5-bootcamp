const canvasWidth = 640
const canvasHeight = 480

function setup() {
    createCanvas(canvasWidth, canvasHeight).parent("p5-container")
   
    noStroke()
    fill("black")
    
    beginShape();
    vertex(308, 65);
    vertex(333, 39.5);
    vertex(367, 39.5);
    vertex(385, 50);
    vertex(422, 57);
    vertex(385, 80);
    vertex(405, 180);
    vertex(438, 212);
    vertex(453, 270);
    vertex(435, 307);
    vertex(427, 270);
    vertex(413, 245);
    vertex(405, 330);
    vertex(370, 412);
    vertex(403, 416);
    vertex(413, 433);
    vertex(371, 433);
    vertex(343, 424);
    vertex(338, 416);
    vertex(313, 411);
    vertex(300, 415);
    vertex(342, 432);
    vertex(348, 446);
    vertex(308, 446);
    vertex(274, 432);
    vertex(268, 415);
    vertex(241, 423);
    vertex(217, 424);
    vertex(241, 403);
    vertex(260, 343);
    vertex(257, 280);
    vertex(268, 229);
    vertex(227, 254);
    vertex(195, 303);
    vertex(190, 259);
    vertex(228, 212);
    vertex(286, 172);
    endShape(CLOSE);
}