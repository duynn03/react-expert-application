import React, { useCallback } from "react";
import styles from "../../../css/modal.module.css";

const ModalComponent = React.memo(({
    isModal = true,
    modalStyle,
    isAllowClickOutSide = true,
    header, headerStyle, isShowHeaderCloseButton = true,
    body, bodyStyle,
    footer, footerStyle,
    isShow, hideFunction,
}) => {

    const hideModal = useCallback((e) => {
        hideFunction();
        e.stopPropagation();
    }, [hideFunction]);

    const ignoreOnClick = useCallback((e) => {
        e.stopPropagation();
    }, []);

    const Modal = React.memo(() => {
        return (
            <div
                className={styles.modalContent}
                style={modalStyle}
                onClick={ignoreOnClick}
            >
                {/* Modal Header */}
                {header &&
                    <div
                        className={styles.modalHeader}
                        style={headerStyle}
                        onClick={ignoreOnClick}
                    >
                        {isShowHeaderCloseButton && <span
                            className={styles.close}
                            onClick={hideModal}>
                            &times;
                        </span>
                        }
                        {header}
                    </div>
                }
                {/* Modal Body */}
                {body &&
                    <div
                        className={styles.modalBody}
                        style={bodyStyle}
                        onClick={ignoreOnClick}
                    >
                        {body}
                    </div>
                }
                {/* Modal Footer */}
                {footer &&
                    <div className={styles.modalFooter}
                        style={footerStyle}
                        onClick={ignoreOnClick}
                    >
                        {footer}
                    </div>
                }
            </div>
        );
    });

    if (!isShow) {
        return <></>;
    }

    return (
        <>
            {isModal ?
                // Modal
                <div
                    className={styles.modal}
                    onClick={isAllowClickOutSide ? hideModal : undefined}>
                    <Modal />
                </div>
                :
                <Modal />
            }
        </>
    );
});

export default ModalComponent;