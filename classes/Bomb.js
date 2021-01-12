import { BOMB_IMG } from "../const/const.js";

export class Bomb {

    constructor(canvasCtx, x, y) {
        this.canvasCtx = canvasCtx;
        this.x = x;
        this.y = y;
        this.bombImg = new Image();
        this.bombImg.src = BOMB_IMG;
        this.bombImg.onload = () => this.canvasCtx.drawImage(this.bombImg, x, y, 32, 32);
    }

    drawBomb() {
        this.canvasCtx.drawImage(this.bombImg, this.x, this.y, 32, 32);
        this.bombImg.src = BOMB_IMG;
    }
}