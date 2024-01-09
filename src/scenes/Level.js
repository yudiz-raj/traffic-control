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
		rectangle_downSide.isFilled = true;
		container_turns.add(rectangle_downSide);

		// rectangle_leftSide
		const rectangle_leftSide = this.add.rectangle(1407, 226, 50, 50);
		rectangle_leftSide.name = "rectangle_leftSide";
		rectangle_leftSide.isFilled = true;
		container_turns.add(rectangle_leftSide);

		// rectangle_rightSide
		const rectangle_rightSide = this.add.rectangle(1435, 397, 50, 50);
		rectangle_rightSide.name = "rectangle_rightSide";
		rectangle_rightSide.isFilled = true;
		container_turns.add(rectangle_rightSide);

		// rectangle_topSide
		const rectangle_topSide = this.add.rectangle(1381, 967, 50, 50);
		rectangle_topSide.name = "rectangle_topSide";
		rectangle_topSide.isFilled = true;
		container_turns.add(rectangle_topSide);

		// container_cars
		const container_cars = this.add.container(0, 0);

		// container_tunnel
		this.add.container(0, 1);

		// arrow
		const arrow = this.add.image(1835, 480, "arrow");
		arrow.scaleX = 0.3;
		arrow.scaleY = 0.3;

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

		this.arrow.setVisible(false);
		this.oGameManager.levelOne();
		this.aCarPosition = this.oGameManager.aCarPotision;
		const car = this.carGroup.create(this.aCarPosition[2].x, this.aCarPosition[2].y, 'car-1').setAngle(this.aCarPosition[2].angle);
		car.setVelocity(this.aCarPosition[2].velocityX, this.aCarPosition[2].velocityY);
		car.body.setSize(140, 70);
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
			switch (car.angle) {
				case 0:
					if (car.texture.key == 'car-1') {
						car.body.setSize(70, 140);
						car.body.setOffset(10, 50);
					}
					if (car.texture.key == 'car-2') {
						car.body.setSize(70, 160);
						car.body.setOffset(15, 150);
					}
					if (car.texture.key == 'car-3') {
						car.body.setSize(70, 160);
						car.body.setOffset(15, 80);
					}
					break;
				case -90:
					if (car.texture.key == 'car-1') {
						console.log("car");
						car.body.setSize(140, 70);
						car.body.setOffset(0, 80);
					}
					if (car.texture.key == 'car-2') {
						car.body.setSize(160, 70);
						car.body.setOffset(50, 145);
					}
					if (car.texture.key == 'car-3') {
						car.body.setSize(160, 70);
						car.body.setOffset(0, 100);
					}
					break;
				case 90:
					if (car.texture.key == 'car-1') {
						car.body.setSize(140, 70);
						car.body.setOffset(-30, 65);
					}
					if (car.texture.key == 'car-2') {
						car.body.setSize(160, 70);
						car.body.setOffset(-80, 120);
					}
					if (car.texture.key == 'car-3') {
						car.body.setSize(160, 70);
						car.body.setOffset(-50, 90);
					}
					break;
				case -180:
					if (car.texture.key == 'car-1') {
						car.body.setSize(70, 140);
						car.body.setOffset(25, 25);
					}
					if (car.texture.key == 'car-2') {
						car.body.setSize(70, 160);
						car.body.setOffset(45, 20);
					}
					if (car.texture.key == 'car-3') {
						car.body.setSize(70, 160);
						car.body.setOffset(30, 20);
					}
					break;
				default:
					break;
			}
			this.container_cars.add(car);
			this.oInputManager.setCarSpeed();
			nRandomTime = Phaser.Math.Between(1500, 3000);
		}, nRandomTime);
		this.container_turns.list.forEach((turn) => {
			this.turnGroup.add(turn);
		});
		this.physics.add.collider(this.carGroup, this.carGroup, (car1, car2) => {
			this.add.image((car1.x + car2.x) / 2, (car1.y + car2.y) / 2, "blast");
			clearInterval(this.carInterval);
			if (this.oTweenManager.turnTween) {
				this.oTweenManager.turnTween.stop();
			}
			this.scene.pause();
			setTimeout(() => {
				this.scene.stop("Level");
				this.scene.start("Result");
			}, 2000);
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
	update() {
		this.container_cars.list.forEach((car) => {
			if ((car.angle === 90 && car.x >= 2000) || (car.angle === -90 && car.x <= 177)) {
				car.destroy();
			}
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
