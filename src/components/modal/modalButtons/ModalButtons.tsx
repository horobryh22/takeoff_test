import React from 'react';

import classes from './ModalButtons.module.css';
import { ModalButtonsType } from './types';

import { StyledButton } from 'components';
import { ReturnComponentType } from 'types';

export const ModalButtons = ({
    buttonName,
    action,
    closeModal,
}: ModalButtonsType): ReturnComponentType => {
    return (
        <div className={classes.wrapper}>
            <StyledButton type={'submit'} onClick={action} variant={'contained'}>
                {buttonName}
            </StyledButton>
            <StyledButton onClick={closeModal} variant={'contained'}>
                Cancel
            </StyledButton>
        </div>
    );
};
