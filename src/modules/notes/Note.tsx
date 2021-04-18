// Material UI
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    cardWrapper: {
        textAlign: "center",
        background: "#66BB6A",
        color: "white",
        fontSize: "1rem",
        minWidth: "12em",
        minHeight: "6em",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    }
});
interface INoteProp {
    id: number;
    title: string;
    description: string;
}

export const Note = ({ title, description }: INoteProp) => {
    const { cardWrapper } = useStyles();
    return (
        <Card className={cardWrapper}>
            {title}
            {description}
        </Card>
    );
};
