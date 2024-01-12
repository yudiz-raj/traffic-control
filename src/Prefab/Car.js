
// You can write more code here

/* START OF COMPILED CODE */

class Car extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -60, y ?? -117);

		// car_4
		const car_4 = scene.add.image(60, 117, "car-4");
		this.add(car_4);

		// container_lights
		const container_lights = scene.add.container(0, 0);
		this.add(container_lights);

		// light
		const light = scene.add.image(-1, -127, "light");
		container_lights.add(light);

		// light_1
		const light_1 = scene.add.image(91, -127, "light");
		container_lights.add(light_1);

		this.container_lights = container_lights;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	container_lights;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
