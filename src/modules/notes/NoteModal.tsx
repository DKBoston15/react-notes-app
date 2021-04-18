// Material UI
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

// Modules
import { NoteForm } from "./NoteForm";

const useStyles = makeStyles({
    modalContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    modalContent: {
        background: "white", // theme from material UI
        width: "75em",
        height: "35em"
    }
});

interface IModalProp {
    open: boolean;
    notes: Array<any>;
    handleClose: () => void;
    setNotes(notes: Array<any>): any;
}

export const NoteModal = ({
    open,
    handleClose,
    setNotes,
    notes
}: IModalProp) => {
    const { modalContainer, modalContent } = useStyles();
    return (
        <Modal className={modalContainer} open={open} onClose={handleClose}>
            <Box className={modalContent}>
                <NoteForm
                    notes={notes}
                    setNotes={setNotes}
                    handleClose={handleClose}
                />
            </Box>
        </Modal>
    );
};
