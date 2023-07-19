/*
    winning combinatios 
    horizontal: [1,2,3]
                [4,5,6]
                [7,8,9]
    
    Vertical:   [1,4,7]
                [2,5,8]
                [3,6,9]

    Cross:      [1,5,9]
                [3,5,7]
*/
let turn = 0;
function symbol(index,turn){
    const myName = document.getElementById('pTurn');

    if(turn%2===0) 
    {
        myName.textContent = 'A';
        index.textContent = 'x';
    }
    else
    {
        myName.textContent = 'B';
        index.textContent = 'o';
    }
    // myTurn(turn);
}
// const one = document.getElementById('ele1');
// one.addEventListener('click', () => {
//     symbol(one, turn++);
// })
// const two = document.getElementById('ele2');
// two.addEventListener('click', () => {
//     symbol(two, turn++);
// })

const infi = document.getElementsByClassName('item');
console.log(infi);
for(let i=0; i<infi.length; i++){
    const ex = infi[i];
    ex.addEventListener('click', () => {
        symbol(ex, turn++);
    })
}