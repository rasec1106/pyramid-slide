function drawPyramid(height, symbol) {
    let pyramidContainer = $("#pyramidContainer").eq(0);
    for (let i = 0; i < height; i++) {
        //create the block container
        let blockContainer = $("<div>");
        let numBricks = i + 2;
        let numSpaces = height - i - 1;

        //create the spaces
        for (let i = 0; i < numSpaces; i++) {
            let space = $("<div>");
            space.addClass("space");
            // space.html("&nbsp;");
            space.text("");
            blockContainer.append(space);
        }
        //create the bricks
        for (let i = 0; i < numBricks; i++) {
            let brick = $("<div>");
            brick.addClass("brick");
            brick.text(symbol);
            blockContainer.append(brick);
        }
        pyramidContainer.append(blockContainer);
    }
};

function clearPyramid() {
    $("#pyramidContainer").html("");
};

var symbol = "#";
var length = 5;

//event handlers
//onchange: after the mouse is released
//oninput: live change

$("#pyramidHeight").on('input',(e) => {
    clearPyramid();
    length = e.target.value;
    $("#rangeLabel").text(length);
    drawPyramid(length, symbol);
});
//this is a shorthand for .on('change',{});
$("#brickSymbol").change((e) => {
    clearPyramid();
    symbol = e.target.value;
    drawPyramid(length, symbol);
});
drawPyramid(length, symbol);