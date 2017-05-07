export default class ToolBox {
    constructor() {
        this.pruner = new (require('./pruner').default)();
        this.clicked = false;
        this.select("pruner");
    }
    select(tool){
        switch(tool){
            case "pruner":
                this.selected = this.pruner;
            break;
            default:
            console.error("Unknown tool selected: "+tool);
        }
        gameInfo.CANVAS.addEventListener("mousedown", e=>{this.clicked=true;this.selected.mousedown(e)})
        gameInfo.CANVAS.addEventListener("mouseup", e=>{this.clicked=false;this.selected.mouseup(e)})
        gameInfo.CANVAS.addEventListener("mousemove", e=>{if(this.clicked)this.selected.mousedrag(e)})
    }
    render(ctx){
        this.selected.render(ctx);
    }
}