let gameBoard = [
    ['_','_','_'],
    ['_','_','_'],
    ['_','_','_']
]


const cellDivs = document.querySelectorAll('.cell');

cellDivs.forEach(element => {
    element.addEventListener('click', event =>{
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col


        selectedCell.innerText = 'X'
        gameBoard[selectedRow][selectedCol] = 'X'
        console.log(gameBoard)
        console.log(selectedCell.dataset.row)
        console.log(selectedCell.dataset.col)


    })
});
console.log(cellDivs[0].dataset.row)
