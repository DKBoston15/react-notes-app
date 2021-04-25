// Material UI
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

// Modules
import { NoteForm } from "./NoteForm";
import { TNote, INotesCommonProps } from "../../types";

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

interface IModalProp extends INotesCommonProps {
    open: boolean;
    handleClose: () => void;
    searchedNotes: TNote[];
    setSearchedNotes: (searchedNotes: TNote[]) => void;
}

export const NoteModal = ({
    open,
    handleClose,
    searchedNotes,
    setSearchedNotes,
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
                    searchedNotes={searchedNotes}
                    setSearchedNotes={setSearchedNotes}
                />
            </Box>
        </Modal>
    );
};
