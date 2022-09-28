import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AppStateType } from 'store/types';
import { ModalNameType, Nullable } from 'types';

const initialState: AppStateType = {
    isModalOpen: false,
    modalName: 'add',
    status: 'idle',
    error: null,
    isInitialized: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsModalOpen: (state, action: PayloadAction<boolean>) => {
            state.isModalOpen = action.payload;
        },
        setModalName: (state, action: PayloadAction<ModalNameType>) => {
            state.modalName = action.payload;
        },
        setAppStatus: (state, action: PayloadAction<'idle' | 'loading'>) => {
            state.status = action.payload;
        },
        setAppError: (state, action: PayloadAction<Nullable<string>>) => {
            state.error = action.payload;
        },
        setIsAppInitialized: (state, action: PayloadAction<boolean>) => {
            state.isInitialized = action.payload;
        },
    },
});

export default appSlice.reducer;
export const {
    setIsModalOpen,
    setModalName,
    setAppStatus,
    setAppError,
    setIsAppInitialized,
} = appSlice.actions;
