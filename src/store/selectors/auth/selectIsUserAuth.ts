import { RootState } from 'store/store';

export const selectIsUserAuth = (state: RootState): boolean => {
    return state.auth.isUserAuth;
};
