import * as React from "react";
import "./register_form.css";
import { makeStyles, createStyles,Theme, useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next'
import {Container} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import "/src/components/validators/unicusername"
import { yupResolver } from '@hookform/resolvers/yup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Typography} from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import * as Yup from 'yup';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(2),
        },
        textfield: {
            margin: theme.spacing(1),
            width: '300px',
        },
        selectWide: {
            backgroundColor: "lightblue",
            color: "black",
            width: '400px',
            height: '50px',
            margin: theme.spacing(1),
        }
    }));

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
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const onSubmit = data => console.log(data);

    return (
        <Container>
            <form  className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("username")} id="outlined-basic" label="Login" variant="outlined" className={classes.textfield}
                           helperText={errors.username?.message}
                           error={!!errors?.username}
                />
                <TextField {...register("password")} id="outlined-basic" label="Password" variant="outlined" className={classes.textfield}
                           helperText={errors.password?.message}
                           error={!!errors?.password}
                />
                <TextField {...register("confirmPassword")} id="outlined-basic" label="Confirm Password" variant="outlined" className={classes.textfield}
                           helperText={errors.confirmPassword?.message}
                           error={!!errors?.confirmPassword}
                />
                <div>
                <FormLabel component="legend">Account type</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel className={classes.selectWide} value="1" control={<Radio />} label="Normal account" />
                    <FormControlLabel className={classes.selectWide} value="0" control={<Radio />} label="Fully unlocked account" />
                </RadioGroup>
                </div>

                <div>
                    <Typography>
                        <ul>
                        <li><h2>Don't do this</h2></li>
                            <li>And this</li>
                            <li>And definitely not this </li>
                        </ul>
                    </Typography>
                </div>


                <input type="submit" />
            </form>
        </Container>
    )
}
