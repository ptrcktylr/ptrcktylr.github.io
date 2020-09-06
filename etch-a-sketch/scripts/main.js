function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomRGB() {
    return [getRandomInt(256), getRandomInt(256), getRandomInt(256)];
}

const gridContainer = document.querySelector('#gridContainer');
let color = getRandomRGB();

let n = 16, s = '', inputSize = 0;

function setUpGrid(grid_size) {
    for (let i = 0; i < grid_size * grid_size; i++) {
        s += `<div class="cell" style="width: ${500 / (grid_size * 5)}%; flex-grow: 1; background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});"`;
        s += '></div>'
    };

    gridContainer.innerHTML = s;
    const cellArray = [...document.querySelectorAll(".cell")];

    cellArray.forEach(cell => {
        cell.addEventListener("mouseover", function(event) {
            // change color when mouse over target
            let cellColor = this.style.backgroundColor.replace(/[^\d,]/g, '').split(',');

            cellColor[0] -= 26;
            cellColor[1] -= 26;
            cellColor[2] -= 26;

            this.style.backgroundColor = `rgb(${cellColor[0]},${cellColor[1]},${cellColor[2]})`;
        });
    });
}

function getGridSize() {
    while (inputSize < 1 || inputSize > 64 || typeof parseInt(inputSize) === NaN) {
        inputSize = prompt("Enter a new size for the NxN sketchpad (1-64)");  
    }
}

function resetGrid() {
    s = '';
    inputSize = 0;
    getGridSize();
    setUpGrid(inputSize);
}

function resetColor() {
    color = getRandomRGB();
    resetGrid();
}

setUpGrid(n);