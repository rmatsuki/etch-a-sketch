/*
    The Odin Project: Etech-A-Sketch Game
*/

function deleteBtnEvent(gridContainer, deleteButton)
{
    // Add deleteButton functionality (deletes grid if clicked).
    deleteButton.addEventListener("click", () => {
        let gridSize = prompt("Enter desired grid size (1-100)", "16");
        if (gridSize > 0 && gridSize <= 100)
        {
            // Remove passed and pre-existing gridContainer child.
            document.body.removeChild(gridContainer);
            // Create new grid using pre-existing gridContainer var.
            gridContainer = createGrid(gridSize);
            // Append newly created gridContainer.
            document.body.appendChild(gridContainer);
        }
        else if (gridSize === null)
        {
            window.alert("-=NULL=-");
        }
        else
        {
            window.alert("Invalid input. Please try again.");
        }
    });
}

function createDeleteBtn()
{
    // Add button to delete grid.
    const buttonWrapper = document.createElement("div");
    const deleteButton = document.createElement("button");
    buttonWrapper.className = "wrapper";
    deleteButton.className = "button-delete";
    deleteButton.textContent = "New Grid";
    buttonWrapper.appendChild(deleteButton);
    document.body.appendChild(buttonWrapper);

    return deleteButton;
}

function createGrid(gridSize)
{
    // Create a grid container and wrap it in another container.
    const gridWrapper = document.createElement("div");
    gridWrapper.classList.add("grid-wrapper");
    const gridContainer = document.createElement("div");
    gridContainer.className = "screen";
    for (let i = 0; i < gridSize; i++)
    {
        let squareColumn = document.createElement("div");
        squareColumn.classList.add("column");
        for (let j = 1; j <= gridSize; j++)
        {
            let squareRow = document.createElement("div");
            squareRow.classList.add("row");
            //// Uncomment below to print index number on each tile. Use for debugging.
            // squareRow.innerText = (i * gridSize) + j;
            squareColumn.appendChild(squareRow);

            //// Create hovering effect for each created square.
            // EC-1: Add RGB Effect
            // EC-2: Add Opacity Effect
            let tileOpacity = 0;
            squareRow.addEventListener("mouseover", () => {
                if (tileOpacity <= 1)
                {
                    squareRow.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ","
                                                    + Math.floor(Math.random() * 255) + ","
                                                    + Math.floor(Math.random() * 255) + ")";
                    tileOpacity += 0.1;
                    console.log(`tileOpacity: ${tileOpacity}`);
                    squareRow.style.opacity = `${tileOpacity}`;
                }
                else
                {
                    // Reset the opacity to 0 after it reaches 1.
                    tileOpacity = 0;
                }
            })
        }
        gridContainer.appendChild(squareColumn);
        gridWrapper.appendChild(gridContainer);
    }
    return gridWrapper;
}

function main()
{
    // Create default (16x16) 256 div element grid, then store into var.
    // Append the var into document.body.
    const defaultGridSize = 16;
    const button = createDeleteBtn();
    let gridContainer = createGrid(defaultGridSize);
    document.body.appendChild(gridContainer);
    deleteBtnEvent(gridContainer, button);
}

main();