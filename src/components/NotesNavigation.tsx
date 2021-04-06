// Material UI
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NotesNavigation = () => {
    return (
        <div>
            <AppBar position="static">
                <Tabs>
                    <Tab label="All" />
                    <Tab label="Home" />
                    <Tab label="Work" />
                    <Tab label="Personal" />
                </Tabs>
            </AppBar>
        </div>
    );
};

export default NotesNavigation;
