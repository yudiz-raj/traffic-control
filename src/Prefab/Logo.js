
// You can write more code here

/* START OF COMPILED CODE */

class Logo extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -212, y ?? 0);

		// logo
		const logo = scene.add.image(212, 0, "logo");
		this.add(logo);

		// container_lights
		const container_lights = scene.add.container(0, 0);
		this.add(container_lights);

		// red_light
		const red_light = scene.add.image(-4, 163, "red-light");
		container_lights.add(red_light);

		// red_light_4
		const red_light_4 = scene.add.image(129, 166, "red-light");
		container_lights.add(red_light_4);

		// red_light_1
		const red_light_1 = scene.add.image(246, 164, "red-light");
		container_lights.add(red_light_1);

		// red_light_3
		const red_light_3 = scene.add.image(374, 164, "red-light");
		container_lights.add(red_light_3);

		// red_light_2
		const red_light_2 = scene.add.image(531, 161, "red-light");
		container_lights.add(red_light_2);

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
