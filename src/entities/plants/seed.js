export default class Seed extends require('./part').default {
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="seed";
        this.children.push(new (require('./meristem').default)(this.plant,this,{x:this.x,y:this.y-this.plant.segmentLength,dir:0}))
    }
}