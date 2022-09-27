import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AppStateType } from 'store/types';
import { ModalNameType } from 'types';

const initialState: AppStateType = {
    isModalOpen: false,
    modalName: 'add',
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
    },
});

export default appSlice.reducer;
export const { setIsModalOpen, setModalName } = appSlice.actions;
