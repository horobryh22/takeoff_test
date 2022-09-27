import React from 'react';

import { FormControl, FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';

import classes from './SignIn.module.css';
import { SignInValuesType } from './types';

import { FormBottomPart, FormInput } from 'components';
import { EMAIL_RULES, PASSWORD_RULES } from 'constant';
import { useVisibility } from 'hooks';
import { AllValuesFormType, ReturnComponentType } from 'types';

export const SignIn = (): ReturnComponentType => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AllValuesFormType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        mode: 'onBlur',
    });

    const [visible, visibility] = useVisibility(false);

    const onSubmit = (values: SignInValuesType): void => {
        console.log(values);
    };

    // if (isUserAuth) return <Navigate to="/profile" />;

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
