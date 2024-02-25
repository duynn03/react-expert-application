import React, { useCallback, useEffect, useState } from "react";
import UserApi from "../api/UserApi";
import FilterInput from "../components/common/input/FilterInput";
import { Col, Row } from "react-bootstrap";

const Exercise3 = React.memo(() => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            const data = await UserApi.getAllUsers();
            setUsers(data);
        };
        getAllUsers();
    }, []);

    const handleChangeValue = useCallback((options) => {
        console.log("Your Choose as below");
        console.log(options);
    }, []);

    return (
        <>
            <h1>Exercise 3</h1>
            {
                users.length !== 0 &&
                <>
                    <Row>
                        <Col>
                            {/* Company name */}
                            <FilterInput
                                data={users}
                                placeholder={"Enter your company name"}
                                attributeName={"company.name"}
                                onChangeValue={handleChangeValue}
                            />
                        </Col>
                        <Col>
                            {/* Username */}
                            <FilterInput
                                data={users}
                                placeholder={"Enter your username"}
                                attributeName={"username"}
                                onChangeValue={handleChangeValue}
                            />
                        </Col>

                        <Col>
                            {/* Zipcode */}
                            <FilterInput
                                data={users}
                                placeholder={"Enter your zipcode"}
                                attributeName={"address.zipcode"}
                                onChangeValue={handleChangeValue}
                            />
                        </Col>
                    </Row>
                </>
            }
        </>
    );
});

export default Exercise3;