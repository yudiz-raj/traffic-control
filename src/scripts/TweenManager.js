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
                        car.body.setSize(170, 440);
                        car.setVelocity(0, -200);
                        break;
                    case 180:
                        car.body.setSize(170, 440);
                        car.setVelocity(0, 200);
                        break;
                    case 90:
                        car.body.setSize(440, 170);
                        car.setVelocity(200, 0);
                        break;
                    case -90:
                        car.body.setSize(440, 170);
                        car.setVelocity(-200, 0);
                        break;
                    default:
                        break;
                }
            }
        });
    }
}