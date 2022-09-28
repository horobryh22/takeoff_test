import { UserType } from 'api/types';
import { RootState } from 'store/store';

export const selectUsers = (state: RootState): UserType[] => {
    return state.users.users;
};
