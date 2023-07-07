<template>
    <div class="tic-tac-toe-widget">
      <h2>Tic Tac Toe</h2>
      <p>Tic tac toe is a board game. Played by 2 players, using a 3 x 3 grid board. 
        One of the players by marking "x" and the other marking with "o". The starting player marks with x and the next player with o, so on alternately.
        The challenge of the game is to create a row of xxx or ooo, horizontally--vertically--diagonally. 
        The winner is the one who manages to make the xxx or ooo row first.</p>
      <div class="board">
        <div v-for="(cell, index) in board" :key="index" @click="handleClick(index)">{{ cell }}</div>
      </div>
      <button @click="resetGame">Reset</button>
      <p>{{ status }}</p>
      <hr>
      <div class="comment">
        <h2>Leave the comment</h2>
        <p>Your email address will not published. Required fields are marked*</p>
        <form action="">
          <label for="username">Name*:</label>
          <input type="text" name="username" required>
          <label for="username"> Email*:</label>
          <input type="email" name="email" required>
          <br> <br>
          <label for="username">Website:</label>
          <input type="text" name="website">
          <label for="username"> Comment:</label>
          <input type="text" name="comment">
          <br> <br>
          <input type="submit">
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        board: ['', '', '', '', '', '', '', '', ''],
        currentPlayer: 'X',
        isGameEnded: false,
      };
    },
    computed: {
      status() {
        if (this.isGameEnded) {
          return 'Game Over!';
        }
        return `Player ${this.currentPlayer}'s turn`;
      },
    },
    methods: {
      handleClick(index) {
        if (!this.isGameEnded && this.board[index] === '') {
          this.board[index] = this.currentPlayer;
          this.checkWinner();
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
      },
      checkWinner() {
        const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6], // Diagonals
        ];
        for (const combination of winningCombinations) {
          const [a, b, c] = combination;
          if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
            this.isGameEnded = true;
            return;
          }
        }
      },
      resetGame() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.isGameEnded = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .tic-tac-toe-widget {
    border: 1px solid #ccc;
    padding: 20px;
    background-color: #f2f2f2;
  }
  .board {
    display: grid;
    text-align: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-bottom: 10px;
  }
  .board div {
    border: 1px solid #ccc;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  button {
    margin-top: 10px;
    background: chocolate;
    color: white;
    border-color: chocolate;
  }
  </style>