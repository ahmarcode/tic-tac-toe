let indices = [null, null, null, null, null, null, null, null, null];
// function mark() {}
let win = false;
let winner = ' ';
let turn = 0;
let chance = 9;
const slogan  = document.querySelector('span');
// Turn and player's symbol
const myName = document.getElementById("pTurn");
function symbol(index, turn, num) {
  if (turn % 2 === 0) {
    myName.textContent = "B";
    index.textContent = "x";
    indices[num] = "x";
  } else {
    myName.textContent = "A";
    index.textContent = "o";
    indices[num] = "o";
  }
}

function checkWin() {
  /*
    winning combinatios 
    horizontal: [0,1,2]
                [3,4,5]
                [6,7,8]
    
    Vertical:   [0,3,6]
                [1,4,7]
                [2,5,8]

    Cross:      [0,4,8]
                [2,4,6]
*/
  //Horizontal
  if (
    indices[0] == indices[1] && indices[0] == indices[2] && indices[0]) {
      winner = indices[0];
      console.log('win');
      win = true;
  }
  else if (
    indices[3] === indices[4] && indices[3] === indices[5] && indices[3]) {
      winner = indices[3];
      console.log('win');
      win = true;
  }
  else if (
    indices[6] === indices[7] && indices[6] === indices[8] && indices[6]) {
      winner = indices[6];
      console.log('win');
      win = true;
      chance--;
  }
  //Vertical
  else if (
    indices[0] === indices[3] && indices[0] === indices[6] && indices[0]) {
      winner = indices[0];
      console.log('win');
      win = true;
      chance--;
  }
  else if (
    indices[1] === indices[4] && indices[1] === indices[7] && indices[1]) {
      winner = indices[1];
      console.log('win');
    win = true
  }
  else if (
    indices[2] === indices[5] && indices[2] === indices[8] && indices[2]) {
      winner = indices[2];
      console.log('win');
      win = true;
  }
  //Cross
  else if (
    indices[0] === indices[4] && indices[0] === indices[8] && indices[0]) {
      winner = indices[0];
      console.log('win');
      win = true;
  }
  else if (
    indices[2] === indices[4] && indices[2] === indices[6] && indices[2]) {
      winner = indices[2];
      console.log('win');
      win = true;
  }
  chance--;
}

// On-click changes
if(chance>0){
const infi = document.getElementsByClassName("item");
for (let i = 0; i < infi.length; i++) {
  const ex = infi[i];
  ex.addEventListener("click", () => {
    if (indices[i] === null) {
      const num = parseInt(ex.getAttribute("boxNum"));
      console.log(num);   
      symbol(ex, turn++, num - 1);
      console.log(indices);
      checkWin()
      if(win)
      {
        slogan.textContent = `Match Finished. Winner: ${winner}`;
        i=infi.length;
      };
    }
  });
}
}
if(chance===0 && win===false) {
  slogan.textContent = 'Draw!!';
}

const restart = document.querySelector('button');
restart.addEventListener('click', () => {
  for(let x = 0; x < 9; x++){
    indices[i] = null;
  }
  }
)
