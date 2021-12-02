const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

const addBoard = (board) => {
    const newBoard = new Board(board).getBoard();
    return boardsRepo.addItem(newBoard);
};

const getAllBoards = () => boardsRepo.getAllItems();

module.exports = {
    addBoard,
    getAllBoards,
};
