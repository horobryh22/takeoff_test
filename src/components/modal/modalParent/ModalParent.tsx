import React, { ReactNode } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal } from '@mui/material';

import classes from './ModalParent.module.css';
import { BOX_STYLES } from './styles';

import { useAppSelector } from 'hooks';
import { ReturnComponentType } from 'types';

export type ModalParentType = {
    open: boolean;
    setOpen: () => void;
    children: ReactNode;
};

export const ModalParent = ({
    children,
    open,
    setOpen,
}: ModalParentType): ReturnComponentType => {
    const modalName = useAppSelector(state => state.app.modalName);

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
