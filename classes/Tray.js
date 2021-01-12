import { SIZE, CASTLE_IMG } from "../const/const.js";
import { Bomb } from "./Bomb.js";
import { Perso } from "./Perso.js";

export class Tray {

    canvas = null;
    image = null;
    bomn = null;

    constructor() {
        this.createCanva();
    }

    createCanva() {
        this.canvas = document.createElement('canvas');
        document.body.append(this.canvas);

        this.image = new Image();
        this.image.src = CASTLE_IMG;

        this.canvas.height = this.canvas.width = SIZE;
        this.context = this.canvas.getContext('2d');
        this.image.onload = () => {
            this.context.drawImage(this.image, 0, 0, SIZE, SIZE);
            this.bomb = new Bomb(this.context);
            this.hero = new Perso(this.context);
        }
    }
    
}