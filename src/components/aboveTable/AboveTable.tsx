import React from 'react';

import classes from './AboveTable.module.css';

import { Search, StyledButton } from 'components';
import { ReturnComponentType } from 'types';

export const AboveTable = (): ReturnComponentType => {
    return (
        <div className={classes.wrapper}>
            <Search />
            <StyledButton variant={'contained'}>AddUser</StyledButton>
        </div>
    );
};
