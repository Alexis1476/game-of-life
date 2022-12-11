class Cell {
    static width = 10;
    static height = 10;

    constructor(context, y, x) {
        this.ctx = context;
        this.y = y;
        this.x = x;
        // TODO : Faire méthode pour choisir le mode aléatoire
        this.isAlive = Math.random() > 0.5;
    }

    stillAlive(neighborsAlive) {
        if (this.isAlive) {
            // Mort par sous-population |  Mort par sur-population
            if (neighborsAlive <= 1 || neighborsAlive >= 4) {
                this.isAlive = false;
            }
        } else {
            // Naissance par réproduction
            if (neighborsAlive === 3) {
                this.isAlive = true;
            }
        }
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
                this.cells[y][x] = (new Cell(this.ctx, y, x));
            }
        }
    }

    neighbors(cell) {
        let neighborsAlive = 0;

        const isInside = (value) => {
            if (value >= 0 && value < this.rows || value >= 0 && value < this.columns)
                return true;
        };

        const neighbor = (firstIndex, secondIndex) => {
            if (!isInside(firstIndex) || !isInside(secondIndex))
                return;

            if (this.cells[firstIndex][secondIndex].isAlive)
                neighborsAlive++;
        }

        // Top
        neighbor(cell.y - 1, cell.x - 1);// Left
        neighbor(cell.y - 1, cell.x);// Middlee
        neighbor(cell.y - 1, cell.x + 1);// Right
        // Middle
        neighbor(cell.y, cell.x - 1);// Left
        neighbor(cell.y, cell.x + 1);// Right
        // Bottom
        neighbor(cell.y + 1, cell.x - 1);// Left
        neighbor(cell.y + 1, cell.x);// Middlee
        neighbor(cell.y + 1, cell.x + 1);// Right

        return neighborsAlive;
    }

    draw() {
        this.cells.map(row => row.forEach(cell => cell.draw()));
    }

    play() {
        let nextGen = this.cells.map((row) => row.map((cell) => Object.assign(new Cell(), cell)));

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                nextGen[i][j].stillAlive(this.neighbors(this.cells[i][j]));
            }
        }
        this.cells = [...nextGen];
        this.draw();
    }
}

let canvas = document.getElementById('canvas');
let grid = new Grid(canvas, 500, 500);

function play() {
    grid.play();
}

setInterval(play, 300)