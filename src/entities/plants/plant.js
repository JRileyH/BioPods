export default class Plant {
    constructor(pos) {
        this.availableId = 0;
        this.segmentLength = 10;
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