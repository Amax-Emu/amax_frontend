import * as React from "react";
import "./register_form.css";
import {makeStyles, createStyles, Theme, useTheme} from '@material-ui/core/styles';
import {useTranslation} from 'react-i18next'
import {Container} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {useForm} from 'react-hook-form';
import "/src/components/validators/unicusername"
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
import FormHelperText from "@material-ui/core/FormHelperText";
import remarkGfm from 'remark-gfm'

const eula_text = `

## Amax Emu End User Agreement

### TL:DR
- Don't be a jerk
- 1 account per person
- Don't cheat
- Don't edit account data
- Don't mess up with leaderboards data (account boosting, match-fixing, etc.)

### Full version

#### Conduct
 1. Don’t be annoying, disrespectful or rude to any players. 
 2. No conduct that abuses other players or disrupts their in-game experience is permitted. This includes constant air-breaking and mobbing.

#### Accounts

* 1 person is limited to 1 in-game account.
*  Account names may not be obscene, vulgar or offensive.
* Alteration of in-game account data with 3rd party tools is prohibited, unless explicitly permitted.
* Car paint jobs editing is permitted 
* Car wraps (livery) edits are permitted 
 
#### Gameplay
 
 1. No conduct that constitutes cheating, hacking, or exploiting of game conditions for unintended advantage is permitted. Keep game fun and fair for everyone.
 2. All strategies and tactics are considered valid unless explicitly prohibited. This includes usage of Drift mod, legendary cars and Bribe.
 3. Respect less experienced players. Helping new players experience the game is essential to the future health of the community.
 4.
 `

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
            .max(15, 'Password must not exceed 15 characters')
            .matches(
                /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase and one number"
            ),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        accountType: Yup.string()
            .required('Select your account type').nullable()
            .oneOf(["1", "0"], 'Selected account type is invalid').nullable(),
        acceptEULA: Yup.bool().oneOf([true], 'Accept Terms is required')
    });


export default function CreateBlurAccountForm() {
    const classes = useStyles();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
    });
    const [value, setValue] = React.useState('1');

    const [state, setState] = React.useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleChange2 = (event) => {
        setState(!event.target.checked);
    };

    const onSubmit = data => console.log(data);

    return (
        <Container>
            <h1>Create new Amax Emu account</h1>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField {...register("username")} id="outlined-basic" label="Login" variant="outlined"
                                   className={classes.username}
                                   helperText={errors.username?.message}
                                   error={!!errors?.username}
                        />
                        <FormHelperText>
                            <ul><li>This will be your in-game username</li><li>Minimum length is 5</li></ul>
                        </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("password")} id="outlined-basic" label="Password" variant="outlined"
                                   className={classes.textfield}
                                   helperText={errors.password?.message}
                                   error={!!errors?.password}
                                   type="password"
                        />
                        <FormHelperText>
                            <ul><li>Password must be at least 8 characters</li><li>Should include at least 1 uppercase, 1 lowercase and 1 number</li></ul>
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
                    <Grid item xs={12}>
                        <div>
                        <FormLabel component="legend">Account type</FormLabel>
                        <RadioGroup {...register("accountType")} aria-label="accounttype" name="accounttype" value={value} onChange={handleChange}>
                            <FormHelperText error>
                                {errors.accountType ? errors.accountType.message : " "}
                            </FormHelperText>
                            <FormControlLabel className={classes.selectWide} value="1" control={<Radio/>}
                                              label={<Typography><h3>Normal account</h3><ul><li>Account progression</li><li>Leaderboards</li><li>Legendary cars</li></ul></Typography>}/>
                            <FormControlLabel className={classes.selectWide} value="0" control={<Radio/>}
                                              label={<Typography><h3>Fully unlocked account</h3><ul><li>All cars and mods unlocked</li><li>No leaderboards</li></ul></Typography>}/>
                        </RadioGroup>


                </div>
                    </Grid>

                <div>
                    <Typography>
                        <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}>
                            {eula_text}
                        </ReactMarkdown>
                    </Typography>
                </div>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox {...register("acceptEULA")}
                                id="acceptEULA"
                                checked={state}
                                onChange={handleChange2}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Primary"
                        id="acceptEULA"
                    />
                    <FormHelperText error>
                        {errors.acceptEULA ? errors.acceptEULA.message : " "}
                    </FormHelperText>
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"

                className={classes.submit}
            >
                Register
            </Button>
        </form>
</Container>
)
}
