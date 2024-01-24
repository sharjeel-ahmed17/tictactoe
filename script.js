
        const board = document.getElementById('tic-tac-toe-board');
        const resultDisplay = document.getElementById('result');
        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;

        function createCell(index) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => cellClick(index));
            return cell;
        }

        function renderBoard() {
            board.innerHTML = '';
            for (let i = 0; i < 9; i++) {
                const cell = createCell(i);
                cell.textContent = gameBoard[i];
                board.appendChild(cell);
            }
        }

        function cellClick(index) {
            if (!gameActive || gameBoard[index] !== '') return;

            gameBoard[index] = currentPlayer;
            renderBoard();
            if (checkWinner()) {
                resultDisplay.textContent = `Player ${currentPlayer} wins!`;
                gameActive = false;
            } else if (gameBoard.every(cell => cell !== '')) {
                resultDisplay.textContent = "It's a draw!";
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }

        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            return winPatterns.some(pattern => {
                const [a, b, c] = pattern;
                return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
            });
        }

        function resetBoard() {
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            resultDisplay.textContent = '';
            gameActive = true;
            currentPlayer = 'X';
            renderBoard();
        }

        function startNewGame() {
            resetBoard();
        }

        renderBoard();
   