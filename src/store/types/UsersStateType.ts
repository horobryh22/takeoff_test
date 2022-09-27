import { UserType } from 'api/types';

export type UsersStateType = {
    users: UserType[];
    searchValue: string;
};
