// Material UI
import LinearProgress from "@material-ui/core/LinearProgress";
import { styled } from "@material-ui/core/styles";

const ProgressBar = styled(LinearProgress)({
    height: "1em",
    width: "50%",
    marginTop: "1em"
});

const NotesProgressBar = () => {
    return <ProgressBar value={75} />;
};

export { NotesProgressBar };
