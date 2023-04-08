const container = document.querySelector('.gridContainer');

const containerSize = 500;
const gridSize = 16;

const rows = Math.floor(containerSize / gridSize);
const columns = Math.floor(containerSize / gridSize);

//Loop through container and create divs
for (let i = 0; i < rows * columns; i++){
    const divElement = document.createElement('div');
    divElement.classList.add('gridElement')
    container.appendChild(divElement);
    divElement.addEventListener('mouseover', changeColor);
}

//Target gridElement property and set css hover style
function changeColor(e) {
    const gridElement = e.target;
    gridElement.setAttribute("style", "background-color:black;");
}

const adjustBtn = document.querySelector('#adjustBtn')

adjustBtn.addEventListener('click', () => {
    let adjustSize = prompt("Type the size of pixels you want each div to be")
    console.log(adjustSize);
})

function changeSize() {

}