import { FOE_IMG } from "../const/const.js";

export class Foe {
    
    constructor(canvasCtx) {
        this.canvasCtx = canvasCtx;
        this.foeImg = new Image();
        this.foeImg.src = FOE_IMG;
        this.foeImg.onload = () => this.canvasCtx.drawImage(this.foeImg, 10, 10, 100, 100);
    }
}