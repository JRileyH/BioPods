var Line = require('../../geom').default.Line;

export default class Stem extends require('./part').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="stem";
        this.line = new Line(this.parent.pos, this.pos);
    }
    render(ctx){
        super.render(ctx);
        this.line.render(ctx);
    }

}