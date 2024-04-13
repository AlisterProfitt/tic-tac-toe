const gameBoard = (function() {
    const board = [null, null, null, null, null, null, null, null, null];
    const displayBoard = function() {
        return board;
    };

    return {
        board,
        displayBoard, 
    };
})();

const player = function(name) {
    return {name};
};

const game = (function() {
    const turn = 'player1';
    const changeTurn = function() {
        turn === 'player1' ? turn = 'player2' : turn = 'player1';
    }
    const gameOver = function() {
        if (!gameBoard.displayBoard().includes(null)) {
            return true;
        } else {
            return false;
        };
    };
    const addX = function(index) {
        gameBoard.board.splice(index, 1, 'X');
    };
    const addO = function(index) {
        gameBoard.board.splice(index, 1, 'O');
    };
    const gameWin = function() {
        let board = gameBoard.displayBoard()
        let searchWin = function(a, b, c) {
            return board[a] === board[b] === board[c];
        }
        if (searchWin(0, 1, 2) || searchWin(0,3,6) || searchWin(0,4,8) || searchWin(1,4,7) || searchWin(2,5,8) || searchWin(2,4,6) || searchWin(3,4,5) || searchWin(6,7,8)) {
            if (searchWin(a, b, c) === 'XXX') {
                return 'X wins';
            } else if (searchWin(a, b, c) === 'OOO') {
                return 'O wins';
            };
        } else {
            return false;
        };
    }

    return {
        changeTurn,
        gameOver,
        gameWin,
        addX,
        addO,
    }
})()