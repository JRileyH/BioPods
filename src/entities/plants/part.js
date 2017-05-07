export default class PlantPart {
    constructor(plant, source, props) {
        this.type = "untyped";
        this.plant = plant;
        this.id = this.plant.availableId++;
        this.parent = source;
        this.children = [];
        this.level = !!source ? source.level+1 : 0;
        if(this._verifyProps(props)) {
            this.pos = props.pos;
            this.dir = this._clampDir(props.dir);
        }
    }
    _verifyProps(props) {
        if(!props.hasOwnProperty('pos')&&props.pos.geom==="point") {console.error("MISSING PROPS.POS"); return false;}
        if(!props.hasOwnProperty('dir')) {console.error("MISSING PROPS.DIR"); return false;}
        return true;
    }
    _clampDir(dir){
        var clamped = dir % 360
        if(clamped < 0) clamped += 360;
        return clamped;
    }
    destroyChild(id){
        this.children = this.children.filter(function(x){ return x.id != id; });
        return this;
    }
    destroy(){
        if(this.id===0){
            return this;//this is root
        } else {
            this.parent.destroyChild(this.id);
            return this.parent;
        }
    }
    grow(){
        for(let child of this.children) {
            child.grow();
        }
        return this;
    }
    render(ctx){
        for(let child of this.children) {
            child.render(ctx);
        }
        return this;
    }
}