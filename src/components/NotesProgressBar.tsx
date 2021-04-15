// Material UI
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    linearProgressBar: {
        height: "1em",
        width: "50%",
        marginTop: "1em"
    }
});

export const NotesProgressBar = () => {
    const { linearProgressBar } = useStyles();
    return <LinearProgress className={linearProgressBar} value={75} />;
};
