import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { login, register } from 'store/thunks';
import { AuthStateType } from 'store/types';

const initialState: AuthStateType = {
    isUserAuth: false,
    authUserData: {
        email: '',
        id: 0,
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.isUserAuth = false;
            state.authUserData = { email: '', id: 0 };
        },
        setIsUserAuth: (state, action: PayloadAction<boolean>) => {
            state.isUserAuth = action.payload;
        },
    },
    extraReducers: builder => {
        // login
        builder.addCase(login.fulfilled, (state, action) => {
            state.isUserAuth = true;
            state.authUserData = action.payload.user;
        });
        builder.addCase(login.pending, state => {
            state.isUserAuth = false;
            state.authUserData = { email: '', id: 0 };
        });
        builder.addCase(login.rejected, state => {
            state.isUserAuth = false;
            state.authUserData = { email: '', id: 0 };
        });

        // register
        builder.addCase(register.fulfilled, (state, action) => {
            state.isUserAuth = true;
            state.authUserData = action.payload.user;
        });
        builder.addCase(register.pending, state => {
            state.isUserAuth = false;
            state.authUserData = { email: '', id: 0 };
        });
        builder.addCase(register.rejected, state => {
            state.isUserAuth = false;
            state.authUserData = { email: '', id: 0 };
        });
    },
});

export default authSlice.reducer;
export const { logout, setIsUserAuth } = authSlice.actions;
