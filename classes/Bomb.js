import { BOMB_IMG } from "../const/const.js";

export class Bomb {

    constructor(canvasCtx) {
        this.canvasCtx = canvasCtx;
        this.bombImg = new Image();
        this.bombImg.src = BOMB_IMG;
        this.bombImg.onload = () => this.canvasCtx.drawImage(this.bombImg, 10, 10, 100, 100);
    }
}