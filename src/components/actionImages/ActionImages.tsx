import React from 'react';

import { IconButton } from '@mui/material';

import edit from 'assets/img/edit.svg';
import remove from 'assets/img/remove.svg';
import { ReturnComponentType } from 'types';

export const ActionImages = (): ReturnComponentType => {
    return (
        <div style={{ width: '70px', display: 'flex', justifyContent: 'space-around' }}>
            <IconButton size="small">
                <img src={remove} alt="remove" />
            </IconButton>
            <IconButton size="small">
                <img src={edit} alt="edit" />
            </IconButton>
        </div>
    );
};
