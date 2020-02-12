function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function getRandomRGB(){
    return [getRandomInt(256),getRandomInt(256),getRandomInt(256)];
}



const gridContainer = document.querySelector('#gridContainer');
let color = getRandomRGB();


let n = 16, s = '';


for (let i = 0; i < n*n; i++) {
    s += `<div class="cell" style="width: ${500/(n*5)}%; flex-grow: 1; background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});"`;
    s += '></div>'
};


gridContainer.innerHTML = s;

const cellsArray = [...document.querySelectorAll(".cell")];

cellsArray.forEach(cell => {
    cell.addEventListener("mouseover", function( event ) {  

        // change color when mousedover target
        this.style.backgroundColor = "black";
      }, false);
});

function resetGrid() {
    s = '';

    let input = prompt("Enter a new size for the NxN sketchpad (1-64)")
    while (input < 1 || input > 64) {
        input = prompt("Enter a new size for the NxN sketchpad (1-64)")
    }

    for (let i = 0; i < input*input; i++) {
        s += `<div class="cell" style="width: ${500/(input*5)}%; flex-grow: 1; background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});"`;
        s += '></div>'
    };

    gridContainer.innerHTML = s;

    const cellsArray = [...document.querySelectorAll(".cell")];

    cellsArray.forEach(cell => {
    cell.addEventListener("mouseover", function( event ) {  

        // change color when mousedover target
        this.style.backgroundColor = "black";
      }, false);
});
}

function resetColor() {

    color = getRandomRGB();
    s = '';
    
    let input = prompt("Enter a new size for the NxN sketchpad (1-64)")
    while (input < 1 || input > 64) {
        input = prompt("Enter a new size for the NxN sketchpad (1-64)")
    }

    for (let i = 0; i < input*input; i++) {
        s += `<div class="cell" style="width: ${500/(input*5)}%; flex-grow: 1; background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});"`;
        s += '></div>'
    };

    gridContainer.innerHTML = s;

    const cellsArray = [...document.querySelectorAll(".cell")];

    cellsArray.forEach(cell => {
    cell.addEventListener("mouseover", function( event ) {  

        // change color when mousedover target
        this.style.backgroundColor = "black";
      }, false);
});
}