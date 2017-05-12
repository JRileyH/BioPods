export default class Leaf extends require('./part').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="leaf";
        this.fallen = false;
        this.belowGround = false;
        this._count();

        this.tip = this.pos.copy(
            Math.floor(this.props.length*Math.sin(Math.toRad(this.dir))),
            -Math.floor(this.props.length*Math.cos(Math.toRad(this.dir)))
        )
        this.edge1 = this.pos.copy(
            Math.floor((this.props.length/this.props.sharpness)*Math.sin(Math.toRad(this.dir+this.props.width))),
            -Math.floor((this.props.length/this.props.sharpness)*Math.cos(Math.toRad(this.dir+this.props.width)))
        )
        this.edge2 = this.pos.copy(
            Math.floor((this.props.length/this.props.sharpness)*Math.sin(Math.toRad(this.dir-this.props.width))),
            -Math.floor((this.props.length/this.props.sharpness)*Math.cos(Math.toRad(this.dir-this.props.width)))
        )
        
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
                this.tip.slide(0,gameInfo.GRAVITY);
                this.edge1.slide(0,gameInfo.GRAVITY);
                this.edge2.slide(0,gameInfo.GRAVITY);
                if(this.pos>gameInfo.HEIGHT)this.belowGround=true;
            }
        }
    }
    render(ctx){
        if(!this.fallen) super.render(ctx);
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.quadraticCurveTo(this.edge1.x, this.edge1.y, this.tip.x, this.tip.y);
        ctx.quadraticCurveTo(this.edge2.x, this.edge2.y, this.pos.x, this.pos.y);
        ctx.fillStyle = "#1fa339"
        ctx.fill();
        ctx.fillStyle = "#000000"
    }
}