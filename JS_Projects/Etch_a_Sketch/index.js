let container=document.querySelector("#container");


function createContainerGrid(numberOfBoxes){
    for(let i=0; i<numberOfBoxes; i++) {
        const gridRow=document.createElement("div");
        gridRow.className="grid_row";
        gridRow.setAttribute("style", "display: flex;flex-grow: 1;");
        

        for(let j=0; j<numberOfBoxes; j++) {

        const gridBox=document.createElement("div");
        gridBox.className="grid_box";
        gridBox.setAttribute("style", "flex-grow: 1;");
        gridRow.appendChild(gridBox);

        gridBox.addEventListener("mouseover", ()=> {
            gridBox.style.backgroundColor = randomRgbColor();
        
        });
        }

        container.appendChild(gridRow);
        }    
    }
    
    /*generate a random intager from 0 to 255 */
    function randomInt(){
        let randomInt=Math.floor(Math.random()*(255+ 1));
        return randomInt;
    }
    
    /* set the random integer as rgb values */
    function randomRgbColor() {
        let r = randomInt();
        let g = randomInt();
        let b = randomInt();
        let result= "rgb("+r+","+g+","+b+")";
        return result;
    }
    

    


function numberofSuqares() {

    /*control if the container has divs inside and remove them */
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

       let numberofSuqares = prompt("Enter number of squares <100");

    if (numberofSuqares > 100) {
        window.alert("Error! Number of Squares >100! Try Again!")
     
       }

       else {
          createContainerGrid(numberofSuqares);
       } 

        
    }

    createContainerGrid(16);


        