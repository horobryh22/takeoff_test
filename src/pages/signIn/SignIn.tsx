import React from 'react';

import { FormControl, FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import classes from './SignIn.module.css';

import { FormBottomPart, FormInput } from 'components';
import { EMAIL_RULES, PASSWORD_RULES } from 'constant';
import { useAppDispatch, useAppSelector, useVisibility } from 'hooks';
import { selectIsUserAuth } from 'store/selectors';
import { login } from 'store/thunks';
import { ReturnComponentType, ValuesFormType } from 'types';
import { setValueToLocalStorage } from 'utils';

export const SignIn = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const isUserAuth = useAppSelector(selectIsUserAuth);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ValuesFormType>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    const [visible, visibility] = useVisibility(false);

    const onSubmit = async (values: ValuesFormType): Promise<void> => {
        const { payload } = await dispatch(login(values));

        if (payload) {
            setValueToLocalStorage(payload);
        }
    };

    if (isUserAuth) return <Navigate to="/users" />;

    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Sign In</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth>
                    <FormGroup>
                        <FormInput
                            control={control}
                            name="email"
                            rules={EMAIL_RULES}
                            variant="standard"
                            label="Email"
                            margin="normal"
                            color={`${errors.email ? 'error' : 'primary'}`}
                        />
                        <div className={classes.error}>{errors.email?.message}</div>
                        <FormInput
                            control={control}
                            name="password"
                            rules={PASSWORD_RULES}
                            variant="standard"
                            type={`${visibility ? 'text' : 'password'}`}
                            label="Password"
                            margin="normal"
                            color={`${errors.password ? 'error' : 'primary'}`}
                            InputProps={{
                                endAdornment: visible,
                            }}
                        />
                        <div className={classes.error}>{errors.password?.message}</div>
                        <FormBottomPart
                            buttonName="Sign In"
                            helperText="Don’t have an account?"
                            linkText="Sign Up"
                            redirectTo="/registration"
                        />
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};
