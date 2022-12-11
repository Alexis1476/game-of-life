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
        this.ctx.fillStyle = this.isAlive ? '#000' : '#FFF';
        this.ctx.fillRect(this.x * Cell.width, this.y * Cell.height, Cell.width, Cell.height);
    }
}

class Grid {
    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.border = 'solid 1px black'

        this.ctx = canvas.getContext('2d');
        this.columns = canvas.width / Cell.width;
        this.rows = canvas.height / Cell.height;

        this.cells = new Array(this.columns).fill(null).map(() =>
            new Array(this.rows).fill(0));

        this.init();
    }

    init() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                this.cells[y][x] = (new Cell(this.ctx, x, y));
            }
        }
    }

    checkNeighbourhood() {
        // TODO : Mettre en place les règles du jeu
    }

    draw() {
        this.cells.map((row) => row.forEach(cell => cell.draw()));
    }
}

let canvas = document.getElementById('canvas');
let grid = new Grid(canvas, 500, 500);
grid.draw();