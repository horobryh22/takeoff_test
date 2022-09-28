import React from 'react';

import { FormControl, FormGroup, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { ModalButtons } from 'components';
import { FIELDS } from 'constant';
import { useAppDispatch, useAppSelector } from 'hooks';
import classes from 'pages/signIn/SignIn.module.css';
import { setIsModalOpen } from 'store/slices';
import { createUser, updateUser } from 'store/thunks';
import { ReturnComponentType, UserDataValues } from 'types';

export const DataFields = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const modalName = useAppSelector(state => state.app.modalName);
    const id = useAppSelector(state => state.users.selectedUser.id);
    const phone = useAppSelector(state => state.users.selectedUser.phone);
    const email = useAppSelector(state => state.users.selectedUser.email);
    const firstName = useAppSelector(state => state.users.selectedUser.firstName);
    const lastName = useAppSelector(state => state.users.selectedUser.lastName);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<UserDataValues>({
        defaultValues: {
            email,
            firstName,
            lastName,
            phone,
        },
        mode: 'onBlur',
    });

    const onSubmit = (values: UserDataValues): void => {
        if (modalName === 'add') {
            dispatch(createUser(values));
        }

        if (modalName === 'edit') {
            dispatch(updateUser({ id, userData: values }));
        }

        dispatch(setIsModalOpen(false));
    };

    const closeModal = (): void => {
        dispatch(setIsModalOpen(false));
    };

    const mappedFields = FIELDS.map(field => {
        return (
            <>
                <Controller
                    key={field.name}
                    name={field.name}
                    control={control}
                    rules={field.rules}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            variant="standard"
                            label={field.name.toUpperCase()}
                            margin="normal"
                            color={`${errors[field.name] ? 'error' : 'primary'}`}
                        />
                    )}
                />
                <div className={classes.error}>{errors[field.name]?.message}</div>
            </>
        );
    });

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth>
                <FormGroup>{mappedFields}</FormGroup>
            </FormControl>
            <ModalButtons
                buttonName={modalName === 'add' ? 'Add user' : 'Edit user'}
                closeModal={closeModal}
            />
        </form>
    );
};
