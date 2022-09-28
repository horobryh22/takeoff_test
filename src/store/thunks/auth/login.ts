import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { AuthResponseType } from 'api/types';
import { setAppError, setAppStatus } from 'store/slices';
import { Nullable, ValuesFormType } from 'types';

export const login = createAsyncThunk<
    AuthResponseType,
    ValuesFormType,
    { rejectValue: string }
>('auth/login', async (userData, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setAppStatus('loading'));
        const { data } = await authAPI.login(userData);

        return data;
    } catch (e) {
        const err = e as AxiosError;

        dispatch(setAppError(err.response?.data as Nullable<string>));

        return rejectWithValue(err.message);
    } finally {
        dispatch(setAppStatus('idle'));
    }
});
