export default class Seed extends require('./part').default {
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="seed";
        this.children.push(new (require('./meristem').default)(this.plant,this,{pos: this.pos.copy(0,-this.plant.segmentLength),dir:0}))
    }
    render(ctx){
        super.render(ctx);
        this.pos.render(ctx);
    }
}