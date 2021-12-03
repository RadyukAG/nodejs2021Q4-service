const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

const addBoard = (board) => {
    const newBoard = new Board(board).getBoard();
    return boardsRepo.addItem(newBoard);
};

const getAllBoards = () => boardsRepo.getAllItems();

const getBoard = (id) => boardsRepo.getItem(id);

module.exports = {
    addBoard,
    getAllBoards,
    getBoard,
};
