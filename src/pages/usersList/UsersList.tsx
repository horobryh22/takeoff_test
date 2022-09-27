import React, { useEffect } from 'react';

import classes from './UsersList.module.css';

import { AboveTable, AddUser, EditUser, HeadTable } from 'components';
import { RemoveUser } from 'components/modal/removeUser/RemoveUser';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setIsModalOpen } from 'store/slices';
import { fetchUsers } from 'store/thunks';
import { ReturnComponentType } from 'types';

export const UsersList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const searchValue = useAppSelector(state => state.users.searchValue);
    const modalName = useAppSelector(state => state.app.modalName);
    const isModalOpen = useAppSelector(state => state.app.isModalOpen);

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

    return (
        <div className={classes.wrapper}>
            <AboveTable />
            <HeadTable />
            {mappedModal[modalName]}
        </div>
    );
};
