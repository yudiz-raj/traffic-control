class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    levelOne() {
        this.aCarPotision = [
            { x: -110, y: 136, angle: 90, velocityX: 200, velocityY: 0, arrowX: 80, arrowY: 204 },
            { x: 1164, y: -117, angle: 180, velocityX: 0, velocityY: 200, arrowX: 943, arrowY: 80 },
            { x: 2032, y: 634, angle: -90, velocityX: -200, velocityY: 0, arrowX: 1850, arrowY: 466 },
            { x: 2032, y: 957, angle: -90, velocityX: -200, velocityY: 0, arrowX: 1500, arrowY: 884 },
            { x: 912, y: 1206, angle: 0, velocityX: 0, velocityY: -200, arrowX: 975, arrowY: 1000 },
            { x: -109, y: 418, angle: 90, velocityX: 200, velocityY: 0, arrowX: 80, arrowY: 204 },
        ]
    }
}