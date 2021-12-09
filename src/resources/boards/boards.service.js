import boardsRepo from './board.memory.repository';
import Board from './board.model';
import tasksRepo from '../tasks/task.memory.repository';

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

export {
    addBoard,
    getAllBoards,
    getBoard,
    updateBoard,
    isBoardExists,
    deleteBoard,
};
