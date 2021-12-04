const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');
const tasksRepo = require('../tasks/task.memory.repository');

const addBoard = (board) => {
    const newBoard = new Board(board).getBoard();
    return boardsRepo.addItem(newBoard);
};

const getAllBoards = () => boardsRepo.getAllItems();

const getBoard = (id) => boardsRepo.getItem(id);

const updateBoard = (id, board) => boardsRepo.updateItem({ ...board, id });

const isBoardExists = (id) => boardsRepo.checkItem(id);

const deleteBoard = (id) => {
    boardsRepo.deleteItem(id);
    tasksRepo.getTasksRepo(id).deleteAllItems();
};

module.exports = {
    addBoard,
    getAllBoards,
    getBoard,
    updateBoard,
    isBoardExists,
    deleteBoard,
};
