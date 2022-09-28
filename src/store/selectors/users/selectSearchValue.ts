import { RootState } from 'store/store';

export const selectSearchValue = (state: RootState): string => {
    return state.users.searchValue;
};
