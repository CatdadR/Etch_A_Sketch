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
    
    if (gridSize >= 1 && gridSize < 100) {
    generateCanvas();
    } else {
        gridSize = 16
        generateCanvas();
        alert("Failed. Please enter a value between 1 - 100")
    }
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
                gridCel.style.opacity = 0.1;
                gridRow.appendChild(gridCel);
            };
        };
    }; 
};

function changeColour(event){

    if (randomColour == true){   
        let currentOpacity = event.currentTarget.style.opacity; 
        if (currentOpacity) {
            event.currentTarget.style.opacity = Number(currentOpacity) + 0.09;
        } else{
            event.currentTarget.style.opacity =  0.1;
        };

        let r =  Math.random() * (255 - 0) + 0;
        let g =  Math.random() * (255 - 0) + 0;
        let b =  Math.random() * (255 - 0) + 0;
        const randomRgb = 'rgba(' + r + ',' + g + ',' + b + ')'   
        event.currentTarget.style.backgroundColor = randomRgb;   
    } else {
        
        let currentOpacity = event.currentTarget.style.opacity; 
        if (currentOpacity) {
            event.currentTarget.style.opacity = Number(currentOpacity) + 0.09;
        } else{
            event.currentTarget.style.opacity =  0.1;
        }

        event.currentTarget.style.backgroundColor = 'rgba(173, 139, 115)';  
    };

};


 
