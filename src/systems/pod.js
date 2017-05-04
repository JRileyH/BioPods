//Ship System Definition
Crafty.s("Pod", {
    init: function() {
        this.layout = null;
    },
    events: {

    },

    _outline: function(w, h) {
        for(let y = 0; y < h; y++) {
            for(let x = 0; x < w; x++) {
                if(y===0 || x===0 || y===h-1 || x===w-1){
                    this.layout.blocks.push({type: 0, config: 1})
                } else {
                    this.layout.blocks.push({type: 0, config: 0})
                }
            }
        }
        return this;
    },
    _speckle: function(w, h, c){
        for(let y = 1; y < h-1; y++) {
            for(let x = 1; x < w-1; x++) {
                let chance = c;
                if(Math.random()<chance) this.layout.blocks[(y*w)+x].config = 1;
            }
        }
        return this;
    },
    _fillout: function(w, h, n){
        for(let i = 0; i < n; i++){
            for(let y = 1; y < h-1; y++) {
                for(let x = 1; x < w-1; x++) {
                    let chance = 0;
                    if(this.layout.blocks[((y-1)*w)+(x-1)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y-1)*w)+(x+1)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y+1)*w)+(x-1)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y+1)*w)+(x+1)].config>0) chance+=0.125;

                    if(this.layout.blocks[((y-1)*w)+(x)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y+1)*w)+(x)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y)*w)+(x-1)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y)*w)+(x+1)].config>0) chance+=0.125;

                    if(Math.random()<chance) this.layout.blocks[(y*w)+x].config = 1;
                }
            }
        }
        return this;
    },
    _fillin: function(w, h) {
        for(let y = 1; y < h-1; y++) {
            for(let x = 1; x < w-1; x++) {
                var borders = {t: false, b: false, l: false, r:false, total: 0};
                if(this.layout.blocks[((y)*w)+(x)].config==1) continue;
                if(this.layout.blocks[((y-1)*w)+(x)].config==1) {borders.total++; borders.t = true;}
                if(this.layout.blocks[((y+1)*w)+(x)].config==1) {borders.total++; borders.b = true;}
                if(this.layout.blocks[((y)*w)+(x-1)].config==1) {borders.total++; borders.l = true;}
                if(this.layout.blocks[((y)*w)+(x+1)].config==1) {borders.total++; borders.r = true;}

                if(borders.total>2) {
                    this.layout.blocks[(y*w)+x].config = 1;
                } else if(borders.total===2) {
                    switch(true){
                        case (borders.t&&borders.l):
                            this.layout.blocks[(y*w)+x].config = 2;
                        break;
                        case (borders.b&&borders.r):
                            this.layout.blocks[(y*w)+x].config = 3;
                        break;
                        case (borders.b&&borders.l):
                            this.layout.blocks[(y*w)+x].config = 4;
                        break;
                        case (borders.t&&borders.r):
                            this.layout.blocks[(y*w)+x].config = 5;
                        break;
                    }
                }
                
            }
        }
        return this;
    },

    generateBlocks: function(w, h) {
        return this.
            _outline(w, h).
            _speckle(w, h, 0.01).
            _fillout(w, h, 4).
            _fillin(w, h);
    },

    generateLayout: function(){
        this.layout = {
            dim: {
                w: Math.floor(gameInfo.WIDTH/gameInfo.TILE_WIDTH),
                h: Math.floor(gameInfo.HEIGHT/gameInfo.TILE_HEIGHT),
                tw: gameInfo.TILE_WIDTH,
                th: gameInfo.TILE_HEIGHT
            },
            blocks: []
        }
        return this.
            generateBlocks(this.layout.dim.w, this.layout.dim.h);
    },
    build: function(layout){
        return this.
            generateLayout().
            buildBlocks(this.layout)

    },
    buildBlocks: function(layout) {
        var info = {x: 0, y: 0};
        for(let id of layout.blocks) {
            this.layout.blocks.push(Crafty.e("Block").attr({layout: layout}).create(id, info));
            if(info.x >= layout.dim.w-1) {
                info.x = 0;
                info.y++;
            } else if (info.y < layout.dim.h){
                info.x++;
            } else {
                break;
            }
        }
        return this;
    }
});