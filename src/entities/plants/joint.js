export default class Joint extends require('./segment').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="joint";
        this._count();
        var leafDir = Math.chance(0.5) ? this.dir+this.props.angle : this.dir-this.props.angle;
        this.make('leaf',
        {
            pos:this.pos.copy(
                Math.floor(this.plant['stem'].length*Math.sin(Math.toRad(leafDir))),
                -Math.floor(this.plant['stem'].length*Math.cos(Math.toRad(leafDir)))
            ),
            dir:leafDir
        });

        this.flowering = false;
        
    }
    _chanceToBranch(){
        var closestMaristem = 999;
        this.traverse_bfs(n=>{
            if(n.type==="meristem"){
                closestMaristem = Math.min(closestMaristem,n.level);
            }
        });
        return Math.chance(0.01*closestMaristem);
    }
    grow(){
        super.grow();
        if(this._chanceToBranch()){
            this.make('meristem',
            {
                pos: this.pos.copy(0,-this.plant.segmentLength),
                dir:Math.chance(0.5)?this.dir+this.props.angle:this.dir-this.props.angle
            },
            ()=>{
                for(let c of this.children){
                    if(c.type==="leaf") c.destroy();
                }
            });
        }

        if(!this.flowering) {
            this.make('flower',
            {
                pos:this.pos.copy(),
                dir:0
            });
            this.flowering = true;
        }
    }
}