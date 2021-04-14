// React
import { useState } from "react";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

// Components
import { SearchBar } from "./components/SearchBar";
import { NoteModal } from "./components/NoteModal";
import { NotesNavigation } from "./components/NotesNavigation";

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
                <NoteModal open={open} handleClose={handleClose} />
                <SearchBar />
                <NotesNavigation handleOpen={handleOpen} />
            </Box>
        </Box>
    );
}

export default App;
