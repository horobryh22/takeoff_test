import { RootState } from 'store/store';

export const selectUserId = (state: RootState): number => {
    return state.users.selectedUser.id;
};
