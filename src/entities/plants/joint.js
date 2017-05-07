export default class Joint extends require('./segment').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="joint";
        this.plant.counts.joint++;
        var leafDir = Math.chance(0.5) ? this.dir+30 : this.dir-30;
        this.children.push(new (require('./leaf').default)(this.plant, this, {pos:this.pos.copy(
            Math.floor(this.plant.segmentLength*Math.sin(Math.toRad(leafDir))),
            -Math.floor(this.plant.segmentLength*Math.cos(Math.toRad(leafDir)))
        ),dir:leafDir}));
    }
    _chanceToBranch(){
        var closestMaristem = 999;
        this.traverse_bfs(n=>{
            if(n.type==="meristem"){
                closestMaristem = Math.min(closestMaristem,n.level);
            }
        });
        return Math.chance(0.01*closestMaristem);
    }
    grow(){
        super.grow();
        if(this.plant.counts.meristem<10 && this._chanceToBranch()){
            for(let c of this.children){
                if(c.type==="leaf") c.destroy();
            }
            this.children.push(new (require('./meristem').default)(this.plant,this,{pos: this.pos.copy(0,-this.plant.segmentLength),dir:Math.chance(0.5)?this.dir+30:this.dir-30}))
        }
    }
}