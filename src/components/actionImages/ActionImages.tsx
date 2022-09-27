import React from 'react';

import { IconButton } from '@mui/material';

import { ActionImagesType } from './types';

import edit from 'assets/img/edit.svg';
import remove from 'assets/img/remove.svg';
import { useAppDispatch } from 'hooks';
import { setIsModalOpen, setModalName, setSelectedUser } from 'store/slices';
import { ReturnComponentType } from 'types';

export const ActionImages = ({ user }: ActionImagesType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const editUser = (): void => {
        dispatch(setIsModalOpen(true));
        dispatch(setModalName('edit'));
        dispatch(setSelectedUser(user));
    };

    const removeUser = (): void => {
        dispatch(setIsModalOpen(true));
        dispatch(setModalName('remove'));
        dispatch(setSelectedUser(user));
    };

    return (
        <div style={{ width: '70px', display: 'flex', justifyContent: 'space-around' }}>
            <IconButton size="small" onClick={removeUser}>
                <img src={remove} alt="remove" />
            </IconButton>
            <IconButton size="small" onClick={editUser}>
                <img src={edit} alt="edit" />
            </IconButton>
        </div>
    );
};
