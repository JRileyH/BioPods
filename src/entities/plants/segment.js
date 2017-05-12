var Line = require('../../geom').default.Line;
export default class Segment extends require('./part').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.line = new Line(this.parent.pos, this.pos);
        this.width = 1;
    }
    grow(){
        super.grow();
        this.width = this.props.width - Math.floor(this.level/(this.plant.maxLevel / this.props.width));
        this.width = Math.min(this.width, this.plant.maxLevel-10);
    }
    render(ctx){
        super.render(ctx);
        this.line.render(ctx, this.width <= 2
            ? "#64873a" :
            this.width <= 4
                ? "#606d41"
                : "#5b4f3b"
        , this.width);
    }
}