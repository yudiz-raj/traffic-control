class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    levelOne() {
        this.aCarPotision = [
            { x: -107, y: 204, angle: 90, velocityX: 200, velocityY: 0, arrowX: 80, arrowY: 204 },
            { x: 943, y: -99, angle: 180, velocityX: 0, velocityY: 200, arrowX: 943, arrowY: 80 },
            { x: 2082, y: 466, angle: -90, velocityX: -200, velocityY: 0, arrowX: 1850, arrowY: 466 },
            { x: 1700, y: 884, angle: -90, velocityX: -200, velocityY: 0, arrowX: 1500, arrowY: 884 },
            { x: 975, y: 1223, angle: 0, velocityX: 0, velocityY: -200, arrowX: 975, arrowY: 1000 }
        ]
    }
}