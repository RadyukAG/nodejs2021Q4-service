import { Item } from '../../common/repo';

interface IDraftUser {
    id?: string;
    name: string;
    login: string;
    password: string;
};

interface IUser extends Item {
    name: string;
    login: string;
    password: string;
};

interface IUserToResponse {
    id: string;
    name: string;
    login: string;
}

interface UserParamsWithId {
    id: string;
}

export { IDraftUser, IUser, IUserToResponse, UserParamsWithId };
