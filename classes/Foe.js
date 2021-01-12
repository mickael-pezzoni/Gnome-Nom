import { FOE_IMG } from "../const/const.js";

export class Foe {
    
    constructor(canvasCtx,x,y) {
        this.canvasCtx = canvasCtx;
        this.x = x;
        this.y = y;
        this.foeImg = new Image();
        this.foeImg.src = FOE_IMG;
        this.foeImg.onload = () => this.canvasCtx.drawImage(this.foeImg, x, y, 32, 32);
    }
}