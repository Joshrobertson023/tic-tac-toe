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
         return {X};
      } else if (player === 'O') {
         cell.classList.add('letter', 'o');
         const O = document.createElement('h1');
         O.textContent = 'O';
         cell.appendChild(O);
         return {O};
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

      console.log('makePLay working');

      if(gameboard.checkWin(currentPlayer)) {
         console.log('checkwin working');
         setTimeout(() => {
            alertWinner(currentPlayer);
         }, 20)
         reset();
      }

      function reset() {
         const cellContainer = document.getElementById('container');

         gameboard.resetBoard();
      
         while(cellContainer.firstChild) {
            cellContainer.removeChild(cellContainer.lastChild);
         }

         for(let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cellContainer.appendChild(cell);
            cell.setAttribute('index', i);
         }

         const newCells = document.querySelectorAll('.cell');
         newCells.forEach(cell => {
            cell.addEventListener('click', makePlay);
            console.log('added new even listener');
         });
      }

      btnReset.addEventListener('click', reset);
   };

   function getCellIndex(currentCell) {
      return currentCell.getAttribute('index');
   }

   function alertWinner(currentPlayer) {
      alert(`${currentPlayer} won!`);
   }
});

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
      for(let i = 0; i < 9; i++) {
         board[i] = '';
      }
      console.log(board);
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

   return { addPlayer, checkWin, resetBoard, board };
})();

gameController();