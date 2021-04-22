// React
import { useState, useMemo } from "react";

// Material UI
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    cardWrapper: {
        textAlign: "center",
        color: "white",
        fontSize: "1rem",
        minWidth: "12em",
        minHeight: "6em",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    },
    bgOrange: {
        backgroundColor: "#FF9100 !important"
    },
    bgPurple: {
        backgroundColor: "#5C6BC0"
    },
    bgGreen: {
        backgroundColor: "#66BB6A"
    },
    descriptionText: {
        color: "hsla(0, 0%, 100%, 0.85)"
    },
    titleText: {
        fontSize: "1.4em",
        fontWeight: "bold"
    },
    cursorClass: {
        cursor: "pointer"
    }
});
interface INoteProp {
    id: number;
    title: string;
    description: string;
    category: string;
    lastUpdated: string;
    deleteNote: (id: number) => void;
}

export const Note = ({
    id,
    title,
    description,
    category,
    lastUpdated,
    deleteNote
}: INoteProp) => {
    const classes = useStyles();

    // TODO: Review section below to see if there is a better way to have multiple dynamic classes with TS

    const [cardBG, setCardBG] = useState("");
    useMemo(() => {
        console.log("Setting class");
        if (category === "home") {
            setCardBG("makeStyles-bgOrange-24");
        }
        if (category === "work") {
            setCardBG("makeStyles-bgPurple-25");
        }
        if (category === "personal") {
            setCardBG("makeStyles-bgGreen-26");
        }
    }, [category]);

    return (
        <Card className={[classes.cardWrapper, cardBG].join(" ")}>
            <CardContent>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box display="flex" alignItems="center">
                        <Checkbox color="secondary" />
                        <div className={classes.titleText}>{title}</div>
                    </Box>
                    <Box
                        width="4em"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <EditIcon
                            color="secondary"
                            className={classes.cursorClass}
                        />
                        <DeleteIcon
                            className={classes.cursorClass}
                            color="secondary"
                            onClick={() => deleteNote(id)}
                        />
                    </Box>
                </Box>
                <div className={classes.descriptionText}>{description}</div>
            </CardContent>
            <CardActions>
                <div className={classes.descriptionText}>{lastUpdated}</div>
            </CardActions>
        </Card>
    );
};
