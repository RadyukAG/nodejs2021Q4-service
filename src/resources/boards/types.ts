import { Item } from "../../common/repo";

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

interface IBoard extends Item {
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
