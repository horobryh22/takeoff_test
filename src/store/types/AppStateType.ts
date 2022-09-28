import { ModalNameType, Nullable } from 'types';

export type AppStateType = {
    isModalOpen: boolean;
    modalName: ModalNameType;
    status: 'loading' | 'idle';
    error: Nullable<string>;
    isInitialized: boolean;
};
