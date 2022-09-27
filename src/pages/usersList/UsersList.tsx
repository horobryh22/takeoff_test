import React from 'react';

import classes from './UsersList.module.css';

import { HeadTable, StyledButton } from 'components';
import { Search } from 'components/search/Search';
import { ReturnComponentType } from 'types';

export const UsersList = (): ReturnComponentType => {
    return (
        <div className={classes.wrapper}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Search />
                <StyledButton variant={'contained'}>AddUser</StyledButton>
            </div>
            <HeadTable />
        </div>
    );
};
