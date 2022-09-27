import React from 'react';

import { DataFields, ModalParent } from 'components';
import { ModalPropsType, ReturnComponentType } from 'types';

export const AddUser = ({ setOpen, open }: ModalPropsType): ReturnComponentType => {
    return (
        <ModalParent setOpen={setOpen} open={open}>
            <DataFields />
        </ModalParent>
    );
};
