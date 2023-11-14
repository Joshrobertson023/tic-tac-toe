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

const currentPlayer = document.querySelector('h3'),
      btnReset = document.querySelector('button'),
      boardContainer = document.getElementById('board-container'),
      cells = document.querySelectorAll('.cell');

const gameController = (function() {
   const playerOne = createPlayer('X'),
         playerTwo = createPlayer('O');

   playerOne.turn = true;

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

   cells.forEach(cell => {
      cell.addEventListener('click', makePlay);
   });
      
   function makePlay(e) {
      const cell = e.target;
      if(getCurrentPlayer() === 'X') {
         cell.classList.add('letter');
         const X = document.createElement('h1');
         X.textContent = 'X';
         cell.appendChild(X);
         alternateTurns();
         updateTurnDiv();
         cell.removeEventListener('click', makePlay);
      } else if (getCurrentPlayer() === 'O') {
         cell.classList.add('letter');
         const O = document.createElement('h1');
         O.textContent = 'O';
         cell.appendChild(O);
         alternateTurns();
         updateTurnDiv();
         cell.removeEventListener('click', makePlay);
      }
   };

   return;
})();

const gameboard = (function() {
   let board = [
      '','','',
      '','','',
      '','',''
   ]
   return { board };
})

gameController();

