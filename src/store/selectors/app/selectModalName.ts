import { RootState } from 'store/store';
import { ModalNameType } from 'types';

export const selectModalName = (state: RootState): ModalNameType => {
    return state.app.modalName;
};
