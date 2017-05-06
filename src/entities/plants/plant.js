export default class Plant {
    constructor(x, y) {
        this.availableId = 0;
        this.segmentLength = 10;
        this.x=x;
        this.y=y;
        this.seed = new (require('./seed').default)(this, null, {x:this.x,y:this.y,dir:0});
    }
    grow(){
        this.seed.grow();
    }
    render(){
        var ctx = gameInfo.CANVAS.getContext("2d");
        ctx.clearRect(0,0,gameInfo.WIDTH,gameInfo.HEIGHT);
        this.seed.render(ctx);
    }
}