import { HERO_IMG } from "../const/const.js";

export class Perso {
    
    constructor(canvasCtx) {
        this.canvasCtx = canvasCtx;
        this.heroImg = new Image();
        this.heroImg.src = HERO_IMG;
        this.heroImg.onload = () => this.canvasCtx.drawImage(this.heroImg, 360, 632, 32, 32);
    }
}