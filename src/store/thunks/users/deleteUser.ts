import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { usersAPI } from 'api';
import { RootState } from 'store/store';
import { fetchUsers } from 'store/thunks';

export const deleteUser = createAsyncThunk<
    void,
    number,
    { rejectValue: string; state: RootState }
>('users/deleteUser', async (id, { rejectWithValue, dispatch }) => {
    try {
        await usersAPI.deleteUser(id);

        await dispatch(fetchUsers());
    } catch (e) {
        const err = e as AxiosError;

        return rejectWithValue(err.message);
    }
});
