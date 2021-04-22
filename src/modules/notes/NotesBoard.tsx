// React
import { useState } from "react";

// Material UI elements
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

// Components
import { Note } from "./Note";

import { INotesCommonProps } from "../../types";

const useStyles = makeStyles({
    grid: {
        marginTop: "2em"
    }
});

type INotesProp = Pick<INotesCommonProps, "notes">;

export const NotesBoard = ({ notes }: INotesProp) => {
    const { grid } = useStyles();

    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    };

    const deleteNote = (id: string) => {
        let newNotes = notes.filter(function (note, index, arr) {
            return note.id !== id;
        });
        setNotes(newNotes);
        setOpen(true);
    };

    return (
        <>
            <Grid container spacing={3} className={grid}>
                {notes.map((note) => (
                    <Grid item xs={6} key={note.id}>
                        <Note
                            title={note.title}
                            description={note.description}
                            category={note.category}
                            lastUpdated={note.lastUpdated}
                            id={note.id}
                            key={note.id}
                            deleteNote={deleteNote}
                        />
                    </Grid>
                ))}
            </Grid>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                onClose={onClose}
                open={open}
                autoHideDuration={2000}
            >
                <Alert variant="filled" severity="success">
                    Note Deleted
                </Alert>
            </Snackbar>
        </>
    );
};
