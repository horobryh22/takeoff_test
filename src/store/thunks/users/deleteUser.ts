import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { usersAPI } from 'api';
import { setAppError, setAppStatus } from 'store/slices';
import { RootState } from 'store/store';
import { fetchUsers } from 'store/thunks';
import { Nullable } from 'types';

export const deleteUser = createAsyncThunk<
    void,
    number,
    { rejectValue: string; state: RootState }
>('users/deleteUser', async (id, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setAppStatus('loading'));
        await usersAPI.deleteUser(id);

        await dispatch(fetchUsers());
    } catch (e) {
        const err = e as AxiosError;

        dispatch(setAppError(err.response?.data as Nullable<string>));

        return rejectWithValue(err.message);
    } finally {
        dispatch(setAppStatus('idle'));
    }
});
