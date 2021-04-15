// Material UI
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    cardWrapper: {
        textAlign: "center",
        background: "#66BB6A",
        color: "white",
        fontSize: "2rem",
        minWidth: "22em",
        minHeight: "7em",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    }
});
interface INoteProp {
    id: number;
    name: string;
}

export const Note = ({ name }: INoteProp) => {
    const { cardWrapper } = useStyles();
    return <Card className={cardWrapper}>{name}</Card>;
};
