const mainBox = document.createElement("div");
mainBox.classList.add("game-box");
const gridContainer = document.createElement("div");
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";  
gridContainer.style.width = "500px";
gridContainer.style.height = "500px";

const btnChoice = document.createElement("button");
btnChoice.textContent = "how many squares(pixels) do you want?";

function createGrid(numSquaresValue) {
    gridContainer.innerHTML = ''; // Cleaning the container, good reminder


    const squareSize = Math.floor(500 / numSquaresValue); //each square pixel size

    for (let i = 0; i < numSquaresValue * numSquaresValue; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.style.width = `${squareSize -2}px`;   
        gridSquare.style.height = `${squareSize -2}px`;  
        gridSquare.style.backgroundColor = "lightgray";
        gridSquare.style.border = "1px solid gray";
        gridSquare.style.opacity = "1";

        //changing colors
        gridSquare.addEventListener("mouseenter", () => {
            gridSquare.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; //reminder this creates the random color
        });

        gridContainer.appendChild(gridSquare);
    }
}


btnChoice.addEventListener("click", () =>{
    const numSquares = prompt("Select the number of squares you want (eg 100 = 100x100), Maximum number 100");
    const numSquaresValue = Number (numSquares);

    if (numSquaresValue > 100 || numSquaresValue < 0 || isNaN(numSquaresValue)){
        alert("Please enter a valid number (between 1 and 100)");
        return;
    }
    
    createGrid(numSquaresValue);

})


document.body.appendChild(mainBox);
mainBox.appendChild(btnChoice);
mainBox.appendChild(gridContainer);
