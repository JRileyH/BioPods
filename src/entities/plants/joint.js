export default class Joint extends require('./stem').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="joint";
        this.plant.counts.joint++;
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
            this.children.push(new (require('./meristem').default)(this.plant,this,{pos: this.pos.copy(0,-this.plant.segmentLength),dir:Math.chance(0.5)?this.dir+30:this.dir-30}))
        }
    }
    render(ctx){
        super.render(ctx);
        if(this.children.length<=1)
            this.pos.render(ctx);
    }

}