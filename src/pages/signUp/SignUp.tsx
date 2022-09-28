import React from 'react';

import { FormControl, FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import classes from './SignUp.module.css';

import { FormBottomPart, FormInput } from 'components';
import { EMAIL_RULES, PASSWORD_RULES } from 'constant';
import { useAppDispatch, useAppSelector, useVisibility } from 'hooks';
import { selectIsUserAuth } from 'store/selectors';
import { register } from 'store/thunks';
import { ReturnComponentType, ValuesFormType } from 'types';
import { setValueToLocalStorage } from 'utils';

export const SignUp = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [visible, visibility] = useVisibility(false);

    const isUserAuth = useAppSelector(selectIsUserAuth);

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<ValuesFormType>({ mode: 'onBlur' });

    const onSubmit = async ({
        passwordConfirm,
        password,
        email,
    }: ValuesFormType): Promise<void> => {
        if (password !== passwordConfirm) {
            setError('passwordConfirm', { message: 'Passwords should be the same' });

            return;
        }

        const { payload } = await dispatch(register({ email, password }));

        if (payload) {
            setValueToLocalStorage(payload);
        }
    };

    if (isUserAuth) return <Navigate to="/users" />;

    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Sign Up</h1>
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
                        <FormInput
                            control={control}
                            name="passwordConfirm"
                            rules={PASSWORD_RULES}
                            variant="standard"
                            type={`${visibility ? 'text' : 'password'}`}
                            label="Password"
                            margin="normal"
                            color={`${errors.passwordConfirm ? 'error' : 'primary'}`}
                            InputProps={{
                                endAdornment: visible,
                            }}
                        />
                        <div className={classes.error}>
                            {errors.passwordConfirm?.message}
                        </div>
                        <FormBottomPart
                            buttonName="Sign Up"
                            helperText="Already have an account?"
                            linkText="Sign In"
                            redirectTo="/login"
                        />
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};
