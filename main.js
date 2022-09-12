class Cell {
    static width = 10;
    static height = 10;
    constructor(context, x, y) {
        this.ctx = context;
        this.x = x;
        this.y = y;
        // TODO : Faire méthode pour choisir le mode aléatoire
        this.isAlive = Math.random() > 0.5;
    }
    draw() {
        let color;
        color = this.isAlive ? '#000' : '#FFF';
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x * Cell.width, this.y * Cell.height, Cell.width, Cell.height);
    }
}

class Grid {
    constructor(canvas, width, height) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.cells = [];

        canvas.width = width;
        canvas.height = height;
        canvas.style.border = 'solid 1px black'
        this.init();
    }
    init() {
        let columns = canvas.width / Cell.width;
        let rows = canvas.height / Cell.height;

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                this.cells.push(new Cell(this.ctx, x, y));
            }
        }
    }
    checkNeighbourhood() {
        // TODO : Mettre en place les règles du jeu

    }
    draw() {
        this.cells.forEach(cell => {
            cell.draw();
        });
    }
}

let canvas = document.getElementById('canvas');
let grid = new Grid(canvas, 500, 500);
grid.draw();