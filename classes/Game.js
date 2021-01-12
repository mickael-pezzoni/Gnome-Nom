import { KEY } from "../const/const.js";
import { Tray } from "./Tray.js";

export class Game {

    constructor() {
        this.tray = new Tray();
        this.pressKey = {
            [KEY.ARROW_UP]: false,
            [KEY.ARROW_LEFT]: false,
            [KEY.ARROW_RIGHT]: false,
            [KEY.ARROW_DOWN]: false
        };
        document.addEventListener('keydown', (e) => {
            if (e.key in this.pressKey) {
                this.pressKey[e.key] = true;
                console.log(this.pressKey);
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key in this.pressKey) {
                this.pressKey[e.key] = false;
                console.log(this.pressKey);
            }

        });
        

    }

    initGame() {
        
    }
}