let grid;
let rows = 50;
let cols = 50;
let cell_size = 12;

function make2DArray(cols, rows) {
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

function countNeighbors(grid, i, j) {
	let sum = 0;
	for (let x = -1; x < 2; x++) {
		for (let y = -1; y < 2; y++) {
			let col = (i + x + cols) % cols;
			let row = (j + y + rows) % rows;
			sum += grid[col][row];
		}
	}
	sum -= grid[i][j];
	return sum;
}

function setup() {
	createCanvas(cols * cell_size, rows * cell_size);
	grid = make2DArray(cols, rows);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = floor(random(2));
		}
	}
}

function draw() {
	background(0);
	stroke(255);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			if (grid[i][j] == 1) {
				fill(255);
				// stroke(255);
			} else {
				fill(0);
				// stroke(0);
			}
			rect(i * cell_size, j * cell_size, cell_size, cell_size);
		}
	}

	let next = make2DArray(cols, rows);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let neighbours = countNeighbors(grid, i, j);
			let state = grid[i][j];

			if (state == 0 && neighbours == 3) {
				next[i][j] = 1;
			}
			else if (state == 1 && (neighbours < 2 || neighbours > 3)) {
				next[i][j] = 0;
			}
			else {
				next[i][j] = state;
			}
		}
	}

	grid = next;
}