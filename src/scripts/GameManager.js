class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    levelOne() {
        this.aCarPotision = [
            { x: -110, y: 136, angle: 90, velocityX: 200, velocityY: 0, arrowX: 175, arrowY: 128 },
            { x: 918, y: -117, angle: 180, velocityX: 0, velocityY: 200, arrowX: 905, arrowY: 145 },
            { x: 2032, y: 634, angle: -90, velocityX: -200, velocityY: 0, arrowX: 1696, arrowY: 644 },
            { x: 2032, y: 957, angle: -90, velocityX: -200, velocityY: 0, arrowX: 1996, arrowY: 964 },
            { x: 1169, y: 1206, angle: 0, velocityX: 0, velocityY: -200, arrowX: 1157, arrowY: 924 },
            { x: -109, y: 418, angle: 90, velocityX: 200, velocityY: 0, arrowX: 175, arrowY: 418 },
        ]
    }
}