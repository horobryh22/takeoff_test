import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { usersAPI } from 'api';
import { setAppError, setAppStatus } from 'store/slices';
import { RootState } from 'store/store';
import { fetchUsers } from 'store/thunks';
import { Nullable, UserDataValues } from 'types';

export const updateUser = createAsyncThunk<
    void,
    { id: number; userData: UserDataValues },
    { rejectValue: string; state: RootState }
>('users/updateUser', async ({ userData, id }, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setAppStatus('loading'));
        await usersAPI.updateUser(id, userData);

        await dispatch(fetchUsers());
    } catch (e) {
        const err = e as AxiosError;

        dispatch(setAppError(err.response?.data as Nullable<string>));

        return rejectWithValue(err.message);
    } finally {
        dispatch(setAppStatus('idle'));
    }
});
