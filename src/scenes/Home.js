
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

		// car
		const car = new Car(this, 1051, 595);
		this.add.existing(car);

		// car_2
		const car_2 = this.add.image(649, 462, "car-2");
		car_2.scaleX = 2.5;
		car_2.scaleY = 2.5;
		car_2.angle = 90;

		// logo
		const logo = new Logo(this, 889, 316);
		this.add.existing(logo);

		this.car = car;
		this.logo = logo;

		this.events.emit("scene-awake");
	}

	/** @type {Car} */
	car;
	/** @type {Logo} */
	logo;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.setAnimation();
	}
	setAnimation = () => {
		let delay = 0;
		const lightAnimation = (target, duration, ease) => {
			this.tweens.add({
				targets: target,
				alpha: 0,
				duration: duration,
				delay: () => {
					if (target == this.logo.container_lights.list) {
						delay += 100;
						return delay;
					}
				},
				ease: ease,
				yoyo: true,
				repeat: -1,
			});
		}
		lightAnimation(this.car.container_lights.list, 200, "linear");
		lightAnimation(this.logo.container_lights.list, 500, "Quad.easeInOut");

		this.tweens.add({
			targets: this.car,
			y: 700,
			duration: 1000,
			delay: 2000,
			ease: "Quad.easeInOut",
			onComplete: () => {
				this.tweens.add({
					targets: this.car,
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
