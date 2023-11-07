class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    carTurnAnimation(car, nAngle) {
        let nDelay = 1000;
        if (car.body.velocity.x == 300 || car.body.velocity.x == -300 || car.body.velocity.y == 300 || car.body.velocity.y == -300) {
            nDelay = 500;
        }
        this.turnTween = this.oScene.tweens.add({
            targets: car,
            angle: nAngle,
            duration: 200,
            delay: nDelay,
            onComplete: () => {
                switch (nAngle) {
                    case 0:
                        car.setVelocity(0, -200);
                        car.body.setSize(170, 440);
                        break;
                    case 180:
                        car.setVelocity(0, 200);
                        car.body.setSize(170, 440);
                        break;
                    case 90:
                        car.setVelocity(200, 0);
                        car.body.setSize(440, 170);
                        break;
                    case -90:
                        car.setVelocity(-200, 0);
                        car.body.setSize(440, 170);
                        break;
                    default:
                        break;
                }
            }
        });
    }
}