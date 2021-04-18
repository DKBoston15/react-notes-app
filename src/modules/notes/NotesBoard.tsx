// Material UI elements
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import { Note } from "./Note";

const useStyles = makeStyles({
    grid: {
        marginTop: "2em"
    }
});

interface INotesProp {
    notes: { id: number; name: string; category: string }[];
}

export const NotesBoard = ({ notes }: INotesProp) => {
    const { grid } = useStyles();
    return (
        <Grid container spacing={3} className={grid}>
            {notes.map((note) => (
                <Grid item xs={6}>
                    <Note name={note.name} id={note.id} key={note.id} />
                </Grid>
            ))}
        </Grid>
    );
};
