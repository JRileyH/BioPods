var Point = require('../../geom').default.Point;

export default class Plant {
    constructor(props) {
        var p;
        this.availableId = 0;
        this.maxLevel = 1;

        p = props.stem;
        this.stem = {
            length: p.length,
            width: p.width,
            max: p.max,
            count: 0,
        }
        p = props.leaf;
        this.leaf = {
            length: p.length,
            width: p.width,
            sharpness: p.sharpness,
            max:  p.max,
            count: 0
        }
        p = props.meristem;
        this.meristem = {
            growthRate: p.growthRate,
            branchRate: p.branchRate,
            curlRate: p.curlRate,
            max: p.max,
            count: 0
        }
        p = props.joint;
        this.joint = {
            length: p.length,
            width: p.width,
            angle: p.angle,
            max: p.max,
            count: 0
        }
        p = props.flower;
        this.flower = {
            radius: p.radius,
            max: p.max,
            count: 0
        }

        if(props.new) {
            this.pos = props.pos;
            this.seed = new (require('./seed').default)(this, null, {pos:this.pos.copy(),dir:0});
            this.seed.make('meristem',
            {
                pos: this.seed.pos.copy(0,-this.stem.length),
                dir:0
            });
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
            maxMeristem: this.maxMeristem,
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
    tick(){
        this.seed.tick()
    }
    grow(){
        this.seed.grow();
    }
    render(ctx){
        this.seed.render(ctx);
    }
}