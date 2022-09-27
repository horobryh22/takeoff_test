import React from 'react';

import { DataFields, ModalParent } from 'components';
import { ModalPropsType, ReturnComponentType } from 'types';

export const EditUser = ({ setOpen, open }: ModalPropsType): ReturnComponentType => {
    return (
        <ModalParent open={open} setOpen={setOpen}>
            <DataFields />
        </ModalParent>
    );
};
