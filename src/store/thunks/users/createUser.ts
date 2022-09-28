import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { usersAPI } from 'api';
import { setAppError, setAppStatus } from 'store/slices';
import { RootState } from 'store/store';
import { fetchUsers } from 'store/thunks/users/fetchUsers';
import { Nullable, UserDataValues } from 'types';

export const createUser = createAsyncThunk<
    void,
    UserDataValues,
    { rejectValue: string; state: RootState }
>('users/createUser', async (userData, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setAppStatus('loading'));
        await usersAPI.createUser(userData);

        await dispatch(fetchUsers());
    } catch (e) {
        const err = e as AxiosError;

        dispatch(setAppError(err.response?.data as Nullable<string>));

        return rejectWithValue(err.message);
    } finally {
        dispatch(setAppStatus('idle'));
    }
});
