import { useCallback } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

const ConfirmModalComponent = ({
    isShow, hideFunction,
    modalStyle,
    message, onSubmit
}) => {

    const hideModal = useCallback((e) => {
        hideFunction();
        e.stopPropagation();
    }, [hideFunction]);

    const handleYesButton = useCallback((e) => {
        onSubmit();
        hideModal(e);
    }, [onSubmit, hideModal]);

    return (
        <ModalComponent
            isShow={isShow}
            hideFunction={hideFunction}
            isModal={true}
            modalStyle={modalStyle}
            isShowHeaderCloseButton={false}
            body={
                <p>{message}</p>
            }
            bodyStyle={{ color: "gray", margin: "20px", textAlign: "center" }}
            footer={
                <>
                    <Button onClick={hideModal}>No</Button>
                    <Button className="ms-3" onClick={handleYesButton}>Yes</Button>
                </>
            }
            footerStyle={{
                backgroundColor: "white",
                color: "black"
            }}
        />

    );
}

export default ConfirmModalComponent;