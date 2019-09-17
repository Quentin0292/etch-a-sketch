const container = document.getElementById("container");
const btnClear = document.getElementById("button-clear");

function addDiv(numberOfDivsToCreate) {
  let gridCellDimensions = (600 / numberOfDivsToCreate - 2).toFixed(2);
  let gridSize = Math.pow(numberOfDivsToCreate, 2);

  // create a grid square & add to container
  while (gridSize > 0) {
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("grid");
    newDiv.style.height = gridCellDimensions + "px";
    newDiv.style.width = gridCellDimensions + "px";
    newDiv.style.border = "1px solid black";
    gridSize--;
  }

  let gridCells = document.querySelectorAll(".grid");
  gridCells.forEach(cell => cell.addEventListener("mouseenter", changeColor));
  console.log(gridCellDimensions);
  console.log("Grid has been created");
}


// create a random color
function random_rgba(){
  let o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

// change grid square color to red
function changeColor() {
  this.style.backgroundColor = random_rgba();
}

// clear grid + prompt for a new grid
function clear() {
  let askGridSize = prompt("How many square per side ?");

  if (askGridSize >= 1 && askGridSize < 100) {
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild); // remove all grid squares
    }
    addDiv(askGridSize); // create new grid 
  } else {
    alert("Choose a number between 1 and 100 please");
    clear();
  }
}

btnClear.addEventListener("click", clear);
addDiv(24);
