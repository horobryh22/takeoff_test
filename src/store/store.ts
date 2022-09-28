import { configureStore } from '@reduxjs/toolkit';

import { appReducer, authReducer, usersReducer } from 'store/slices';

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        users: usersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
