import React from "react";
import useBoolean from "../hook/useBoolean";
import { Button } from "react-bootstrap";
import ModalComponent from "../components/common/modal/ModalComponent";
import ConfirmModalComponent from "../components/common/modal/ConfirmModalComponent";

const Exercise2 = React.memo(() => {

    const [isShowModal1, showModal1, hideModal1] = useBoolean(false);
    const [isShowModal2, showModal2, hideModal2] = useBoolean(false);
    const [isShowModal3, showModal3, hideModal3] = useBoolean(false);

    return (
        <>
            <h1>Exercise 2</h1>
            <Button onClick={showModal1}>
                Open Modal 1
            </Button>

            <Button className="ms-3" onClick={showModal2}>
                Open Confirm Modal
            </Button>

            <Button className="ms-3" onClick={showModal3}>
                Open Dialog
            </Button>

            {/* Modal 1 */}
            <ModalComponent
                isShow={isShowModal1}
                hideFunction={hideModal1}
                isModal={true}
                modalStyle={{ width: "70%" }}
                isAllowClickOutSide={true}
                header={
                    <h2>Modal Header</h2>
                }
                // headerStyle={{
                //     backgroundColor: "green",
                //     color: "white"
                // }}
                // isShowHeaderCloseButton={false}
                body={
                    <>
                        <p>Some text in the Modal Body</p>
                        <p>Some other text...</p>
                    </>
                }
                // bodyStyle
                footer={
                    <h3>Modal Footer</h3>
                }
            // footerStyle={{
            //     backgroundColor: "green",
            //     color: "white"
            // }}
            />

            {/* Modal 2 */}
            <ConfirmModalComponent
                isShow={isShowModal2}
                hideFunction={hideModal2}
                modalStyle={{ width: "30%" }}
                message={"Are you sure you want to remove this team?"}
                onSubmit={() => console.log("onClickYes")}
            />

            {/* Modal 3 */}
            <ModalComponent
                isShow={isShowModal3}
                hideFunction={hideModal3}
                isModal={false}
                modalStyle={{ width: "50%", border: "2px solid black" }}
                header={
                    <>
                        <h2>Billions</h2>
                        <hr />
                    </>
                }
                headerStyle={{
                    backgroundColor: "white",
                    color: "black"
                }}
                isShowHeaderCloseButton={true}
                body={
                    <div className="text-center">
                        <img
                            src={process.env.PUBLIC_URL + '/img/img1.jpg'}
                            alt="img1"
                            width='50%'
                        />
                    </div>
                }
                // bodyStyle
                footer={
                    <>
                        <hr />
                        <h3>Modal Footer</h3>
                        <hr />
                    </>
                }
                footerStyle={{
                    backgroundColor: "white",
                    color: "black"
                }}
            />
        </>
    );
});

export default Exercise2;