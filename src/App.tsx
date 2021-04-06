// React
import { useState } from "react";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";

// CSS
import "./css/App.css";

// Components
import SearchBar from "./components/SearchBar";
import NotesProgressBar from "./components/NotesProgressBar";
import NotesNavigation from "./components/NotesNavigation";
import NotesBoard from "./components/NotesBoard";
import NoteModal from "./components/NoteModal";

function App() {
    // Modal State
    const [open, setOpen] = useState(false);

    // Modal Handlers
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="App">
            <CssBaseline />
            <NoteModal open={open} handleClose={handleClose} />
            <SearchBar />
            <NotesNavigation />
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>
            <NotesProgressBar />
            <NotesBoard />
        </div>
    );
}

export default App;
