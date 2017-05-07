export default class Plant {
    constructor(pos) {
        this.availableId = 0;
        this.segmentLength = 20;
        this.growthRate = 0.03;//higher is less growth
        this.branchRate = 0.1;
        this.pos = pos;
        this.seed = new (require('./seed').default)(this, null, {pos:this.pos.copy(),dir:0});
    }
    grow(){
        this.seed.grow();
    }
    render(ctx){
        this.seed.render(ctx);
    }
}