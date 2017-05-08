var Point = require('../../geom').default.Point;

export default class Plant {
    constructor(props) {
        this.availableId = 0;
        this.maxLevel = 1;
        this.segmentLength = props.segmentLength;
        this.leafLength = props.leafLength;
        this.leafSharpness = props.leafSharpness;
        this.leafWidth = props.leafWidth;
        this.trunkWidth = props.trunkWidth;
        this.growthRate = props.growthRate;
        this.branchRate = props.branchRate;
        this.counts = {stem:0,meristem:0,joint:0,leaf:0}
        if(props.new) {
            this.pos = props.pos;
            this.seed = new (require('./seed').default)(this, null, {pos:this.pos.copy(),dir:0});
            this.seed.children.push(new (require('./meristem').default)(this,this.seed,{pos: this.seed.pos.copy(0,-this.segmentLength),dir:0}))
        } else {
            this.pos = new Point(props.x, props.y);
            this.seed = this._nodifyJson(props.seed, null)
        }
    }
    _nodifyJson(j, p){
        var node = new (require('./'+j.type).default)(this, p, {pos:new Point(j.x, j.y),dir:j.dir});
        for(let c of j.children){
            node.children.push(this._nodifyJson(c, node));
        }
        return node;
    }
    _jsonifyNode(n){
        var json = {
            type: n.type,
            x: n.pos.x,
            y: n.pos.y,
            dir: n.dir,
            children:[]
        }
        for(let c of n.children){
            json.children.push(this._jsonifyNode(c));
        }
        return json;
    }
    jsonify(){
        var plant = {
            new: false,
            x: this.pos.x,
            y: this.pos.y,
            availableId: this.availableId,
            maxLevel: this.maxLevel,
            segmentLength: this.segmentLength,
            leafLength: this.leafLength,
            leafSharpness: this.leafSharpness,
            leafWidth: this.leafWidth,
            trunkWidth: this.trunkWidth,
            growthRate: this.growthRate,
            branchRate: this.branchRate,
            seed:{
                type:"seed",
                x: this.seed.pos.x,
                y: this.seed.pos.y,
                dir: this.seed.dir,
                children:[]
            },
        }
        for(let n of this.seed.children){
            plant.seed.children.push(this._jsonifyNode(n));
        }
        return plant;
    }
    reset(){
        //TODO: I have to find a way to find the max level after a prune that doesn fuck up with gameloops using the max level ansynchronously.. or do I?
    }
    grow(){
        this.seed.grow();
    }
    render(ctx){
        this.seed.render(ctx);
    }
}