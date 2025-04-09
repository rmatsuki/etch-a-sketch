/*
    The Odin Project: Etech-A-Sketch Game
*/

function createGrid()
{
    const gridContainer = document.querySelector(".container");
    for (let i = 1; i <= 256; i++)
    {
        // justify-content is x-axis in row; align-items is y-axis in row.
        let square = document.createElement("div");
        square.className = "square";
        gridContainer.appendChild(square);

        // Create hovering effect for each created square.
        square.addEventListener("mouseover", () => {
            square.style = "background-color: gold";
        })
    }

    return gridContainer;
}

function main()
{
    // Create 256 div elements, then store into var.
    // Append the var into document.body.
    gridContainer = createGrid();
    document.body.appendChild(gridContainer);
}

main();