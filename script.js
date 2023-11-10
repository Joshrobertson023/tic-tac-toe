/**
 * 
 * Tic-tac-toe by Josh Robertson
 * 
 * Date: 11/9/2023
 * 
 */

/**
 * gameboard[] inside Gameboard object
 * 
 * Functions we need:
 * Get player name and sign
 * Play round
 *    Check to see who's turn it is (turn: true)
 *    Let them choose a place on board to land
 *    Update board with place
 *    Update player's turn to false, and other player's turn to true
 * Check for winning pattern
 *    If winning pattern, declare winner
 *    Restart game (clear board)
 * 
 * Objects:
 *    Player 1
 *    Player 2
 *    Gameboard
 *    GameController
 *    DisplayController
 * 
 * Logic:
 * 
 * Game starts
 * 1. Create players
 * 2. Create gameboard
 * 3. Prompt player 1 to choose a place on gameboard
 * 4. Update gameboard
 * 5. Update display
 * 6. Change player 1 turn status to false, player 2 to true
 * 7. Check for winning pattern, if yes, jump to step 9
 * 8. Loop back to step 3
 * 9. Declare winner
 * 10. Restart game (clear board and players)
 */

/**
 * 0 = empty
 * 1 = X
 * 2 = O
 */

const playerOne = createPlayer('Player 1', 1);

const gameboard = (() => {
   const board = [
      0,0,0,
      0,0,0,
      0,0,0,
   ]

   return { board, /* Functions go here */ }
});

function createPlayer(name, sign) {
   return {
      name,
      turn: false,
      sign,

      updateTurn() {
         if(this.turn === true)
            this.turn = false;
         else
            this.turn = true;
      }
   }
}