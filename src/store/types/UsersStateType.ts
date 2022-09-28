import { UserType } from 'api/types';

export type UsersStateType = {
    users: UserType[];
    selectedUser: UserType;
    searchValue: string;
    isUsersFetched: boolean;
};
