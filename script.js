const mainBox = document.createElement("div");
const gridContainer = document.createElement("div");
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";  // Permite que los elementos se ajusten en varias filas
gridContainer.style.width = "256px";    // Establece el ancho total del contenedor (16 * 16px)
gridContainer.style.border = "2px solid black";

const btnChoice = document.createElement("button");
btnChoice.textContent = "how many squares(pixels) do you want?";

btnChoice.addEventListener("click", () =>{
    const numSquares = prompt("Select the number of squares you want (eg 100 = 100x100), Maximum number 100");
    const numSquaresValue = Number (numSquares);

    if (numSquaresValue < 100 || numSquaresValue > 0 || isNaN(numSquaresValue)){
        alert("Please enter a valid number (between 1 and 100)");
        return;
    }
    

})

for (let i = 0; i < 16 * 16; i++){
    const gridSquare = document.createElement("div");
    gridSquare.style.width = "14px";  // Ajustar el tamaño para compensar el borde
    gridSquare.style.height = "14px"; // Ajustar el tamaño para compensar el borde
    gridSquare.style.backgroundColor  = "lightgray";
    gridSquare.style.border = "1px solid gray";

    gridSquare.addEventListener("mouseenter", () =>{
        gridSquare.style.backgroundColor = "black";
    })
    gridContainer.appendChild(gridSquare);
}

document.body.appendChild(mainBox);
mainBox.appendChild(btnChoice);
mainBox.appendChild(gridContainer);
