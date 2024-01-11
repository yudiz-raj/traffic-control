
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// splash_bg
		this.add.image(960, 540, "splash-bg");

		// car_4
		const car_4 = this.add.image(1111, 624, "car-4");

		// car_2
		const car_2 = this.add.image(649, 462, "car-2");
		car_2.scaleX = 2.5;
		car_2.scaleY = 2.5;
		car_2.angle = 90;

		// logo
		this.add.image(1101, 316, "logo");

		this.car_4 = car_4;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	car_4;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.tweens.add({
			targets: this.car_4,
			y: 700,
			duration: 1000,
			ease: "Quad.easeInOut",
			onComplete: () => {
				this.tweens.add({
					targets: this.car_4,
					y: -300,
					duration: 500,
					ease: "Quad.easeInOut",
				})
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
