// Material UI
import Card from "@material-ui/core/Card";
import { styled } from "@material-ui/core/styles";

const NoteCard = styled(Card)({
    padding: "8em 8em",
    margin: "2em",
    textAlign: "center",
    border: "1px solid #2196F3"
});

type NoteProp = {
    id: number;
    name: string;
};
const Note = ({ name }: NoteProp) => {
    return <NoteCard>{name}</NoteCard>;
};

export default Note;
