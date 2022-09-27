import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { UserType } from 'api/types';
import { fetchUsers } from 'store/thunks';
import { UsersStateType } from 'store/types';

const initialState: UsersStateType = {
    users: [],
    selectedUser: {
        email: '',
        firstName: '',
        phone: '',
        lastName: '',
        id: 0,
    },
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
    },
});

export default usersSlice.reducer;
export const { setSearchValue, setSelectedUser } = usersSlice.actions;
