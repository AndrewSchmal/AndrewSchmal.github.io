// Source = https://p5js.org/examples/angles-and-motion-sine-cosine/    

const sketch1 = (p) => {
    let circleX = 200;
    let circleY = 150;
    let circleRadius = 75;

    let graphX = 50;
    let graphY = 300;
    let graphAmplitude = 50;
    let graphPeriod = 300;

    p.setup = () => {
        let canvas = p.createCanvas(400, 400);
        canvas.parent('drawing-container-1');
        p.angleMode(p.DEGREES);
    };

    p.draw = () => {
        p.background(0);
        let angle = p.frameCount % 360;

        // Drawing the circle
        p.noFill();
        p.stroke(128);
        p.strokeWeight(3);
        p.circle(circleX, circleY, 2 * circleRadius);
        p.line(circleX, circleY - circleRadius, circleX, circleY + circleRadius);
        p.line(circleX - circleRadius, circleX + circleRadius);

        // Calculate points and draw moving lines
        let pointX = circleX + circleRadius * p.cos(angle);
        let pointY = circleY - circleRadius * p.sin(angle);

        p.line(circleX, circleY, pointX, pointY);
        p.noStroke();
        p.fill('white');
        p.circle(pointX, pointY, 10);

        // Graph
        let lineX = p.map(angle, 0, 360, graphX, graphX + graphPeriod);
        p.stroke('grey');
        p.line(lineX, graphY - graphAmplitude, lineX, graphY + graphAmplitude);
    };
};

new p5(sketch1);

