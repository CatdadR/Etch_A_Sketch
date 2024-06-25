let gridBody = document.getElementsByClassName("gridBody")[0];
let gridSize = 16;  
let randomColour = false;

window.onload = function pageLoad(){
    generateCanvas();
};

function clearCanvas(){
    for (let i = 0; i < gridSize; i++){
        gridBody.removeChild(gridBody.firstElementChild);
        };
    generateCanvas();
};

function newCanvas(){ 
    for (let i = 0; i < gridSize; i++){
        gridBody.removeChild(gridBody.firstElementChild);
    };
    gridSize = prompt("Enter new canvas size")   
    generateCanvas();
};

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
            };
        };
    }; 
};

function changeColour(event){

    if (randomColour == true){   
        let r =  Math.random() * (255 - 0) + 0;
        let g =  Math.random() * (255 - 0) + 0;
        let b =  Math.random() * (255 - 0) + 0;
        const randomRgb = 'rgba(' + r + ',' + g + ',' + b + ')'   
        event.currentTarget.style.backgroundColor = randomRgb;   
    } else {
        event.currentTarget.style.backgroundColor = 'rgba(173, 139, 115)';  
    }

};


 
