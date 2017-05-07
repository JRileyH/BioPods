export default class Joint extends require('./stem').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="joint";
    }
    _findClosestMeristem(){
        var queue=[this];
        var n;
        var closest = 999;
        while(queue.length>0) {
            n = queue.shift();
            if(n.type="meristem"){
                closest = Math.min(closest,n.level);
                continue;
            }
            for(let child of n.children){
                queue.push(child);
            }
        }
        return closest;
    }
    grow(){
        super.grow();
        if(Math.chance(0.01*this._findClosestMeristem()/this.children.length)){
            this.children.push(new (require('./meristem').default)(this.plant,this,{pos: this.pos.copy(0,-this.plant.segmentLength),dir:Math.chance(0.5)?this.dir+30:this.dir-30}))
        }
    }
    render(ctx){
        super.render(ctx);
        this.pos.render(ctx);
    }

}