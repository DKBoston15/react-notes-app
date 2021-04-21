// Material UI elements
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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
    return (
        <Grid container spacing={3} className={grid}>
            {notes.map((note) => (
                <Grid item xs={6} key={note.id}>
                    <Note
                        title={note.title}
                        description={note.description}
                        id={note.id}
                        key={note.id}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
