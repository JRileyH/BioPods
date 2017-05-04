Crafty.c("Block", {
    required: "2D, DOM, Mouse",
    init: function() {

    },
    events: {

    },
    create: function(id, info) {
        if(id!=undefined)
        this.addComponent("block-"+id.type+"-"+id.config);
        this.w = this.layout.dim.tw;
        this.h = this.layout.dim.th;
        this.x = info.x * this.w;
        this.y = info.y * this.h;
    }
});