const gameBoard = (function() {
    const board = [null, null, null, null, null, null, null, null, null];
    const getBoard = function() {
        return board;
    };

    return {
        board,
        getBoard, 
    };
})();

const player = function(name) {
    return {name};
};

const game = (function() {
    let turn = 1;
    const changeTurn = function() {
        turn === 1 ? turn++ : turn--;
    }
    const gameOver = function() {
        if (!gameBoard.getBoard().includes(null)) {
            return true;
        } else {
            return false;
        };
    };
    const addX = function(index) {
        gameBoard.board.splice(index, 1, 'X');
        playTurn();
    };
    const addO = function(index) {
        gameBoard.board.splice(index, 1, 'O');
        playTurn();
    };
    const searchBoard = function(a, b, c) {
        let board = gameBoard.getBoard()
        let boardSearch = board[a] + board[b] + board[c];
        if (typeof boardSearch == 'string') {
            if (board[a] === board[b] && board[b] === board[c]) {
                return ((a.toString() + b + c) + ' ' + boardSearch);
            } else {
                return false;
            };
        }
    }
    const checkGameWin = function() {
        let won = (searchBoard(0,1,2) || searchBoard(0,3,6) || searchBoard(0,4,8) || searchBoard(1,4,7) || searchBoard(2,5,8) || searchBoard(2,4,6) || searchBoard(3,4,5) || searchBoard(6,7,8)) 
        if (won) {
            if (won.includes('XXX')) {
                console.log('x won')
                return 'X wins';
            } else if (won.includes('OOO')) {
                console.log('o won')
                return 'O wins';
            };
        } else {
            return false;
        };
    }
    const playTurn = function() {
        gameOver();
        checkGameWin();
    }

    return {
        addX,
        addO,
        checkGameWin,
    }
})()