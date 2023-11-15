/**
 * 
 * Tic-tac-toe by Josh Robertson
 * 
 * Date: 11/9/2023
 * 
 */

/**
 * What elements do I need?
 *    Each cell
 * 
 * What behavior do I want?
 *    Alternate between turns (keep track of)
 *    Test for a win
 *    Able to reset
 * 
 * What data needs to be stored?
 *    Board
 * 
 */


const gameController = (function() {
   const currentPlayer = document.querySelector('h3'),
         btnReset = document.querySelector('button'),
         cells = document.querySelectorAll('.cell');
   const playerOne = createPlayer('X'),
         playerTwo = createPlayer('O');

   playerOne.turn = true;

   cells.forEach(cell => {
      cell.addEventListener('click', makePlay);
   });

   btnReset.addEventListener('click', reset());

   function createPlayer(sign) {
      return {
         sign,
         turn: false,
      }
   }

   function alternateTurns() {
      if(playerOne.turn) {
         playerOne.turn = false;
         playerTwo.turn = true;
      } else {
         playerTwo.turn = false;
         playerOne.turn = true;
      }
   }

   function updateTurnDiv() {
      currentPlayer.textContent = `Current player: ${getCurrentPlayer()}`;
   }

   function getCurrentPlayer() {
      return playerOne.turn === true ? playerOne.sign : playerTwo.sign;
   }

   function updateScreen(cell, player) {
      if(player === 'X') {
         cell.classList.add('letter', 'x');
         const X = document.createElement('h1');
         X.textContent = 'X';
         cell.appendChild(X);
      } else if (player === 'O') {
         cell.classList.add('letter', 'o');
         const O = document.createElement('h1');
         O.textContent = 'O';
         cell.appendChild(O);
      }
   }

   function makePlay(e) {
      const cell = e.target;
      let currentPlayer = getCurrentPlayer();

      updateScreen(cell, currentPlayer);
      gameboard.addPlayer(getCellIndex(cell), currentPlayer);
      
      alternateTurns();
      updateTurnDiv();
      cell.removeEventListener('click', makePlay);

      if(gameboard.checkWin(currentPlayer)) {
         setTimeout(() => {
            alertWinner(currentPlayer);
         }, 1)
         reset();
      }
   };

   function getCellIndex(currentCell) {
      return currentCell.getAttribute('index');
   }

   function reset() {
      gameboard.resetBoard();
   }

   function alertWinner(currentPlayer) {
      alert(`${currentPlayer} won!`);
   }

   return;
})();

const gameboard = (function() {
   let board = [
      '','','',
      '','','',
      '','',''
   ]

   const winningPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
   ]

   function resetBoard() {
      for(let i = 0; i < 9; i++)
         board[i] = '';
   }

   function addPlayer(index, currentPlayer) {
      board[index] = currentPlayer;
   }

   function checkWin(currentPlayer) {
      let indexOne = 0,
          indexTwo = 0,
          indexThree = 0;

      for(let i = 0; i < 9; i++) {
         indexOne = winningPatterns[i][0];
         indexTwo = winningPatterns[i][1];
         indexThree = winningPatterns[i][2];

         if(board[indexOne] === currentPlayer &&
            board[indexTwo] === currentPlayer &&
            board[indexThree] === currentPlayer)
               return true;
      }
   }

   return { addPlayer, checkWin, resetBoard };
})();

gameController();