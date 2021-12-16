import boardsRepo from './board.memory.repository';
import Board from './board.model';
import tasksRepo from '../tasks/task.memory.repository';
import { IBoard, IDraftBoard } from './types';


const addBoard = (board: IDraftBoard): IBoard | null => {
    const newBoard = new Board(board).getBoard();
    return boardsRepo.addItem(newBoard);
};

const getAllBoards = (): (IBoard | null)[] => boardsRepo.getAllItems();

const getBoard = (id: string) => boardsRepo.getItem(id);

const updateBoard = (id: string, board: IBoard) => boardsRepo.updateItem({ ...board, id });

const isBoardExists = (id: string) => boardsRepo.checkItem(id);

const deleteBoard = (id: string) => {
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
