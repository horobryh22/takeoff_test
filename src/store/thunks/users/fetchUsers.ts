import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { usersAPI } from 'api';
import { UserType } from 'api/types';
import { RootState } from 'store/store';

export const fetchUsers = createAsyncThunk<
    UserType[],
    void,
    { rejectValue: string; state: RootState }
>('users/fetchUsers', async (_, { rejectWithValue, getState }) => {
    try {
        const searchValue = getState().users.searchValue;
        const response = await usersAPI.fetchUsers(searchValue);

        return response.data;
    } catch (e) {
        const err = e as AxiosError;

        return rejectWithValue(err.message);
    }
});
