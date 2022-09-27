import React, { useEffect } from 'react';

import classes from './UsersList.module.css';

import { AboveTable, HeadTable } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchUsers } from 'store/thunks';
import { ReturnComponentType } from 'types';

export const UsersList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const searchValue = useAppSelector(state => state.users.searchValue);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [searchValue]);

    return (
        <div className={classes.wrapper}>
            <AboveTable />
            <HeadTable />
        </div>
    );
};
