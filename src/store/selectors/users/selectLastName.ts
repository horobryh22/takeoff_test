import { RootState } from 'store/store';

export const selectLastName = (state: RootState): string => {
    return state.users.selectedUser.lastName;
};
