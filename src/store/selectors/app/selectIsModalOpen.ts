import { RootState } from 'store/store';

export const selectIsModalOpen = (state: RootState): boolean => {
    return state.app.isModalOpen;
};
