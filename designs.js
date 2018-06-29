let canvas = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");
// Select color input


// When size is submitted by the user, call makeGrid()
color.addEventListener("click", function(){});
// Select size input
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
    // Your code goes here!
    for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}
