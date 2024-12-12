// Source = https://p5js.org/examples/angles-and-motion-aim/

const sketch2 = (p) => {
    p.setup = () => {
        let canvas = p.createCanvas(400, 400);
        canvas.parent('drawing-container-2');
        p.colorMode(p.HSB);
        p.angleMode(p.DEGREES);
    };

    p.draw = () => {
        p.background(0);
        let leftX = 150;
        let leftY = 200;

        let leftAngle = p.atan2(p.mouseY - leftY, p.mouseX - leftX);

        p.push();
        p.translate(leftX, leftY);
        p.fill(255);
        p.ellipse(0, 0, 50, 50);
        p.rotate(leftAngle);
        p.fill(0);
        p.ellipse(12.5, 0, 25, 25);
        p.pop();

        let rightX = 250;
        let rightY = 200;

        let rightAngle = p.atan2(p.mouseY - rightY, p.mouseX - rightX);

        p.push();
        p.translate(rightX, rightY);
        p.fill(255);
        p.ellipse(0, 0, 50, 50);
        p.rotate(rightAngle);
        p.fill(0);
        p.ellipse(12.5, 0, 25, 25);
        p.pop();
    };
};

new p5(sketch2);
