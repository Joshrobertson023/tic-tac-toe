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
      boardContainer = document.getElementById('board-container');

const gameController = (function() {
   const playerOne = createPlayer('X'),
         playerTwo = createPlayer('O');

   playerOne.turn = true;

   // for(const cell of cells) {
   //    this.disabled = false;
   //    cell.addEventListener('click', () => {
   //       if(getCurrentPlayer() === 'X' && this.disabled === false) {
   //          cell.classList.add('letter');
   //          const X = document.createElement('h1');
   //          X.textContent = 'X';
   //          cell.appendChild(X);
   //          this.disabled = true;
   //          alternateTurns();
   //          updateTurnDiv();
   //       } else if (getCurrentPlayer() === 'O' && this.disabled === false) {
   //          cell.classList.add('letter');
   //          const O = document.createElement('h1');
   //          O.textContent = 'O';
   //          cell.appendChild(O);
   //          this.disabled = true;
   //          alternateTurns();
   //          updateTurnDiv();
   //       }
   //    });
   // }


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

   function makeMove(index) {
      // Use index clicked on to add current player to board array
   }
});

const gameboard = (function() {
   let board = [
      '','','',
      '','','',
      '','',''
   ]
   return { board };
})

gameController();

