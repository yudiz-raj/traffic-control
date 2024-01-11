// You can write more code here
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

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
		container_background.add(background);

		// container_turns
		const container_turns = this.add.container(0, 0);

		// rectangle_downSide
		const rectangle_downSide = this.add.rectangle(729, 132, 50, 50);
		rectangle_downSide.name = "rectangle_downSide";
		rectangle_downSide.visible = false;
		rectangle_downSide.isFilled = true;
		container_turns.add(rectangle_downSide);

		// rectangle_topSide
		const rectangle_topSide = this.add.rectangle(1381, 967, 50, 50);
		rectangle_topSide.name = "rectangle_topSide";
		rectangle_topSide.visible = false;
		rectangle_topSide.isFilled = true;
		container_turns.add(rectangle_topSide);

		// rectangle_downSide_1
		const rectangle_downSide_1 = this.add.rectangle(729, 420, 50, 50);
		rectangle_downSide_1.name = "rectangle_downSide_1";
		rectangle_downSide_1.visible = false;
		rectangle_downSide_1.isFilled = true;
		container_turns.add(rectangle_downSide_1);

		// rectangle_topSide_1
		const rectangle_topSide_1 = this.add.rectangle(1381, 648, 50, 50);
		rectangle_topSide_1.name = "rectangle_topSide_1";
		rectangle_topSide_1.visible = false;
		rectangle_topSide_1.isFilled = true;
		container_turns.add(rectangle_topSide_1);

		// container_cars
		const container_cars = this.add.container(0, 0);

		// container_tunnel
		this.add.container(0, 1);

		// arrow
		const arrow = this.add.image(1835, 480, "arrow");
		arrow.visible = false;

		this.container_turns = container_turns;
		this.container_cars = container_cars;
		this.arrow = arrow;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_turns;
	/** @type {Phaser.GameObjects.Container} */
	container_cars;
	/** @type {Phaser.GameObjects.Image} */
	arrow;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.oGameManager = new GameManager(this);
		this.oTweenManager = new TweenManager(this);
		this.oInputManager = new InputManager(this);

		this.carGroup = this.physics.add.group();
		this.turnGroup = this.physics.add.group();

		this.addNewCars();

		this.container_turns.list.forEach((turn) => {
			this.turnGroup.add(turn);
		});
		this.physics.add.collider(this.carGroup, this.carGroup, this.handleColliderOfCars);
		this.turn = this.physics.add.overlap(this.carGroup, this.turnGroup, this.handleTurns);
	}
	addNewCars = () => {
		this.oGameManager.levelOne();
		this.aCarPosition = this.oGameManager.aCarPotision;
		const car = this.carGroup.create(this.aCarPosition[2].x, this.aCarPosition[2].y, 'car-1').setAngle(this.aCarPosition[2].angle);
		car.setVelocity(this.aCarPosition[2].velocityX, this.aCarPosition[2].velocityY);
		car.body.setSize(130, 70);
		car.body.setOffset(0, 80);
		this.container_cars.add(car);
		this.arrow.setPosition(this.aCarPosition[2].arrowX, this.aCarPosition[2].arrowY).setVisible(true).setAngle(car.angle);
		setTimeout(() => {
			this.arrow.setVisible(false);
		}, 500);
		let nRandomTime = 2000;

		this.carInterval = setInterval(() => {
			let nRandomCar = Phaser.Math.Between(0, 5);
			let ncar = Phaser.Math.Between(1, 3);
			const car = this.carGroup.create(this.aCarPosition[nRandomCar].x, this.aCarPosition[nRandomCar].y, `car-${ncar}`).setAngle(this.aCarPosition[nRandomCar].angle);
			car.body.setVelocity(this.aCarPosition[nRandomCar].velocityX, this.aCarPosition[nRandomCar].velocityY);
			this.arrow.setPosition(this.aCarPosition[nRandomCar].arrowX, this.aCarPosition[nRandomCar].arrowY).setVisible(true).setAngle(car.angle);
			setTimeout(() => {
				this.arrow.setVisible(false);
			}, 500);
			const carProperties = {
				'car-1': {
					'0': { size: [70, 130], offset: [10, 50] },
					'-90': { size: [130, 70], offset: [0, 80] },
					'90': { size: [130, 70], offset: [-30, 65] },
					'-180': { size: [70, 130], offset: [25, 25] },
				},
				'car-2': {
					'0': { size: [70, 150], offset: [15, 150] },
					'-90': { size: [150, 70], offset: [50, 145] },
					'90': { size: [150, 70], offset: [-80, 120] },
					'-180': { size: [70, 150], offset: [45, 20] },
				},
				'car-3': {
					'0': { size: [70, 150], offset: [15, 80] },
					'-90': { size: [150, 70], offset: [0, 100] },
					'90': { size: [150, 70], offset: [-50, 90] },
					'-180': { size: [70, 150], offset: [30, 20] },
				},
			};
			switch (car.angle) {
				case 0:
				case -90:
				case 90:
				case -180:
					const { size, offset } = carProperties[car.texture.key][car.angle];
					car.body.setSize(...size);
					car.body.setOffset(...offset);
					break;
				default:
					break;
			}
			this.container_cars.add(car);
			this.oInputManager.setCarSpeed();
			nRandomTime = Phaser.Math.Between(1500, 3000);
		}, nRandomTime);
	}
	handleColliderOfCars = (car1, car2) => {
		if (this.oTweenManager.turnTween) {
			this.oTweenManager.turnTween.stop();
		}
		this.add.image((car1.x + car2.x) / 2, (car1.y + car2.y) / 2, "blast");
		clearInterval(this.carInterval);
		const blackLeyer = this.add.image(960, 540, "black");
		const replay_button = this.add.image(1041, 540, "replay-button");
		replay_button.setInteractive(this.input.makePixelPerfect());
		replay_button.on("pointerover", () => {
			replay_button.setScale(1.1);
			this.input.setDefaultCursor("pointer");
		})
		replay_button.on("pointerout", () => {
			replay_button.setScale(1);
			this.input.setDefaultCursor("default");
		})
		replay_button.on("pointerdown", () => {
			this.tweens.add({
				targets: replay_button,
				scale: 0.9,
				duration: 100,
				yoyo: true,
				ease: 'Linear',
				onComplete: () => {
					this.scene.start("Level");
				}
			})
		})
		this.physics.pause();
	}
	handleTurns = (car, turn) => {
		switch (turn.name) {
			case "rectangle_topSide":
			case "rectangle_topSide_1":
				this.oTweenManager.carTurnAnimation(car, 0);
				break;
			case "rectangle_downSide":
			case "rectangle_downSide_1":
				this.oTweenManager.carTurnAnimation(car, 180);
				break;
			default:
				break;
		}
	}
	update() {
		this.container_cars.list.forEach((car) => {
			if ((car.angle === 0 && car.y <= -150) || (car.angle === -180 && car.x >= 2070)) {
				car.destroy();
			}
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
