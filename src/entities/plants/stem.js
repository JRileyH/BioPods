export default class Stem extends require('./segment').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="stem";
        this.plant.counts.stem++;
    }
    render(ctx){
        super.render(ctx);
    }

}