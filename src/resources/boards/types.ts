interface IColumn {
    id?: string;
    title: string;
    order: number;
};

interface IDraftBoard {
    id?: string;
    title: string;
    columns: Array<IColumn>;
}

interface IBoard extends IDraftBoard {
    id: string;
    title: string;
    columns: Array<IColumn>;
};

interface BoardParamsWithId {
    id: string;
}

interface FullBoardParams extends BoardParamsWithId {
    taskId: string;
}

export { IColumn, IBoard, BoardParamsWithId, FullBoardParams, IDraftBoard };
