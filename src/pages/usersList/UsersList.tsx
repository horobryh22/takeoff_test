import React, { useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import classes from './UsersList.module.css';

import { AboveTable, AddUser, EditUser, HeadTable, RemoveUser } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setIsModalOpen } from 'store/slices';
import { fetchUsers } from 'store/thunks';
import { ReturnComponentType } from 'types';

export const UsersList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const searchValue = useAppSelector(state => state.users.searchValue);
    const modalName = useAppSelector(state => state.app.modalName);
    const isModalOpen = useAppSelector(state => state.app.isModalOpen);
    const isUserAuth = useAppSelector(state => state.auth.isUserAuth);

    const closeModal = (): void => {
        dispatch(setIsModalOpen(false));
    };

    const mappedModal = {
        add: <AddUser open={isModalOpen} setOpen={closeModal} />,
        edit: <EditUser open={isModalOpen} setOpen={closeModal} />,
        remove: <RemoveUser open={isModalOpen} setOpen={closeModal} />,
    };

    useEffect(() => {
        dispatch(fetchUsers());
    }, [searchValue]);

    if (!isUserAuth) return <Navigate to="/login" />;

    return (
        <div className={classes.wrapper}>
            <AboveTable />
            <HeadTable />
            {mappedModal[modalName]}
        </div>
    );
};
