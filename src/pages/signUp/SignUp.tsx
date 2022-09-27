import React from 'react';

import { FormControl, FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import classes from './SignUp.module.css';
import { SignUpFormType } from './types';

import { FormBottomPart, FormInput } from 'components';
import { EMAIL_RULES, PASSWORD_RULES } from 'constant';
import { useVisibility } from 'hooks';
import { AllValuesFormType, ReturnComponentType } from 'types';

const INTERVAL_TO_REDIRECT = 1000;

export const SignUp = (): ReturnComponentType => {
    const navigate = useNavigate();

    const [visible, visibility] = useVisibility(false);

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<AllValuesFormType>({ mode: 'onBlur' });

    const onSubmit = (values: SignUpFormType): void => {
        if (values.password !== values.passwordConfirm) {
            setError('passwordConfirm', { message: 'Passwords should be the same' });

            return;
        }

        console.log(values);
        setTimeout(() => {
            navigate('/login');
        }, INTERVAL_TO_REDIRECT);
    };

    // if (isUserAuth) return <Navigate to="/profile" />;

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
                            color={`${errors.password ? 'error' : 'primary'}`}
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
