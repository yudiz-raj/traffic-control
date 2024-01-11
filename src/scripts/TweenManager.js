class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    carTurnAnimation(car, nAngle) {
        let nDelay = 950;
        if (car.body.velocity.x == 300 || car.body.velocity.x == -300 || car.body.velocity.y == 300 || car.body.velocity.y == -300) {
            nDelay = 500;
        }
        this.turnTween = this.oScene.tweens.add({
            targets: car,
            angle: nAngle,
            duration: 190,
            delay: nDelay,
            onComplete: () => {
                car.refreshBody();
                switch (nAngle) {
                    case 0:
                        if (car.texture.key == 'car-1') {
                            car.body.setSize(70, 130);
                            car.body.setOffset(10, 50);
                        }
                        if (car.texture.key == 'car-2') {
                            car.body.setSize(70, 150);
                            car.body.setOffset(15, 150);
                        }
                        if (car.texture.key == 'car-3') {
                            car.body.setSize(70, 150);
                            car.body.setOffset(15, 80);
                        }
                        car.setVelocity(0, -200);
                        break;
                    case 180:
                        if (car.texture.key == 'car-1') {
                            car.body.setSize(70, 130);
                            car.body.setOffset(25, 25);
                        }
                        if (car.texture.key == 'car-2') {
                            car.body.setSize(70, 150);
                            car.body.setOffset(45, 20);
                        }
                        if (car.texture.key == 'car-3') {
                            car.body.setSize(70, 150);
                            car.body.setOffset(30, 20);
                        }
                        car.setVelocity(0, 200);
                        break;
                    case 90:
                        if (car.texture.key == 'car-1') {
                            car.body.setSize(130, 70);
                            car.body.setOffset(-30, 65);
                        }
                        if (car.texture.key == 'car-2') {
                            car.body.setSize(150, 70);
                            car.body.setOffset(-80, 120);
                        }
                        if (car.texture.key == 'car-3') {
                            car.body.setSize(150, 70);
                            car.body.setOffset(-50, 90);
                        }
                        car.setVelocity(200, 0);
                        break;
                    case -90:
                        if (car.texture.key == 'car-1') {
                            console.log("car");
                            car.body.setSize(130, 70);
                            car.body.setOffset(0, 65);
                        }
                        if (car.texture.key == 'car-2') {
                            car.body.setSize(150, 70);
                            car.body.setOffset(50, 145);
                        }
                        if (car.texture.key == 'car-3') {
                            car.body.setSize(150, 70);
                            car.body.setOffset(0, 100);
                        }
                        car.setVelocity(-200, 0);
                        break;
                    default:
                        break;
                }
            }
        });
    }
}