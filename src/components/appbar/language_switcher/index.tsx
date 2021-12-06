import * as React from "react"
import { useTranslation } from 'react-i18next'
import {FormControl} from "@mui/material";
import {InputLabel} from "@mui/material";
import {Select} from "@mui/material";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginRight: "1em",
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const LanguageSelector = () => {
    const { t, i18n } = useTranslation()
    const classes = useStyles();
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div className={classes.root}>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Language</InputLabel>
                <Select
                    native
                    value={i18n.language}
                    onChange={changeLanguage}
                    inputProps={{
                        name: 'language',
                        id: 'language',
                    }}
                >
                    <option value={"en"}>English</option>
                    <option value={"ru"}>Russian</option>
                    <option value={"de"}>German</option>
                    <option value={"es"}>Spanish</option>
                    <option value={"fr"}>French</option>
                    <option value={"hi"}>Hindi</option>
                    <option value={"it"}>Italian</option>

                </Select>
            </FormControl>
        </div>
    )
}

export default LanguageSelector