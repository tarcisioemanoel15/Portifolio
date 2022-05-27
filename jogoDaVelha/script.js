const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');
const dataText = document.querySelector('[data-winning-message-p]');
const winningMessage = document.querySelector('[data-winning-message]');
const datawinningMessageBtn = document.querySelector('[data-winning-message-btn]');

let isCircleTrue;


const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];


const startgame = () => {

  isCircleTrue = false;

  for (const cell of cellElements) {
    cell.classList.remove('circle');
    cell.classList.remove('x');
    cell.removeEventListener('click', handleClick)

    cell.addEventListener('click', handleClick, { once: true })
  }


  // board.classList.add('x');
  setBoarHoverClass();

  winningMessage.classList.remove('show-winning-message');
}

// Enpate
const endGame = (isDraw) => {
  if (isDraw) {
    dataText.innerText = 'Enpate';
  } else {
    dataText.innerText = isCircleTrue
      ? 'O Venceu'
      : 'X venceu';

  }

  winningMessage.classList.add('show-winning-message');
};


const handleRestartClick = () => {

}

// Campeão
const checkForwin = (currentPlayer) => {
  return winningCombinations.some((combbination) => {
    return combbination.every((index) => {
      return cellElements[index].classList.contains(currentPlayer)
    })
  })
}


const checkForDraw = () => {
  return [...cellElements].every(cell => {
    return cell.classList.contains('x') || cell.classList.contains('circle');
  })


}


const placeMaek = (cell, classToAdd) => {
  cell.classList.add(classToAdd)
}


const setBoarHoverClass = () => {

  board.classList.remove('circle');
  board.classList.remove('x');

  if (isCircleTrue) {
    board.classList.add('circle');
  } else {
    board.classList.add('x');

  }

}

const swapTrue = () => {
  isCircleTrue = !isCircleTrue;
  setBoarHoverClass();
}




const handleClick = (e) => {
  // Colocar a marca (x ou o)
  const cell = e.target;
  const classToAdd = isCircleTrue ? 'circle' : 'x';
  placeMaek(cell, classToAdd);

  // verificar por vitoria
  const isWin = checkForwin(classToAdd);

  // verificar por enpate
  const isDraw = checkForDraw();
  if (isWin) {
    endGame(false);
  } else if (isDraw) {
    endGame(true);
  }

  // if (isDraw) {
  //   endGame(true)
  // }

  // muar simbolo
  swapTrue();

}
startgame();
datawinningMessageBtn.addEventListener('click', startgame);