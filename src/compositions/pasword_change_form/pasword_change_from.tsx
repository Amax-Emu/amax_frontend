import * as React from "react";
import {makeStyles, createStyles, Theme, useTheme} from '@material-ui/core/styles';
import {useTranslation} from 'react-i18next'
import {Container} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Typography} from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import * as Yup from 'yup';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ReactMarkdown from 'react-markdown'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {useHistory} from "react-router-dom";
import FormHelperText from "@material-ui/core/FormHelperText";
import remarkGfm from 'remark-gfm'
import axios from 'axios';
import {useAuthStore} from "../../stores";
import {useUserDataStore} from "../../stores/userdataStore";

const {AMAX_API_URL} = process.env;

const validationSchema =
    Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .max(15, 'Password must not exceed 15 characters')
            .matches(
                /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one lowercase and one number"
            ),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    });

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
            //backgroundColor: "lightblue",
            //color: "black",
            //width: '400px',
            margin: theme.spacing(1),
        },
        registerButton: {
            //backgroundColor: "lightblue",
            //color: "black",
            //width: '400px',
            //margin: theme.spacing(1),
        }, successIcon: {
            backgroundColor: 'green',
        },
        errorIcon: {
            backgroundColor: 'red',
        },
        hiddenClass: {
            visibility: 'hidden',
            height: "0px"
        },
    }));


type response = {
    success: boolean;
    msg: string;
}

export default function ChangePasswordForm() {
    const classes = useStyles();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
    });
    const auth = useAuthStore()
    const user = useUserDataStore()
    let history = useHistory();
    const [serverResponse, setResponse] = React.useState<response | undefined>(undefined);

    const [PostState, setPostState] = React.useState(false);

    const [AccoutTypeValue, setAccoutTypeValue] = React.useState("1");

    const onSubmit = data => {
        console.log(data)
        axios.post(AMAX_API_URL + '/players/update_password',

            data, {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer ${auth.user.token}`
                }
            }
        ).then(response => {
                setResponse(response.data)
                setPostState(true)

            }
        )
            .catch(error => {
                setResponse(error.response.data);
                setPostState(true)
                console.log(error.response.data)
                console.error('There was an error!', error);
            });

    };

    const ButtonLabel = () => {
        if (PostState === false) {
            return <Typography>Change password</Typography>
        } else {
            if (serverResponse !== undefined) {
                if (serverResponse.success === true) {

                    return <Typography>success</Typography>
                } else {

                    return <Typography>Failed: {serverResponse.msg}</Typography>
                }
            } else {
                return <Typography>Processing</Typography>
            }
        }
    }


    return (
        <Container>
            <h1>Change password</h1>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField {...register("password")} id="outlined-basic" label="Password" variant="outlined"
                                   className={classes.textfield}
                                   helperText={errors.password?.message}
                                   error={!!errors?.password}
                                   type="password"
                        />
                        <FormHelperText>
                            <ul>
                                <li>Password must be at least 8 characters</li>
                                <li>Should include at least 1 uppercase, 1 lowercase and 1 number</li>
                            </ul>
                        </FormHelperText>

                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("confirmPassword")} id="outlined-basic" label="Confirm Password"
                                   variant="outlined" className={classes.textfield}
                                   helperText={errors.confirmPassword?.message}
                                   error={!!errors?.confirmPassword}
                                   type="password"
                        />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    <ButtonLabel/>
                </Button>

            </form>
        </Container>
    )
}