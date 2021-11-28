import {Module} from '../core/module'
import * as Utils from '../utils';

export class ShapeModule extends Module {
    #colors
    static TYPE = 'ShapeModule';
    static TEXT = 'Создать фигуру';

    constructor() {
    super(ShapeModule.TYPE, ShapeModule.TEXT)
    this.#colors = [   '#E6D72A', '#5BC8AC', '#98DBC6', 
                    '#FEFE22', '#fi62ff', '#ffcce7', 
                    '#fe3a9e', '#FBA0E3','#FF00FF', 
                    '#DA70D6','#EEBEF1', '#CD00CD'];
    }

    getRendomColor = () => {
        const index = Utils.random(0, this.#colors.length);
        return this.#colors[index];
    }

    createNewShape = () => {
        const newShape = document.createElement('div');
        newShape.className = 'egg';
        newShape.display = 'block';
        newShape.style.webkitBorderRadius = '63px 63px 63px 63px / 108px 108px 72px 72px';
        newShape.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%' ;
    
        const top = Utils.random(0, 50);
        const left = Utils.random(0, 100);
        newShape.style.marginTop = `${top}%`;
        newShape.style.marginLeft = `${left}%`;
    
        const widthShape = Utils.random(20, 60);
        const heightShape = widthShape * 1.5;
        
        newShape.style.width = `${widthShape}rem`; 
        newShape.style.height = `${heightShape}rem`;
    
        const color = this.getRendomColor();
        newShape.style.backgroundColor = color;
    
        return document.body.append(newShape);
    }

    trigger() {
        document.body.addEventListener('click',() => {
            const oldShape = document.querySelector('div');
            if(oldShape){
                oldShape.remove();
            }
        
            this.createNewShape();
        })
    }
}