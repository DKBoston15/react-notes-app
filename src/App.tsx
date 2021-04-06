// React
import { useState } from "react";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
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
            <div>
                <NotesNavigation />
                <Button onClick={handleOpen}>+ Add Note</Button>
            </div>
            <NotesProgressBar />
            <NotesBoard />
        </div>
    );
}

export default App;
