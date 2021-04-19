// React
import { useState, useMemo } from "react";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import TabList from "@material-ui/lab/TabList";
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
        borderRadius: "5px"
    }
});

// 1. Don't duplicate useState when you don't have to
// 2. Extract JS specific functions to e.g. utils.ts or helpers.ts
// 3. You can even create a custom hook e.g. useNotes to abstract business logic in React.
// 4. Point 2 will allow you to wirte great unit tests using e.g. jest
export const NotesNavigation = ({ handleOpen, notes }: INavProp) => {
    const { navContainer, customAppBar, addNotesButton } = useStyles();
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
                <Container className={navContainer}>
                    <AppBar position="static" className={customAppBar}>
                        <TabList onChange={handleChange}>
                            <Tabs>
                                <Tab label="All" value={"all"} />
                                <Tab label="Home" value={"home"} />
                                <Tab label="Work" value={"work"} />
                                <Tab label="Personal" value={"personal"} />
                            </Tabs>
                        </TabList>
                        <Button className={addNotesButton} onClick={handleOpen}>
                            + Add Note
                        </Button>
                    </AppBar>
                </Container>
                <NotesBoard notes={filteredNotes} />;
            </TabContext>
        </div>
    );
};
