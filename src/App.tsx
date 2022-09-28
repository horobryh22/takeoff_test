import React, { useEffect } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

import { Header, RoutesApp, ErrorSnackbar } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setIsAppInitialized, setIsUserAuth } from 'store/slices';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const appStatus = useAppSelector(state => state.app.status);
    const isUserAuth = useAppSelector(state => state.auth.isUserAuth);
    const isAppInitialized = useAppSelector(state => state.app.isInitialized);

    useEffect(() => {
        const token = window.localStorage.getItem('token');

        if (token) {
            dispatch(setIsUserAuth(true));
            dispatch(setIsAppInitialized(true));

            return;
        }

        dispatch(setIsUserAuth(false));
        dispatch(setIsAppInitialized(false));
    }, []);

    if (!isAppInitialized) {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: '47%',
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
                open={appStatus === 'loading'}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {isUserAuth && <Header />}
            <RoutesApp />
            <ErrorSnackbar />
        </>
    );
};

export default App;
