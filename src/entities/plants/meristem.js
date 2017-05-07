export default class Meristem extends require('./part').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="meristem";
    }
    grow(){
        super.grow();
        if(Math.chance(1-(0.02*this.level))){
        //create new stem
        var newStem = new (require('./stem').default)(this.plant, this.parent, {pos:this.pos.copy(), dir: this.dir});
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
        //add a maristem?
        if(Math.chance(0.1))
        this.parent.children.push(new (require('./meristem').default)(this.plant, this.parent, {pos:this.pos.copy(), dir: Math.chance(0.5)?this.dir+30:this.dir-30}));
        }
    }
}