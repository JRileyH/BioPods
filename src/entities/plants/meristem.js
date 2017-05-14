export default class Meristem extends require('./part').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="meristem";
        this._ctb=null;//stored chance to branch to save processing
        this._count();
    }
    _chanceToBranch(){
        if(!!this._ctb) return this._ctb;
        var node = this.parent;
        var chance = 0.0;
        while(node.type==="stem") {
            node = node.parent;
            chance+=this.props.branchRate;
        }
        this._ctb=chance;
        return chance;
    }
    grow(){
        super.grow();
        if(Math.chance(1-(this.props.growthRate*this.level))){
            this._ctb=null;
            this.leave(Math.chance(this._chanceToBranch()) ? 'joint' : 'stem',
            ()=>{
                this.dir = this.dir + Math.span(-Math.floor(this.level*this.props.curlRate),Math.floor(this.level*this.props.curlRate));
            })
        }
    }
}