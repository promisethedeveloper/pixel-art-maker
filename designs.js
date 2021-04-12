// Accessing the color picker, the table and the submit button
const submitButton = document.querySelector('#sizePicker');
var table = document.querySelector('#pixelCanvas');


// function makeGrid() 
function makeGrid(evt) {
    const boxHeight = document.querySelector('#inputHeight').value;
    const boxWidth = document.querySelector('#inputWidth').value;
    clearingGrid();

    // Use a for loop to set the row and cellBox
    for (let i = 0; i < boxHeight; i++) {
        let currentRow = document.createElement("tr");
        // add the currentRow to the table
        table.appendChild(currentRow);
        for (let j = 0; j < boxWidth; j++) {
            // create a cell
            var currentBox = document.createElement("td");
            // each cell should have an event listener that sets the background color of the cell to the selected color.
            currentBox.addEventListener('click', cellBoxColor)
            currentRow.appendChild(currentBox);
        }
    }
    evt.preventDefault();
};

// add event listener to call makeGrid(), when size is submitted by the user.
submitButton.addEventListener('submit', makeGrid);


// function for the clearing of the grid
function clearingGrid() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    };
};


// function for changing the cellBox color
function cellBoxColor(evt) {
    var color = document.querySelector('#colorPicker').value;
    evt.target.style.backgroundColor = color;
    evt.preventDefault();
};