window.opposites = {
    up:'down',
    down:'up',
    left:'right',
    right:'left'
}
window.plantMatter = new Array();
for(let x = 0; x < gameInfo.WIDTH/gameInfo.TILE_WIDTH; x++){
    plantMatter.push(new Array());
    for(let y = 0; y < gameInfo.HEIGHT/gameInfo.TILE_HEIGHT; y++){
        plantMatter[x].push(false)
    }
}

Crafty.c("Seed", {
    required: "2D, DOM, Color",
    init: function() {
        this.type="seed";
        this.progeny = [];
        this.color('purple');
        this.w = gameInfo.TILE_WIDTH;
        this.h = gameInfo.TILE_HEIGHT;
        this.level = 0;
    },
    place: function(plant, props) {
        this.plant = plant;
        this.x = props.x*gameInfo.TILE_WIDTH;
        this.y = props.y*gameInfo.TILE_HEIGHT;
        this.progeny = [Crafty.e("Meristem").place(this.plant, this, {x:props.x, y:props.y-1, direction:'up'})];
        return this;
    },
    grow: function() {
        for(let p of this.progeny) {
            p.grow();
        }
    }
});

Crafty.c("Meristem", {
    required: "2D, DOM, Color",
    init: function() {
        this.type="meristem";
        this.color('blue');
        this.chanceToGrow = null;
        this.w = gameInfo.TILE_WIDTH;
        this.h = gameInfo.TILE_HEIGHT;
    },
    place: function(plant, source, props) {
        this.plant = plant;
        this.progenitor = source;
        this.level = source.level+1;
        this.x = props.x*gameInfo.TILE_WIDTH;
        this.y = props.y*gameInfo.TILE_HEIGHT;
        if(plantMatter[props.x][props.y]) {
            source.canGrow = false;
            this.destroy(); 
        } else {
            plantMatter[props.x][props.y] = true;
        }
        this.direction = props.direction;
        return this;
    },
    grow: function(){
        if(this.getChanceToGrow()>Math.floor(Math.random()*100)) {
            this._grow();
        }
    },
    getChanceToGrow: function() {
        //if(this.chanceToGrow!=null) return this.chanceToGrow;
        var chance = 100;
        var node = this.progenitor;
        while(chance > 0) {
            if(node.type==="seed") break;
            chance-=5;
            node = node.progenitor;
            console.log(node.type);
        }
        this.chanceToGrow = chance;
        console.log(this.chanceToGrow)
        return this.chanceToGrow;
    },
    getChanceToBranch: function() {
        var chance = 0;
        var node = this.progenitor;
        while(chance <= 100) {
            if(node.type==="meristem" || node.type==="seed") break;
            chance+=10;
            node = node.progenitor;
        }
        this.chanceToBranch = chance;
        return this.chanceToBranch;
    },
    _grow: function() {
        //this.chanceToGrow = null;
        var thisId = this.getId();
        if(this.getChanceToBranch()>Math.floor(Math.random()*100)) {
            var newStem = Crafty.e("Meristem").place(this.plant, this.progenitor, {x:this.x/gameInfo.TILE_WIDTH, y:this.y/gameInfo.TILE_HEIGHT, direction:'right'});
        } else {
            var newStem = Crafty.e("Stem").place(this.plant, this);
        }
        this.progenitor.progeny = this.progenitor.progeny.filter(function(x){ return x.getId() !== thisId})
        this.progenitor.progeny.push(newStem);
        this.progenitor = newStem;
        this.level++;
        switch(this.direction){
            case 'up':
                this.y -= gameInfo.TILE_HEIGHT;
            break;
            case 'down':
                this.y += gameInfo.TILE_HEIGHT;
            break;
            case 'left':
                this.x -= gameInfo.TILE_WIDTH;
            break;
            case 'right':
                this.x += gameInfo.TILE_WIDTH;
            break;
        }
    }
});

Crafty.c("Stem", {
    required: "2D, DOM, Color",
    init: function() {
        this.type="stem";
        this.progeny = [];
        this.color('green');
        this.w = gameInfo.TILE_WIDTH;
        this.h = gameInfo.TILE_HEIGHT;
    },
    place: function(plant, source, props) {
        this.plant = plant;
        this.progeny = [source];
        this.level = source.level;
        this.progenitor = source.progenitor;
        this.x = source.x;
        this.y = source.y;
        this.direction = source.direction;
        return this;
    },
    grow: function() {
        for(let p of this.progeny) {
            p.grow();
        }
    }
});

Crafty.s("Vine", {
    init: function() {
        this.seed = Crafty.e("Seed").place(this, {x:20,y:40});
    },
    grow: function() {
        this.seed.grow();
    }
});