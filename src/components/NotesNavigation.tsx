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
import NotesProgressBar from "./NotesProgressBar";
import NotesBoard from "./NotesBoard";

type NavProp = {
    handleOpen: () => void;
};

const NavContainer = styled(Container)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "65%"
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
    padding: "1em 5em",
    whiteSpace: "nowrap"
});

const NotesNavigation = ({ handleOpen }: NavProp) => {
    const [tab, setTab] = useState("all");
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
                    <NotesProgressBar />
                    <NotesBoard />
                </TabPanel>
                <TabPanel value="home">
                    <NotesProgressBar />
                    <NotesBoard />
                </TabPanel>
                <TabPanel value="work">
                    <NotesProgressBar />
                    <NotesBoard />
                </TabPanel>
                <TabPanel value="personal">
                    <NotesProgressBar />
                    <NotesBoard />
                </TabPanel>
            </TabContext>
        </div>
    );
};

export default NotesNavigation;
