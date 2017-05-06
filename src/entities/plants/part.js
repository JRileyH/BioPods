export default class PlantPart {
    constructor(plant, source, props) {
        this.type = "untyped";
        this.plant = plant;
        this.id = this.plant.availableId++;
        this.parent = source;
        this.children = [];
        this.level = !!source ? source.level+1 : 0;
        if(this._verifyProps(props)) {
            this.x = props.x;
            this.y = props.y;
            this.dir = this._clampDir(props.dir);
        }
    }
    _verifyProps(props) {
        if(!props.hasOwnProperty('x')) {console.error("MISSING PROPS.X"); return false;}
        if(!props.hasOwnProperty('y')) {console.error("MISSING PROPS.Y"); return false;}
        if(!props.hasOwnProperty('dir')) {console.error("sMISSING PROPS.DIR"); return false;}
        return true;
    }
    _clampDir(dir){
        var clamped = dir % 360
        if(clamped < 0) clamped += 360;
        return clamped;
    }
    removeChild(id){
        this.children = this.children.filter(function(x){ return x.id != id; });
    }
    grow(){
        for(let child of this.children) {
            child.grow();
        }
    }
    render(ctx){
        for(let child of this.children) {
            child.render(ctx);
        }
        if(!!this.parent){
            ctx.beginPath();
            ctx.moveTo(this.parent.x,this.parent.y)
            ctx.lineTo(this.x,this.y);
            ctx.stroke();
        }
    }
}