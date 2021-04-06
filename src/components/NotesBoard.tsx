// Material UI elements
import Grid from "@material-ui/core/Grid";

// Components
import Note from "../components/Note";

const notes = [
    { id: 1, name: "Example Note 1" },
    { id: 2, name: "Example Note 2" },
    { id: 3, name: "Example Note 3" },
    { id: 4, name: "Example Note 4" }
];

const NotesBoard = () => {
    return (
        <div>
            <Grid container spacing={6}>
                {notes.map((note) => (
                    <Grid item xs={6}>
                        <Note name={note.name} id={note.id} key={note.id} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default NotesBoard;
