export default class Point {
    constructor(x,y) {
        this.geom = "point";
        this.x = x;
        this.y = y;
    }
    copy(x,y){
        x=x||0;
        y=y||0;
        return new Point(this.x+x,this.y+y);
    }
    move(x,y){
        this.x=x;
        this.y=y;
        return this;
    }
    slide(x,y){
        this.x+=x;
        this.y+=y;
        return this;
    }
    render(ctx, color){
        ctx.fillStyle = color || "#000000";
        ctx.fillRect(this.x-2,this.y-2,4,4);
        ctx.fillStyle = "#000000";
    }
}