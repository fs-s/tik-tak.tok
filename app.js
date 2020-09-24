const cellDivs = document.querySelectorAll('.cell');

cellDivs.forEach(element => {
    element.addEventListener('click', event =>{
        const selectedCell = event.currentTarget
        selectedCell.innerText = 'X'
        console.log(selectedCell)
    })
});
console.log(cellDivs[0].dataset.row)
