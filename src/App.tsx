// React
import { useState } from "react";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";

// CSS
import "./css/App.css";

// Components
import SearchBar from "./components/SearchBar";
import NoteModal from "./components/NoteModal";
import NotesNavigation from "./components/NotesNavigation";

function App() {
    // Modal State
    const [open, setOpen] = useState(false);

    // Modal Handlers
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className="App">
            <CssBaseline />
            <div className="AppContainer">
                <NoteModal open={open} handleClose={handleClose} />
                <SearchBar />
                <NotesNavigation handleOpen={handleOpen} />
            </div>
        </div>
    );
}

export default App;
