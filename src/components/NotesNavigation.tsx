// React
import { useState } from "react";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import TabPanel from "@material-ui/lab/TabPanel";
import TabList from "@material-ui/lab/TabList";
import TabContext from "@material-ui/lab/TabContext";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";

// Components
import { NotesProgressBar } from "./NotesProgressBar";
import { NotesBoard } from "./NotesBoard";

type NavProp = {
    handleOpen: () => void;
};

const NavContainer = styled(Container)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "100%",
    marginTop: "1em"
});
const CustomAppBar = styled(AppBar)({
    maxWidth: "60%",
    background: "none",
    color: "black",
    boxShadow: "none"
});
const AddNotesButton = styled(Button)({
    background: "#2196F3",
    color: "white",
    padding: ".5em .8em",
    whiteSpace: "nowrap",
    marginRight: "-1.3em",
    fontSize: "1.2rem"
});

const homeNotesList = [
    { id: 1, name: "Example Note 1" },
    { id: 2, name: "Example Note 2" },
    { id: 3, name: "Example Note 3" },
    { id: 4, name: "Example Note 4" }
];
const workNotesList = [
    { id: 5, name: "Example Note 5" },
    { id: 6, name: "Example Note 6" },
    { id: 7, name: "Example Note 7" },
    { id: 8, name: "Example Note 8" }
];
const personalNotesList = [
    { id: 9, name: "Example Note 9" },
    { id: 10, name: "Example Note 10" },
    { id: 11, name: "Example Note 11" },
    { id: 12, name: "Example Note 12" }
];

const NotesNavigation = ({ handleOpen }: NavProp) => {
    const [tab, setTab] = useState("all");
    const [allNotes, setAllNotes] = useState(
        homeNotesList.concat(workNotesList, personalNotesList)
    );
    const [homeNotes, setHomeNotes] = useState(homeNotesList);
    const [workNotes, setWorkNotes] = useState(workNotesList);
    const [personalNotes, setPersonalNotes] = useState(personalNotesList);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setTab(newValue);
    };
    return (
        <div>
            <TabContext value={tab}>
                <NavContainer>
                    <CustomAppBar position="static">
                        <TabList onChange={handleChange}>
                            <Tabs>
                                <Tab label="All" value={"all"} />
                                <Tab label="Home" value={"home"} />
                                <Tab label="Work" value={"work"} />
                                <Tab label="Personal" value={"personal"} />
                            </Tabs>
                        </TabList>
                    </CustomAppBar>
                    <AddNotesButton onClick={handleOpen}>
                        + Add Note
                    </AddNotesButton>
                </NavContainer>
                <TabPanel value="all">
                    {/* <NotesProgressBar /> */}
                    <NotesBoard notes={allNotes} />
                </TabPanel>
                <TabPanel value="home">
                    {/* <NotesProgressBar /> */}
                    <NotesBoard notes={homeNotes} />
                </TabPanel>
                <TabPanel value="work">
                    {/* <NotesProgressBar /> */}
                    <NotesBoard notes={workNotes} />
                </TabPanel>
                <TabPanel value="personal">
                    {/* <NotesProgressBar /> */}
                    <NotesBoard notes={personalNotes} />
                </TabPanel>
            </TabContext>
        </div>
    );
};

export { NotesNavigation };
