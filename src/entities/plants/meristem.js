export default class Meristem extends require('./part').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="meristem";
        this._ctb=null;//stored chance to branch to save processing
    }
    _chanceToBranch(){
        if(!!this._ctb) return this._ctb;
        var node = this.parent;
        var chance = 0.0;
        while(node.type==="stem") {
            node = node.parent;
            chance+=this.plant.branchRate;
        }
        this._ctb=chance;
        return chance;
    }
    grow(){
        super.grow();
        if(Math.chance(1-(this.plant.growthRate*this.level))){
            this._ctb=null;
            //create new stem or joint
            var newStem = Math.chance(this._chanceToBranch())
                ? new (require('./joint').default)(this.plant, this.parent, {pos:this.pos.copy(), dir: this.dir})
                : new (require('./stem').default)(this.plant, this.parent, {pos:this.pos.copy(), dir: this.dir})
            //rearrange parents and children
            this.parent.destroyChild(this.id);
            this.parent.children.push(newStem);
            this.parent = newStem;
            this.parent.children.push(this);
            this.level++;
            //alter self
            this.pos.slide(
                Math.floor(this.plant.segmentLength*Math.sin(Math.toRad(this.dir))),
                -Math.floor(this.plant.segmentLength*Math.cos(Math.toRad(this.dir)))
            )
            this.dir = this.dir + Math.span(-this.level,this.level);

        }
    }
}