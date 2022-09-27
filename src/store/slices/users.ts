import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { fetchUsers } from 'store/thunks';
import { UsersStateType } from 'store/types';

const initialState: UsersStateType = {
    users: [],
    searchValue: '',
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
    },
    extraReducers: builder => {
        // get users
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.pending, state => {
            state.users = [];
        });
        builder.addCase(fetchUsers.rejected, state => {
            state.users = [];
        });
    },
});

export default usersSlice.reducer;
export const { setSearchValue } = usersSlice.actions;
