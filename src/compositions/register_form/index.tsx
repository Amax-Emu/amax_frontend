import * as React from "react";
import { makeStyles, createStyles,Theme, useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next'
import {Container} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import "/src/components/validators/unicusername"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

type BlurPlayerSubmitForm = {
    username: string;
    password: string;
    accountType: number;
    acceptEULA: boolean;
};

const validationSchema =
    Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(4, 'Username must be at least 5 characters')
            .max(15, 'Username must not exceed 15 characters')
            .unicusername(),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .max(15, 'Password must not exceed 15 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        accountType: Yup.string()
            .required('Select your account type')
            .oneOf(["1", "0"], 'Selected account type is invalid'),
        acceptEULA: Yup.bool().oneOf([true], 'Accept Terms is required')
    });

export default function CreateBlurAccountForm() {
    const classes = useStyles();
    const { register, handleSubmit,formState:{ errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => console.log(data);

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("username")} id="outlined-basic" label="Login" variant="outlined"
                           helperText={errors.username?.message}
                           error={!!errors?.username}
                />
                <TextField {...register("password")} id="outlined-basic" label="Password" variant="outlined"
                           helperText={errors.username?.message}
                           error={!!errors?.username}
                />
                <TextField {...register("confirmPassword")} id="outlined-basic" label="Confirm Password" variant="outlined"
                           helperText={errors.username?.message}
                           error={!!errors?.username}
                />
                <input type="submit" />
            </form>
        </Container>
    )
}
