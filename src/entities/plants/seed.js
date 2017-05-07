export default class Seed extends require('./part').default {
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="seed";
    }
    render(ctx){
        super.render(ctx);
        this.pos.render(ctx);
    }
}