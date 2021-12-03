import * as React from "react";
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import StickyHeadTable from "../../components/lb_widget_table";
import Table from '@material-ui/core/Table';
import { useTranslation } from 'react-i18next'
import SvgIcon from "@material-ui/core/SvgIcon";
import {FansIcon} from "../../components/general_icons/general_icons";
import {DriverScoreIcon} from "../../components/general_icons/general_icons";
import {LegendIcon} from "../../components/general_icons/general_icons";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

interface Column {
    id: 'pos' | 'playername' | 'value';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "#304254",
        borderRadius: 8,
        margin: "13px 0px 15px 0px",
    },
    top: {borderRadius: "8px 8px 0px 0px"},
    tableHeader: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    widgetName: {
        alignSelf: "flex-start",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 32,
        lineHeight: "122%",
        color: "#E6E6E6",
    },        CustomIcon: {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        // boxShadow: "inset 0px 0px 4px rgba(120, 179, 233, 0.6)",
        // filter: "drop-shadow(0px 0px 20px rgba(4, 90, 255, 0.9))"
    },
}));

export default function FullLeaderboard() {
    const { t, i18n } = useTranslation()
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const LeaderboardsFansContent = () => {

    }

    const columns: Column[] = [

        { id: 'pos', label: t("leaderboard_widget.position"), minWidth: 10 ,align: 'left',},
        { id: 'playername', label: t("leaderboard_widget.player"), minWidth: 100,align: 'left' },
        {
            id: 'value',
            label: t("leaderboard_widget.value"),
            minWidth: 10,
            align: 'right',
        }
    ];

    return (
        <div>
            <a className={classes.widgetName}>{t("leaderboard_widget.header")}</a>

            <div className={classes.root}>

                <AppBar className={classes.top} position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab icon={<FansIcon />} label={t("leaderboard_widget.fans")} {...a11yProps(0)} />
                        <Tab icon={<DriverScoreIcon />} label={t("leaderboard_widget.driving_score")} {...a11yProps(1)} />
                        <Tab icon={<LegendIcon />} label={t("leaderboard_widget.legend")} {...a11yProps(2)} />
                    </Tabs>
                    <TableContainer className={classes.container}>
                        <Table>
                            <TableHead className={classes.tableHeader}>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <StickyHeadTable sortType="statFans"/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <StickyHeadTable sortType="statDriverScore"/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <StickyHeadTable sortType="statLegend"/>
                </TabPanel>
            </div>
        </div>
    );
}
