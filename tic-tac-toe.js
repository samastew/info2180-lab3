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

// tic-tac-toe.js - Exercise 3
document.addEventListener('DOMContentLoaded', function() {
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    
    function initializeBoard() {
        squares.forEach(square => {
            square.classList.add('square');
            square.addEventListener('mouseover', handleMouseOver);
            square.addEventListener('mouseout', handleMouseOut);
            square.addEventListener('click', handleSquareClick);
        });
    }
    
    function handleMouseOver(event) {
        const square = event.target;
        if (!square.classList.contains('X') && !square.classList.contains('O') && gameActive) {
            square.classList.add('hover');
        }
    }
    
    function handleMouseOut(event) {
        const square = event.target;
        square.classList.remove('hover');
    }
    
    function handleSquareClick(event) {
        const square = event.target;
        const index = Array.from(squares).indexOf(square);
        
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            square.classList.remove('hover');
            
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
    
    initializeBoard();
});

// tic-tac-toe.js - Exercise 4
document.addEventListener('DOMContentLoaded', function() {
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    
    function initializeBoard() {
        squares.forEach(square => {
            square.classList.add('square');
            square.addEventListener('mouseover', handleMouseOver);
            square.addEventListener('mouseout', handleMouseOut);
            square.addEventListener('click', handleSquareClick);
        });
    }
    
    function handleMouseOver(event) {
        const square = event.target;
        if (!square.classList.contains('X') && !square.classList.contains('O') && gameActive) {
            square.classList.add('hover');
        }
    }
    
    function handleMouseOut(event) {
        const square = event.target;
        square.classList.remove('hover');
    }
    
    function handleSquareClick(event) {
        const square = event.target;
        const index = Array.from(squares).indexOf(square);
        
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            square.classList.remove('hover');
            
            checkWinner();
            
            if (gameActive) {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }
    
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                gameActive = false;
                statusDiv.textContent = `Congratulations! ${gameBoard[a]} is the Winner!`;
                statusDiv.classList.add('you-won');
                return;
            }
        }

        if (!gameBoard.includes('')) {
            gameActive = false;
            statusDiv.textContent = "Game ended in a tie!";
        }
    }
    
    initializeBoard();
});