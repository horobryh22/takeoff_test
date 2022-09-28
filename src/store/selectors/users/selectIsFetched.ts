import { RootState } from 'store/store';

export const selectIsFetched = (state: RootState): boolean => {
    return state.users.isUsersFetched;
};
