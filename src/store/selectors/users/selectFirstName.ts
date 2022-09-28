import { RootState } from 'store/store';

export const selectFirstName = (state: RootState): string => {
    return state.users.selectedUser.firstName;
};
