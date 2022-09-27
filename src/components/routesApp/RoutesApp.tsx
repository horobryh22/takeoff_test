import React from 'react';

import { Container, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { SignIn, SignUp, UsersList } from 'pages';
import { ReturnComponentType } from 'types';

export const RoutesApp = (): ReturnComponentType => {
    return (
        <Container fixed>
            <Grid container justifyContent="center">
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="login" element={<SignIn />} />
                    <Route path="registration" element={<SignUp />} />
                    <Route path="users" element={<UsersList />} />
                </Routes>
            </Grid>
        </Container>
    );
};
