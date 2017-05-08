export default class Leaf extends require('./segment').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="leaf";
        this.plant.counts.leaf++;
        this.fallen = false;
        this.belowGround = false;
        this.tip = this.pos.copy(
            Math.floor(this.plant.leafLength*Math.sin(Math.toRad(this.dir))),
            -Math.floor(this.plant.leafLength*Math.cos(Math.toRad(this.dir)))
        )
        this.edge1 = this.pos.copy(
            Math.floor((this.plant.leafLength/this.plant.leafSharpness)*Math.sin(Math.toRad(this.dir+this.plant.leafWidth))),
            -Math.floor((this.plant.leafLength/this.plant.leafSharpness)*Math.cos(Math.toRad(this.dir+this.plant.leafWidth)))
        )
        this.edge2 = this.pos.copy(
            Math.floor((this.plant.leafLength/this.plant.leafSharpness)*Math.sin(Math.toRad(this.dir-this.plant.leafWidth))),
            -Math.floor((this.plant.leafLength/this.plant.leafSharpness)*Math.cos(Math.toRad(this.dir-this.plant.leafWidth)))
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