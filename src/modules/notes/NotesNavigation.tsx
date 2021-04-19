// React
import { useState, useMemo } from "react";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import TabContext from "@material-ui/lab/TabContext";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// Components
// import { NotesProgressBar } from "./NotesProgressBar";
import { NotesBoard } from "./NotesBoard";
interface INavProp {
    handleOpen: () => void;
    notes: Array<any>;
}

const useStyles = makeStyles({
    circle: {
        width: "7px",
        height: "7px",
        borderRadius: "100%",
        backgroundColor: "red",
        position: "relative",
        top: "3.2em",
        right: "4.5em",
        zIndex: 10000
    },
    bgOrange: {
        backgroundColor: "#FF9100"
    },
    bgPurple: {
        backgroundColor: "#5C6BC0"
    },
    bgGreen: {
        backgroundColor: "#66BB6A"
    },
    navContainer: {
        display: "flex",
        marginTop: "1em",
        padding: "0"
    },

    customAppBar: {
        background: "none",
        width: "100%",
        color: "black",
        boxShadow: "none",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row"
    },
    addNotesButton: {
        background: "#2196F3",
        padding: "0 4em",
        color: "white",
        whiteSpace: "nowrap",
        width: "1em",
        borderRadius: "5px",
        height: "3em"
    }
});

// 1. Don't duplicate useState when you don't have to
// 2. Extract JS specific functions to e.g. utils.ts or helpers.ts
// 3. You can even create a custom hook e.g. useNotes to abstract business logic in React.
// 4. Point 2 will allow you to wirte great unit tests using e.g. jest
export const NotesNavigation = ({ handleOpen, notes }: INavProp) => {
    const classes = useStyles();
    // Tab State
    const [tab, setTab] = useState("all");

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setTab(newValue);
    };

    const filteredNotes = useMemo(() => {
        if (tab === "all") {
            return notes;
        }
        let newNotes = notes.filter((e) => e.category === tab);
        console.log(newNotes);
        return newNotes;
    }, [notes, tab]);

    return (
        <div>
            <TabContext value={tab}>
                <Container className={classes.navContainer}>
                    <AppBar position="static" className={classes.customAppBar}>
                        <Tabs value={tab} onChange={handleChange}>
                            <Tab label="All" value={"all"} />
                            <Tab label="Home" value={"home"} />
                            {tab !== "home" && (
                                <div
                                    className={`${classes.circle} ${classes.bgOrange}`}
                                ></div>
                            )}
                            <Tab label="Work" value={"work"} />
                            {tab !== "work" && (
                                <div
                                    className={`${classes.circle} ${classes.bgPurple}`}
                                ></div>
                            )}
                            <Tab label="Personal" value={"personal"} />
                            {tab !== "personal" && (
                                <div
                                    className={`${classes.circle} ${classes.bgGreen}`}
                                ></div>
                            )}
                        </Tabs>
                        <Button
                            className={classes.addNotesButton}
                            onClick={handleOpen}
                        >
                            + Add Note
                        </Button>
                    </AppBar>
                </Container>
                <NotesBoard notes={filteredNotes} />;
            </TabContext>
        </div>
    );
};
