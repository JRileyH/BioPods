var Geom = require('../../geom').default;

export default class Pruner extends require('./tool').default{
    constructor() {
        super();
        this.line = new Geom.Line(new Geom.Point(0,0), new Geom.Point(0.0));
        this.length = 20;
        this.active = false;
    }
    mousedown(event){
        super.mousedown(event);
        this.line.p1.move(event.layerX, event.layerY);
        this.line.p2.move(event.layerX, event.layerY);
        this.active = true;
    }
    mouseup(event){
        super.mouseup(event);
        //find and cut a branch
        this.line.p2.move(event.layerX, event.layerY);
        this.searchSegments(plant1.seed);
        this.active = false;
    }
    mousedrag(event){
        super.mousedrag(event);
        var angle = Math.atan2(event.layerY - this.line.p1.y, event.layerX - this.line.p1.x);
        this.line.p2.move(
            this.line.p1.x+Math.floor(this.length*Math.cos(angle)),
            this.line.p1.y+Math.floor(this.length*Math.sin(angle))
        );
    }
    searchSegments(parent){
        for(let segment of parent.children){
            if(segment.type==="stem"){
                if(this.line.intersects(segment.line)){
                    segment.destroy();
                    return;
                }
            }
            this.searchSegments(segment);
        }
    }
    render(ctx){
        super.render(ctx);
        if(this.active){
            this.line.render(ctx);
        }
    }
}