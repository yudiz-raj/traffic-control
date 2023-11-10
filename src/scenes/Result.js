
// You can write more code here

/* START OF COMPILED CODE */

class Result extends Phaser.Scene {

	constructor() {
		super("Result");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_background
		const container_background = this.add.container(0, 0);

		// background
		const background = this.add.image(960, 542, "level-1-background");
		background.scaleX = 1.5;
		background.scaleY = 1.5;
		container_background.add(background);

		// container_tunnel
		const container_tunnel = this.add.container(0, 0);

		// tunnel_2
		const tunnel_2 = this.add.image(-55, 518, "tunnel-2");
		tunnel_2.scaleX = 1.2;
		tunnel_2.scaleY = 1.2;
		container_tunnel.add(tunnel_2);

		// tunnel_1
		const tunnel_1 = this.add.image(1885, 890, "tunnel-1");
		tunnel_1.scaleX = 1.1;
		container_tunnel.add(tunnel_1);

		// replay_button
		const replay_button = this.add.image(960, 540, "replay-button");

		this.replay_button = replay_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	replay_button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.replay_button.setInteractive().on("pointerdown", () => {
			this.scene.stop("Result");
			this.scene.start("Level");
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
