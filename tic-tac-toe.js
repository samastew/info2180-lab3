// tic-tac-toe.js - Exercise 1
document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    
    function initializeBoard() {
        squares.forEach(square => {
            square.classList.add('square');
        });
    }
    
    initializeBoard();
});

// tic-tac-toe.js - Exercise 2
document.addEventListener('DOMContentLoaded', function() {
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    
    function initializeBoard() {
        squares.forEach(square => {
            square.classList.add('square');
            square.addEventListener('click', handleSquareClick);
        });
    }
    
    function handleSquareClick(event) {
        const square = event.target;
        const index = Array.from(squares).indexOf(square);
        
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
    
    initializeBoard();
});