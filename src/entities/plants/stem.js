export default class Stem extends require('./segment').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="stem";
        this._count();
    }
}