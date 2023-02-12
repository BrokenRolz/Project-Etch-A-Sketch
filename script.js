const container = document.getElementById('container');
const resetButton = document.querySelector('button');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        cell.addEventListener('mouseover', 
            e => e.target.classList.add('my-color-class')
        )
        container.appendChild(cell).className = 'grid-item';
    };
};

resetButton.addEventListener('click', () =>{
    let userAns = Number(prompt("Enter a number between 1-100 to create a a new grid."));

    if(userAns > 100) {
        userAns = Number(prompt("Enter a smaller number. Make it 100 or less."))
    }
    makeGrid(userAns, userAns);
})
makeGrid(16, 16);