// Material UI
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";

const NoteModalComponent = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});
const ModalContent = styled(Box)({
    background: "white",
    padding: "20% 30%"
});

interface IModalProp {
    open: boolean;
    handleClose: () => void;
}

const NoteModal = ({ open, handleClose }: IModalProp) => {
    return (
        <NoteModalComponent open={open} onClose={handleClose}>
            <ModalContent>Note Modal</ModalContent>
        </NoteModalComponent>
    );
};

export { NoteModal };
