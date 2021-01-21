function drawPyramid(height,symbol){
    let pyramidContainer = document.getElementById("pyramidContainer");
    
    for(let i=0;i<height;i++){
        //create the block container
        let blockContainer = document.createElement("div");
        let numBricks = i+2;
        let numSpaces = height-i-1;

        //create the spaces
        for(let i=0;i<numSpaces;i++){
            let space = document.createElement("div");
            space.className += " space";
            space.innerHTML = "&nbsp;";
            blockContainer.appendChild(space);
        }
        //create the bricks
        for(let i=0;i<numBricks;i++){
            let brick = document.createElement("div");
            brick.className += " brick";
            brick.innerHTML = symbol;
            blockContainer.appendChild(brick);
        }

        pyramidContainer.appendChild(blockContainer);
    }
};

function clearPyramid(){
    const pyramid = document.getElementById("pyramidContainer");
    console.log(pyramid.childNodes);
    /**
     * Interesting!!!: doing 'for each' or using an iterator doesn't work well because i'm removing
     * the childs, so the length changes. The iterator increments but the number of childs
     * decrement, and that takes me to do half of the actual work
     */
    /* 
    pyramid.childNodes.forEach(child=>{
        child.remove();
        console.log(("hello"));
    }); 
    */

    /* for(let i=0; i<pyramid.children.length;i++){
        pyramid.removeChild(pyramid.firstChild);
        console.log(".");
    }
    */
    while(pyramid.firstChild!=null){
        pyramid.removeChild(pyramid.firstChild);
    }
};

const symbolDiv = document.getElementById("brickSymbol");
const lengthDiv = document.getElementById("pyramidHeight");
var symbol = "#";
var length = 5;

symbolDiv.addEventListener('change',(e)=>{
    clearPyramid();
    symbol = e.target.value;
    drawPyramid(length,symbol);
});
//onchange: after the mouse is released
//oninput: live change
lengthDiv.addEventListener('input',(e)=>{
    clearPyramid();
    length = e.target.value;
    let l = document.getElementById("rangeLabel");
    l.innerHTML = length;
    drawPyramid(length,symbol);
});
 drawPyramid(length,symbol);