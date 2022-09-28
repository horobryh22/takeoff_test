import { RootState } from 'store/store';

export const selectUserEmail = (state: RootState): string => {
    return state.users.selectedUser.email;
};
