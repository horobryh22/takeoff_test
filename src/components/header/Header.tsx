import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useAppDispatch } from 'hooks';
import { logout } from 'store/slices';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const handleClick = (): void => {
        dispatch(logout());
        window.localStorage.removeItem('token');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Users
                    </Typography>
                    <Button color="inherit" onClick={handleClick}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
