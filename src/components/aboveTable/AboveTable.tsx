import React from 'react';

import classes from './AboveTable.module.css';

import { Search, StyledButton } from 'components';
import { useAppDispatch } from 'hooks';
import { setIsModalOpen, setModalName } from 'store/slices';
import { ReturnComponentType } from 'types';

export const AboveTable = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const handleClick = (): void => {
        dispatch(setIsModalOpen(true));
        dispatch(setModalName('add'));
    };

    return (
        <div className={classes.wrapper}>
            <Search />
            <StyledButton onClick={handleClick} variant={'contained'}>
                AddUser
            </StyledButton>
        </div>
    );
};
