const container = document.querySelector('.container');

let amount = 10

for (let i = 0; i < amount; i++){
    const divElement = document.createElement('div');
    divElement.style.width = "16px";
    divElement.style.height = "16px";
    divElement.style.border = "2px solid black";
    container.appendChild(divElement);
    console.log(container);
}