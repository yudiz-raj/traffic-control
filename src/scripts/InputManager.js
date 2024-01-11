class InputManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    setCarSpeed() {
        this.oScene.container_cars.list.forEach((car) => {
            car.setInteractive().on("pointerdown", () => {
                switch (car.angle) {
                    case 0:
                        car.setVelocity(0, -300);
                        break;
                    case -180:
                        car.setVelocity(0, 300);
                        break;
                    case 90:
                        car.setVelocity(300, 0);
                        break;
                    case -90:
                        car.setVelocity(-300, 0);
                        break;
                    default:
                        break;
                }
            });
        });
    }
}