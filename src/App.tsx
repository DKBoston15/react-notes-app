// React
import { useState } from "react";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

// Components
import { SearchBar } from "./modules/notes/SearchBar";
import { NoteModal } from "./modules/notes/NoteModal";
import { NotesNavigation } from "./modules/notes/NotesNavigation";

// Context
import { NotesContext, notesContextDefaultValue } from "./shared/NotesContext";

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
        <Box display="flex" alignItems="center" justifyContent="center">
            <CssBaseline />
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="60%"
                flexDirection="column"
            >
                <NotesContext.Provider value={notesContextDefaultValue}>
                    <NoteModal open={open} handleClose={handleClose} />
                    <SearchBar />
                    <NotesNavigation handleOpen={handleOpen} />
                </NotesContext.Provider>
            </Box>
        </Box>
    );
}

export default App;
