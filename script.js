const mainBox = document.createElement("div");
const gridContainer = document.createElement("div");
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";  // Permite que los elementos se ajusten en varias filas
gridContainer.style.width = "256px";    // Establece el ancho total del contenedor (16 * 16px)
gridContainer.style.border = "2px solid black";

for (let i = 0; i < 16 * 16; i++){
    const gridSquare = document.createElement("div");
    gridSquare.style.width = "14px";  // Ajustar el tamaño para compensar el borde
    gridSquare.style.height = "14px"; // Ajustar el tamaño para compensar el borde
    gridSquare.style.backgroundColor  = "lightgray";
    gridSquare.style.border = "1px solid gray";
    gridContainer.appendChild(gridSquare);
}

document.body.appendChild(mainBox);
mainBox.appendChild(gridContainer);
