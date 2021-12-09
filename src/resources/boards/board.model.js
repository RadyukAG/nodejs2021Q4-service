import  { uuidv4 } from 'uuid';

class Board {
    constructor({
        id = uuidv4(),
        title = 'Title',
        columns = [],
    }) {
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
