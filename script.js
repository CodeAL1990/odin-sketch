const container = document.querySelector('.gridContainer');

const containerSize = 500;
let gridSize = 16;

let rows, columns;

//function changeSize(newSize) {
//    gridSize = newSize;
//}

function createGrid() {
    // Clear existing grid
    container.innerHTML = '';
  
    // Calculate rows and columns based on gridSize
    const rows = containerSize / gridSize;
    const columns = containerSize / gridSize;

    container.style.width = `${rows * gridSize}`;
    container.style.height = `${columns * gridSize}`;
  
    // Loop through container and create divs
    for (let i = 0; i < rows * columns; i++) {
      const divElement = document.createElement('div');
      divElement.classList.add('gridElement');
      divElement.style.width = `${gridSize}px`;
      divElement.style.height = `${gridSize}px`;
      container.appendChild(divElement);
      divElement.addEventListener('mouseover', changeColor);
    }
  }

//Target gridElement property and set css hover style
function changeColor(e) {
    const gridElement = e.target;
    const redColor = Math.floor(Math.random() * 256);
    const greenColor = Math.floor(Math.random() * 256);
    const blueColor = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${redColor}, ${greenColor} , ${blueColor})`;
    gridElement.style.backgroundColor = randomColor;
}

const adjustBtn = document.querySelector('#adjustBtn')

adjustBtn.addEventListener('click', () => {
    // Prompt user for new gridSize
    const newGridSize = prompt("Type the number of rows and columns(1 to 100)");
    while (newGridSize === null || isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
        newGridSize = prompt("Type the number of rows and columns (1 to 100):");
        if (newGridSize === null) {
            return; // exit if user cancels prompt
        }
        newGridSize = parseInt(newGridSize);
    }
    gridSize = newGridSize;
    createGrid();
});
  
  // Create initial grid on window load
  window.onload = () => createGrid();
