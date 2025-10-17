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