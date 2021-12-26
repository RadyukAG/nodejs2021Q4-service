import boardsRepo from './board.memory.repository';
import Board from './board.model';
import tasksRepo from '../tasks/task.memory.repository';
import { IBoard, IDraftBoard } from './types';
/**
 * Add board to repo
 * 
 * @param board - instance of IDraftBoard
 * @returns saved board
 */
const addBoard = (board: IDraftBoard): IBoard | undefined=> {
    const newBoard = new Board(board).getBoard();
    return boardsRepo.addItem(newBoard);
};
/**
 * Get all boards from repo
 * 
 * @returns array of boards
 */
const getAllBoards = (): (IBoard | undefined)[] => boardsRepo.getAllItems();
/**
 * Get board by id
 * 
 * @param id - string id of a board
 * @returns a board from repo
 */
const getBoard = (id: string): IBoard | undefined => boardsRepo.getItem(id);
/**
 * Change fields of board in repo
 * 
 * @param id - id of a board
 * @param board - board object with new values
 * @returns 
 */
const updateBoard = (id: string, board: IBoard): IBoard | undefined => boardsRepo.updateItem(id, board);
/**
 * Check if board exists in repo
 * 
 * @param id - id of a board
 * @returns - true if board exists or false
 */
const isBoardExists = (id: string): boolean => boardsRepo.checkItem(id);
/**
 * Delete board in repo and delete all related tasks
 * 
 * @param id - id of a board
 */
const deleteBoard = (id: string): void => {
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
