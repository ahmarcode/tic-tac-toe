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
function myTurn(turn)
{
    const myName = document.getElementById('pTurn');
    if(turn%2===0)
    {
        myName.textContent = 'A';
    }
    else
    {
        myName.textContent = 'B';
    }
}

const one = document.getElementById('ele1');
one.addEventListener('click', () => {
    // console.log('clicked!!')
    
    if(turn%2===0) 
    {
        one.textContent = 'x';
        
    }
    else
    {
        one.textContent = 'o';
    }
    myTurn(turn);
    turn++;
})

// Checking winning