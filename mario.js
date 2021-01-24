//printPyramid(5);
//printPyramid(10);
//drawPyramid(5);
drawStyledPyramid(10);
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    //console.log("Uh oh... the pyramid is under construction.");
    //console.log("Check back soon, our developers are hard at work as we speak!");
    for(let i=0;i<height;i++){
        var string = "";
        var air = " ";
        var ground = "#";
        air = air.repeat(height-1-i);
        ground = ground.repeat(i+2);
        string = string.concat(air,ground);
        console.log(string);
    }
};

function drawPyramid(height){
    var node = document.getElementById("pyramid");
    for(let i=2;i<height+2;i++){
        var newNode = document.createElement("p");
        newNode.innerHTML = "&nbsp;".repeat(height-i+1)+"#".repeat(i);
        node.appendChild(newNode);
    }
    var toDelete = document.getElementById("construction");
    toDelete.parentNode.removeChild(toDelete);
    //console.log(node.childNodes);
};

function drawStyledPyramid(height){
    document.getElementById("construction").remove();
    var pyramid = document.getElementById("pyramid");

    //for each row
    for(var row=0; row<height;row++){
        let containerDiv = document.createElement("div");
        containerDiv.style.display = "flex";

        // figure out number of bricks and spaces
        let numBricks = row+2;
        let numSpaces = height-row-1;

        //build up a string for this row
        let rowBlocks = [];
        for(let i=0;i<numSpaces;i++){
            let block = document.createElement("div");
            block.className+=' space';
            rowBlocks.push(block);
        }
        for (let i = 0; i < numBricks; i++) {
            let block = document.createElement("div");
            block.className += ' brick';
            rowBlocks.push(block);
        }
        //rowBlocks is an array of nodes that contains a style div
        //now we need to append everyBlock in the containerDiv
        rowBlocks.forEach(e=>containerDiv.appendChild(e));

        //and finally we append the containerDiv to the pyramid
        pyramid.appendChild(containerDiv);
    }
};