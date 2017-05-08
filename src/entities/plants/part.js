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
    traverse_bfs(callback){
        var queue=[this];
        var n;
        while(queue.length>0) {
            n = queue.shift();
            callback(n);
            if(!n.children.length){
                continue;
            }
            for(let child of n.children){
                queue.push(child);
            }
        }
        return this;
    }
    traverse_bfs_shuffle(callback){
        var queue=[this];
        var n;
        while(queue.length>0) {
            n = queue.shift();
            callback(n);
            if(!n.children.length){
                continue;
            }
            for(let child of n.children){
                queue.push(child);
            }
        }
        return this;
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
            //reestablish tree stats
            this.traverse_bfs(n=>{
                this.plant.counts[n.type]--;
            });
            return this.parent;
        }
    }
    tick(){
        for(let child of this.children) {
            child.tick();
        }
        return this;
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