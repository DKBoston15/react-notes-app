// React
import { useState } from "react";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

// Components
import { SearchBar } from "./modules/notes/SearchBar";
import { NoteModal } from "./modules/notes/NoteModal";
import { NotesNavigation } from "./modules/notes/NotesNavigation";

const noteList = [
    {
        id: 1,
        title: "Example Note 1",
        category: "home",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        title: "Example Note 2",
        category: "home",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 3,
        title: "Example Note 3",
        category: "home",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 4,
        title: "Example Note 4",
        category: "home",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 5,
        title: "Example Note 5",
        category: "work",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 6,
        title: "Example Note 6",
        category: "work",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 7,
        title: "Example Note 7",
        category: "work",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 8,
        title: "Example Note 8",
        category: "work",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 9,
        title: "Example Note 9",
        category: "personal",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 10,
        title: "Example Note 10",
        category: "personal",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 11,
        title: "Example Note 11",
        category: "personal",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 12,
        title: "Example Note 12",
        category: "personal",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];

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
    const [notes, setNotes] = useState(noteList);

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
                <NoteModal
                    open={open}
                    setNotes={setNotes}
                    notes={notes}
                    handleClose={handleClose}
                />
                <SearchBar />
                <NotesNavigation notes={notes} handleOpen={handleOpen} />
            </Box>
        </Box>
    );
}

export default App;
