let grid;
let rows = 30;
let cols = 30;
let cell_size = 20;

function make2DArray(cols, rows) {
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
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
}