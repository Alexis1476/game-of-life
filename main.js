class Cell{
    static width = 10;
    static height = 10;
    constructor(context,x,y){
        this.ctx = context;
        this.x = x;
        this.y = y;
    }
    draw() {
        this.ctx.fillStyle = '#FFF';
        this.context.fillRect(this.x * Cell.width, this.y * Cell.height,x,y);
    }
}
class Game{

}
// ctx.fillRect(10, 10, 10, 10);
// ctx.clearRect(10, 10, 10, 10);