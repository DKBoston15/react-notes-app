// Material UI
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";

// CSS
import "../css/Modal.css";

const NoteModalComponent = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});

interface IModalProp {
    open: boolean;
    handleClose: () => void;
}

const NoteModal = ({ open, handleClose }: IModalProp) => {
    return (
        <NoteModalComponent open={open} onClose={handleClose}>
            <div className="noteContainer">Note Modal</div>
        </NoteModalComponent>
    );
};

export { NoteModal };
