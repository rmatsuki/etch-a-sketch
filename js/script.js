/*
    The Odin Project: Etech-A-Sketch Game
*/

function deleteButtonEvent(gridContainer, deleteButton)
{
    // Add deleteButton functionality (deletes grid if clicked).
    deleteButton.addEventListener("click", () => {
        let gridSize = prompt("Enter the new grid size", "16");
        if (gridSize > 0 && gridSize <= 100)
        {
            // Remove passed and pre-existing gridContainer child.
            document.body.removeChild(gridContainer);
            // Create new grid using pre-existing gridContainer var.
            gridContainer = createGrid(gridSize);
            // Append newly created gridContainer.
            document.body.appendChild(gridContainer);
        }
        else if (gridSize == null)
        {
            window.alert("NULL input detected");
        }
        else
        {
            window.alert("Invalid input. Please try again.");
        }
    });
}

function createDeleteButton()
{
    // Add button to delete grid.
    const buttonWrapper = document.createElement("div");
    const deleteButton = document.createElement("button");
    buttonWrapper.className = "wrapper";
    deleteButton.className = "button-delete";
    deleteButton.textContent = "Delete Grid";
    buttonWrapper.appendChild(deleteButton);
    document.body.appendChild(buttonWrapper);

    return deleteButton;
}

function createGrid(gridSize)
{
    const gridContainer = document.createElement("div");
    gridContainer.className = "sketch-screen";
    for (let i = 0; i < gridSize; i++)
    {
        // justify-content is x-axis in row; align-items is y-axis in row.
        let squareColumn = document.createElement("div");
        squareColumn.classList.add("column");
        for (let j = 1; j <= gridSize; j++)
        {
            let squareRow = document.createElement("div");
            squareRow.classList.add("row");
            //// Uncomment below to print index number on each tile.
            // squareRow.innerText = (i * gridSize) + j;
            squareColumn.appendChild(squareRow);

            // Create hovering effect for each created square.
            squareRow.addEventListener("mouseover", () => {
                squareRow.style = "background-color: gold";
            })
        }
        gridContainer.appendChild(squareColumn);
    }
    return gridContainer;
}

function main()
{
    // Create default (16x16) 256 div element grid, then store into var.
    // Append the var into document.body.
    const defaultGridSize = 16;
    const button = createDeleteButton();
    let gridContainer = createGrid(defaultGridSize);
    document.body.appendChild(gridContainer);
    deleteButtonEvent(gridContainer, button);
}

main();