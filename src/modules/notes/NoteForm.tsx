// Material UI
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field, Form } from "formik";

// UUID
import { v4 as uuidv4 } from "uuid";

import { INotesCommonProps } from "../../types";

const useStyles = makeStyles({
    title: {
        paddingLeft: "4rem",
        color: "#858585",
        paddingTop: ".3em",
        fontSize: "2rem"
    },
    form: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: "3rem"
    },
    leftContentContainer: {
        display: "flex",
        flexDirection: "column",
        width: "70%",
        paddingLeft: "4em"
    },
    rightContentContainer: {
        display: "flex",
        flexDirection: "column",
        width: "30%",
        paddingLeft: "1em",
        paddingRight: "4em"
    },
    textContentField: {
        marginTop: "2em"
    },
    buttonContainer: {
        display: "flex",
        position: "absolute",
        bottom: "16em",
        right: "26em"
    },
    button: {
        color: "#2196F3"
    }
});

interface INoteFormProps extends INotesCommonProps {
    handleClose: () => void;
}

// Install UUID and add ID to new note

export const NoteForm = ({ setNotes, notes, handleClose }: INoteFormProps) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h4" className={classes.title}>
                Add Note
            </Typography>
            <hr />
            <Formik
                initialValues={{
                    title: "",
                    description: "",
                    category: ""
                }}
                onSubmit={(notePayload, { setSubmitting }) => {
                    setSubmitting(true);
                    // console.log("submit: ", data);
                    const newNote = {
                        ...notePayload,
                        id: notes.length
                    };

                    let updatedNotes = [...notes, newNote];
                    setNotes(updatedNotes);
                    console.log("NOTES: ", notes);
                    setSubmitting(false);
                    handleClose();
                }}
            >
                {({ values, isSubmitting, handleChange }) => (
                    <Form className={classes.form}>
                        <Box className={classes.leftContentContainer}>
                            <Field
                                placeholder="Title"
                                name="title"
                                type="input"
                                as={TextField}
                            />
                            <Field
                                className={classes.textContentField}
                                name="description"
                                type="input"
                                as={TextField}
                                label="Description..."
                                multiline
                                variant="filled"
                                rows={8}
                            />
                        </Box>
                        <Box className={classes.rightContentContainer}>
                            <Select
                                name="category"
                                value={values.category}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="home">Home</MenuItem>
                                <MenuItem value="work">Work</MenuItem>
                                <MenuItem value="personal">Personal</MenuItem>
                            </Select>
                        </Box>
                        {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                        <Box className={classes.buttonContainer}>
                            <Button
                                onClick={handleClose}
                                className={classes.button}
                            >
                                Cancel
                            </Button>
                            <Button
                                className={classes.button}
                                disabled={isSubmitting}
                                type="submit"
                            >
                                Add
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    );
};
