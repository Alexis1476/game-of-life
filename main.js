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

class Grid{
    constructor(canvas, width, height){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        canvas.style.border = 'solid 1px black'
    }
    draw(){
        
    }
}

let canvas = document.getElementById('canvas');
let game = new Grid(canvas, 500, 500);

// ctx.fillRect(10, 10, 10, 10);
// ctx.clearRect(10, 10, 10, 10);