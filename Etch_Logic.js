let gridBody = document.getElementsByClassName("gridBody")[0];
let gridSize = 16  

let colourSet

window.onload = function pageLoad(){
    generateCanvas();
}

function newCanvas(){ 
    for (let i = 0; i < gridSize; i++){
    gridBody.removeChild(gridBody.firstElementChild);
    }
    gridSize = prompt("Enter new canvas size")   
    generateCanvas();
}

function generateCanvas(){   
    if (prompt != null){
        for (let i = 0; i < gridSize; i++){
            const gridRow = document.createElement("div");
            gridRow.className = 'gridRow';
            gridBody.appendChild(gridRow);
            
            for (let i = 0; i < gridSize; i++){
                const gridCel = document.createElement("div");
                gridCel.className = 'gridCel';
                gridCel.addEventListener("mouseover", changeColour);
                gridRow.appendChild(gridCel);
            }
        };
    }; 
}

function changeColour(event){
    event.currentTarget.style.backgroundColor = '#AD8B73';  
}



