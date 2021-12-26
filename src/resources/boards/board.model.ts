import  { v4 as uuidv4 } from 'uuid';
import { IBoard, IDraftBoard } from './types';

class Board {
    board: IBoard;

/**
 * Save a board in object. Also maps throw array of columns and assings id to each
 * 
 * @param param0.id - string id of a board
 * @param param0.title - string title of a board
 * @param param0.columns - columns, that belong to board (instances of IColumn)
 */
    constructor({
        id = uuidv4(),
        title = 'Title',
        columns,
    }: IDraftBoard) {
        this.board = {
            id,
            title,
            columns: columns.map(column => ({
                ...column,
                id: uuidv4(),
            })),
        }
    }

/**
 * Get a board object
 * 
 * @returns a board instance
 */
    getBoard(): IBoard {
        return this.board;
    }
}

export default Board;
