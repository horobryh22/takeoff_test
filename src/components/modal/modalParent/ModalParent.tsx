import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal } from '@mui/material';

import classes from './ModalParent.module.css';
import { BOX_STYLES } from './styles';
import { ModalParentType } from './types';

import { useAppSelector } from 'hooks';
import { selectModalName } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const ModalParent = ({
    children,
    open,
    setOpen,
}: ModalParentType): ReturnComponentType => {
    const modalName = useAppSelector(selectModalName);

    return (
        <Modal open={open} onClose={setOpen}>
            <Box sx={BOX_STYLES}>
                <div className={classes.modalHeader}>
                    <span>{modalName.toUpperCase()}</span>
                    <CloseIcon onClick={setOpen} style={{ cursor: 'pointer' }} />
                </div>
                {children}
            </Box>
        </Modal>
    );
};
