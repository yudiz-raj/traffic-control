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
		const container_background = this.add.container(0, -1);

		// background
		const background = this.add.image(960, 542, "level-1-background");
		background.scaleX = 1.5;
		background.scaleY = 1.5;
		container_background.add(background);

		// container_turns
		const container_turns = this.add.container(0, 0);

		// rectangle_downSide
		const rectangle_downSide = this.add.rectangle(818, 187, 50, 50);
		rectangle_downSide.name = "rectangle_downSide";
		rectangle_downSide.isFilled = true;
		container_turns.add(rectangle_downSide);

		// rectangle_leftSide
		const rectangle_leftSide = this.add.rectangle(961, 346, 50, 50);
		rectangle_leftSide.name = "rectangle_leftSide";
		rectangle_leftSide.isFilled = true;
		container_turns.add(rectangle_leftSide);

		// rectangle_rightSide
		const rectangle_rightSide = this.add.rectangle(963, 738, 50, 50);
		rectangle_rightSide.name = "rectangle_rightSide";
		rectangle_rightSide.isFilled = true;
		container_turns.add(rectangle_rightSide);

		// rectangle_topSide
		const rectangle_topSide = this.add.rectangle(1106, 899, 50, 50);
		rectangle_topSide.name = "rectangle_topSide";
		rectangle_topSide.isFilled = true;
		container_turns.add(rectangle_topSide);

		// container_cars
		const container_cars = this.add.container(0, 0);

		// container_tunnel
		const container_tunnel = this.add.container(0, 1);

		// tunnel_2
		const tunnel_2 = this.add.image(-55, 518, "tunnel-2");
		tunnel_2.scaleX = 1.2;
		tunnel_2.scaleY = 1.2;
		container_tunnel.add(tunnel_2);

		// tunnel_1
		const tunnel_1 = this.add.image(1885, 890, "tunnel-1");
		tunnel_1.scaleX = 1.1;
		container_tunnel.add(tunnel_1);

		this.container_turns = container_turns;
		this.container_cars = container_cars;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_turns;
	/** @type {Phaser.GameObjects.Container} */
	container_cars;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.oGameManager = new GameManager(this);
		this.oTweenManager = new TweenManager(this);
		this.oInputManager = new InputManager(this);

		this.carGroup = this.physics.add.group();
		this.turnGroup = this.physics.add.group();

		this.oGameManager.levelOne();
		this.aCarPosition = this.oGameManager.aCarPotision;
		const car = this.carGroup.create(this.aCarPosition[2].x, this.aCarPosition[2].y, 'car').setAngle(this.aCarPosition[2].angle);
		car.setScale(0.3);
		car.setVelocity(this.aCarPosition[2].velocityX, this.aCarPosition[2].velocityY);
		car.body.setSize(440, 170);
		this.container_cars.add(car);
		let nRandomTime = 2000;

		setInterval(() => {
			let nRandomCar = Phaser.Math.Between(0, 4);
			let ncar = Phaser.Math.Between(0, 11);
			const car = this.carGroup.create(this.aCarPosition[nRandomCar].x, this.aCarPosition[nRandomCar].y, 'car').setAngle(this.aCarPosition[nRandomCar].angle);
			car.setScale(0.3);
			car.body.setVelocity(this.aCarPosition[nRandomCar].velocityX, this.aCarPosition[nRandomCar].velocityY);
			switch (car.angle) {
				case 0:
					car.body.setSize(170, 440);
					break;
				case 90:
					car.body.setSize(440, 170);
					break;
				case -90:
					car.body.setSize(440, 170);
					break;
				case -180:
					car.body.setSize(170, 440);
					break;
				default:
					break;
			}
			this.container_cars.add(car);
			this.container_cars.list.forEach((car) => {
				if (car.x <= -802 || car.x >= 2936 || car.y <= -290 || car.y >= 1360) {
					car.destroy();
				}
			});
			this.oInputManager.setCarSpeed();
			nRandomTime = Phaser.Math.Between(1500, 3000);
		}, nRandomTime);
		this.container_turns.list.forEach((turn) => {
			this.turnGroup.add(turn);
		});
		this.physics.add.collider(this.carGroup, this.carGroup, (car1, car2) => {
			this.oTweenManager.turnTween.stop();
			this.turn.destroy();
			this.physics.pause();
			this.add.image((car1.x + car2.x) / 2, (car1.y + car2.y) / 2, "blast");
			setTimeout(() => {
				this.scene.restart();
			}, 3000);
		});
		this.turn = this.physics.add.overlap(this.carGroup, this.turnGroup, (car, turn) => {
			switch (turn.name) {
				case "rectangle_topSide":
					this.oTweenManager.carTurnAnimation(car, 0);
					break;
				case "rectangle_downSide":
					this.oTweenManager.carTurnAnimation(car, 180);
					break;
				case "rectangle_leftSide":
					this.oTweenManager.carTurnAnimation(car, -90);
					break;
				case "rectangle_rightSide":
					this.oTweenManager.carTurnAnimation(car, 90);
					break;
				default:
					break;
			}
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
