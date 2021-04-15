// Material UI elements
import Grid from "@material-ui/core/Grid";

// Components
import { Note } from "./Note";

interface INotesProp {
    notes: { id: number; name: string; category: string }[];
}

export const NotesBoard = ({ notes }: INotesProp) => {
    return (
        <div>
            <Grid container spacing={3}>
                {notes.map((note) => (
                    <Grid item xs={6}>
                        <Note name={note.name} id={note.id} key={note.id} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
