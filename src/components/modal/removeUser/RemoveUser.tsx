import React from 'react';

import { ModalButtons, ModalParent } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectUserId } from 'store/selectors';
import { setIsModalOpen } from 'store/slices';
import { deleteUser } from 'store/thunks';
import { ModalPropsType, ReturnComponentType } from 'types';

export const RemoveUser = ({ setOpen, open }: ModalPropsType): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(selectUserId);

    const removeUser = (): void => {
        if (userId) {
            dispatch(deleteUser(userId));
            dispatch(setIsModalOpen(false));
        }
    };

    return (
        <ModalParent open={open} setOpen={setOpen}>
            <div>Do you really want to remove this user?</div>
            <ModalButtons
                buttonName={'Remove'}
                action={removeUser}
                closeModal={setOpen}
            />
        </ModalParent>
    );
};
