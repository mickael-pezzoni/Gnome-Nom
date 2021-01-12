import { HERO_IMG } from "../const/const.js";

export class Perso {
    
    constructor(canvasCtx) {
        this.canvasCtx = canvasCtx;
        this.x = 360;
        this.y = 632;
        this.heroImg = new Image();
        this.drawImg();
    }


    drawImg() {
        this.canvasCtx.drawImage(this.heroImg, this.x, this.y, 32, 32);
        this.heroImg.src = HERO_IMG;
    }

    moveImg() {
        this.x += 5;
    }


}