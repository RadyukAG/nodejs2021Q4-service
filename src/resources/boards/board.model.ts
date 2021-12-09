import  { v4 as uuidv4 } from 'uuid';
import { IBoard, IDraftBoard } from './types';

class Board {
    board: IBoard;

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

    getBoard() {
        return this.board;
    }
}

export default Board;
