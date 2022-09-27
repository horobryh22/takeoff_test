import { configureStore } from '@reduxjs/toolkit';

import { usersReducer, appReducer } from 'store/slices';

export const store = configureStore({
    reducer: {
        app: appReducer,
        users: usersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
