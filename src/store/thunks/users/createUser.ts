import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { usersAPI } from 'api';
import { RootState } from 'store/store';
import { fetchUsers } from 'store/thunks/users/fetchUsers';
import { UserDataValues } from 'types';

export const createUser = createAsyncThunk<
    void,
    UserDataValues,
    { rejectValue: string; state: RootState }
>('users/createUser', async (userData, { rejectWithValue, dispatch }) => {
    try {
        await usersAPI.createUser(userData);

        await dispatch(fetchUsers());
    } catch (e) {
        const err = e as AxiosError;

        return rejectWithValue(err.message);
    }
});
