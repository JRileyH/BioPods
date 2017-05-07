export default class Line {
    constructor(p1,p2) {
        if((!!p1||!!p2)&&(p1.geom!=='point'||p2.geom!=='point'))console.error("Geom.Line must accept two Geom.Points!!!");
        this.geom = "line"
        this.p1 = p1;
        this.p2 = p2;
    }
    slope(){
        return Math.atan2(p2.y - p1.y, p2.x - p1.x);
    }
    intersects(other){
        var s1_x = this.p2.x - this.p1.x;
        var s1_y = this.p2.y - this.p1.y;
        var s2_x = other.p2.x - other.p1.x;
        var s2_y = other.p2.y - other.p1.y;
        var s = (-s1_y * (this.p1.x - other.p1.x) + s1_x * (this.p1.y - other.p1.y)) / (-s2_x * s1_y + s1_x * s2_y);
        var t = ( s2_x * (this.p1.y - other.p1.y) - s2_y * (this.p1.x - other.p1.x)) / (-s2_x * s1_y + s1_x * s2_y);
        return s >= 0 && s <= 1 && t >= 0 && t <= 1;
    }
    render(ctx){
        ctx.beginPath();
        ctx.moveTo(this.p1.x,this.p1.y);
        ctx.lineTo(this.p2.x,this.p2.y);
        ctx.stroke();
    }
}