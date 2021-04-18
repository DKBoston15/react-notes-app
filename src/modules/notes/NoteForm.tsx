// Material UI
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
    title: {
        paddingLeft: "4rem",
        color: "#858585",
        paddingTop: ".3em"
    },
    form: {
        width: "100%",
        height: "100%",
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
        bottom: "10em",
        right: "4em"
    },
    button: {
        color: "#2196F3"
    }
});

export const NoteForm = () => {
    const {
        form,
        leftContentContainer,
        rightContentContainer,
        title,
        textContentField,
        buttonContainer,
        button
    } = useStyles();
    return (
        <>
            <Typography variant="h4" className={title}>
                Add Note
            </Typography>
            <hr />
            <FormControl className={form}>
                <Box className={leftContentContainer}>
                    <TextField label="Title..." variant="filled" />
                    <TextField
                        className={textContentField}
                        label="Description..."
                        multiline
                        variant="filled"
                        rows={8}
                    />
                </Box>
                <Box className={rightContentContainer}>
                    <Select variant="filled">
                        <MenuItem value="">
                            <em>Select Category</em>
                        </MenuItem>
                        <MenuItem value="home">Home</MenuItem>
                        <MenuItem value="work">Work</MenuItem>
                        <MenuItem value="personal">Personal</MenuItem>
                    </Select>
                </Box>
                <Box className={buttonContainer}>
                    <Button className={button}>Cancel</Button>
                    <Button className={button}>Add</Button>
                </Box>
            </FormControl>
        </>
    );
};
