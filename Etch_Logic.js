let gridBody = document.getElementsByClassName("gridBody")[0];





function newCanvas(){
    
    let gridSize = prompt("Enter new canvas size")   
    
    if (prompt != null){
        for (let i = 0; i < gridSize; i++){
            const gridRow = document.createElement("div");
            gridRow.className = 'gridRow';
            gridBody.appendChild(gridRow);
            
            for (let i = 0; i < gridSize; i++){
                const gridCel = document.createElement("div");
                gridCel.className = 'gridCel';
                gridRow.appendChild(gridCel);
            }
        };
    };

    // if (prompt != null){
    //     for (let i = 0; i < gridSize; i++){
    //         const gridCel = document.createElement("div");
    //         gridCel.className = 'gridCel';
    //         gridRow.appendChild(gridCel);

    //     }
    // }
};

