let dots = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	

}

function draw() {
	background(0);
		let textIn='welcome to Chan Buddhism fandom'
	textSize(64);
	textAlign(CENTER, CENTER)
	fill(255);
	text(textIn,width/2,height/2);
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 0;
	drawingContext.shadowBlur = 20;
	drawingContext.shadowColor = 'red'
	if (frameCount % int(random(40, 50)) == 0) {
		for (let i = 0; i < int(random(1, 3)); i++) {
			let d = new Dot();
			dots.push(d);
		}
	}

	for (let d of dots) {
		d.update();
		d.draw();
	}

	for (let i = dots.length - 1; i >= 0; i--) {
		if (dots[i].life == 0) {
			dots.splice(i, 1);
		}
	}
}

class Dot {
	constructor() {
		this.r = random(50, 100);
		this.x = random(0, width);
		this.y = random(0, height);
		this.life = 1;
		this.t = 1;

	}

	update() {
		this.t++;
		this.life = 255 * ((sin(this.t / 100 * PI) + 1) / 2);
	}

	draw() {
		colorMode(HSB, 255);
		noStroke();
		fill(0, 255, this.life);
		ellipse(this.x, this.y, this.r);
	}

}