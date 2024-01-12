
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// splash_bg
		this.add.image(960, 540, "splash-bg");

		// progress
		const progress = this.add.text(1075, 965, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "54px" });

		// car_2
		const car_2 = this.add.image(649, 462, "car-2");
		car_2.scaleX = 2.5;
		car_2.scaleY = 2.5;
		car_2.angle = 90;

		// car
		const car = new Car(this, 1051, 595);
		this.add.existing(car);

		// logo
		const logo = new Logo(this, 889, 316);
		this.add.existing(logo);

		// progress (components)
		new PreloadText(progress);

		this.progress = progress;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	progress;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;
		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});
		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			const currentProgress = currentInterval * progressIncrement;
			this.progress.setText((currentProgress * 100).toFixed(0) + '%');
			currentInterval++;
			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	update() {
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			this.scene.stop("Preload");
			this.scene.start("Home");
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
