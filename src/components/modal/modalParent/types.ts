import { ReactNode } from 'react';

export type ModalParentType = {
    open: boolean;
    setOpen: () => void;
    children: ReactNode;
};
