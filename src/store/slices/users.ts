import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { UserType } from 'api/types';
import { setIsModalOpen } from 'store/slices/app';
import { fetchUsers } from 'store/thunks';
import { UsersStateType } from 'store/types';

const initialState: UsersStateType = {
    users: [],
    selectedUser: {} as UserType,
    searchValue: '',
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setSelectedUser: (state, action: PayloadAction<UserType>) => {
            state.selectedUser = action.payload;
        },
    },
    extraReducers: builder => {
        // get users
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload.reverse();
        });
        builder.addCase(fetchUsers.pending, state => {
            state.users = [];
        });
        builder.addCase(fetchUsers.rejected, state => {
            state.users = [];
        });
        builder.addCase(setIsModalOpen, state => {
            state.selectedUser = {} as UserType;
        });
    },
});

export default usersSlice.reducer;
export const { setSearchValue, setSelectedUser } = usersSlice.actions;
