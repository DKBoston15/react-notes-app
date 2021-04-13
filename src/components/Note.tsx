// Material UI
import Card from "@material-ui/core/Card";
import { styled } from "@material-ui/core/styles";

const NoteCard = styled(Card)({
    textAlign: "center",
    background: "#66BB6A",
    color: "white",
    fontSize: "2rem",
    minWidth: "22em",
    minHeight: "7em",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
});

type NoteProp = {
    id: number;
    name: string;
};
const Note = ({ name }: NoteProp) => {
    return <NoteCard>{name}</NoteCard>;
};

export { Note };
