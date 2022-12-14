import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { usersAPI } from 'api';
import { UserType } from 'api/types';
import { setAppError, setAppStatus } from 'store/slices';
import { RootState } from 'store/store';
import { Nullable } from 'types';

export const fetchUsers = createAsyncThunk<
    UserType[],
    void,
    { rejectValue: string; state: RootState }
>('users/fetchUsers', async (_, { rejectWithValue, getState, dispatch }) => {
    try {
        dispatch(setAppStatus('loading'));
        const searchValue = getState().users.searchValue;
        const response = await usersAPI.fetchUsers(searchValue);

        return response.data;
    } catch (e) {
        const err = e as AxiosError;

        dispatch(setAppError(err.response?.data as Nullable<string>));

        return rejectWithValue(err.message);
    } finally {
        dispatch(setAppStatus('idle'));
    }
});
