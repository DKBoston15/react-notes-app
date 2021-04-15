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
}
interface INotes {
    id: number;
    name: string;
    category: string;
}

const useStyles = makeStyles({
    navContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "100%",
        marginTop: "1em"
    },
    customAppBar: {
        maxWidth: "60%",
        background: "none",
        color: "black",
        boxShadow: "none"
    },
    addNotesButton: {
        background: "#2196F3",
        color: "white",
        padding: ".5em .8em",
        whiteSpace: "nowrap",
        marginRight: "-1.3em",
        fontSize: "1.2rem"
    }
});

const noteList = [
    { id: 1, name: "Example Note 1", category: "home" },
    { id: 2, name: "Example Note 2", category: "home" },
    { id: 3, name: "Example Note 3", category: "home" },
    { id: 4, name: "Example Note 4", category: "home" },
    { id: 5, name: "Example Note 5", category: "work" },
    { id: 6, name: "Example Note 6", category: "work" },
    { id: 7, name: "Example Note 7", category: "work" },
    { id: 8, name: "Example Note 8", category: "work" },
    { id: 9, name: "Example Note 9", category: "personal" },
    { id: 10, name: "Example Note 10", category: "personal" },
    { id: 11, name: "Example Note 11", category: "personal" },
    { id: 12, name: "Example Note 12", category: "personal" }
];

// 1. Don't duplicate useState when you don't have to
// 2. Extract JS specific functions to e.g. utils.ts or helpers.ts
// 3. You can even create a custom hook e.g. useNotes to abstract business logic in React.
// 4. Point 2 will allow you to wirte great unit tests using e.g. jest
export const NotesNavigation = ({ handleOpen }: INavProp) => {
    const { navContainer, customAppBar, addNotesButton } = useStyles();
    const [tab, setTab] = useState("all");
    const [notes, setNotes] = useState(noteList);

    const filerNotes = (notes: INotes[]) => {
        console.log(tab);
        console.log(notes.filter((e) => e.category === tab));
        if (tab === "all") {
            return notes;
        }
        let newNotes = notes.filter((e) => e.category === tab);
        return newNotes;
    };
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        console.log(newValue);
        setTab(`${newValue}`);
    };

    const filteredNotes = useMemo(() => filerNotes(notes), [notes]);

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
                    </AppBar>
                    <Button className={addNotesButton} onClick={handleOpen}>
                        + Add Note
                    </Button>
                </Container>
                <NotesBoard notes={filteredNotes} />
            </TabContext>
        </div>
    );
};
