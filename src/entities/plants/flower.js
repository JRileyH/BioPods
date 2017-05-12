export default class Flower extends require('./part').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="flower";
        this.fallen = false;
        this.belowGround = false;
        this.img = new Image().setSource('https://image.flaticon.com/icons/png/128/164/164826.png');
        this._count();
    }
    destroy(){
        this.fallen = true;
    }
    tick(){
        if(this.fallen){
            if(this.belowGround){
                super.destroy();
            } else {
                this.pos.slide(0,gameInfo.GRAVITY);
                for(let p of this.petals){
                    p.slide(0,gameInfo.GRAVITY)
                }
                if(this.pos>gameInfo.HEIGHT)this.belowGround=true;
            }
        }
    }
    render(ctx){
        if(!this.fallen) super.render(ctx);
        ctx.drawImage(this.img, this.pos.x-this.props.radius, this.pos.y-this.props.radius, this.props.radius*2, this.props.radius*2);
    }
}