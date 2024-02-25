import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { LOCAL_STORAGE_KEY } from "../../utils/Constant";
import useLocalStorage from "../../hook/useLocalStorage";

const StorageChangeForm = () => {

    const [name, setName] = useLocalStorage(LOCAL_STORAGE_KEY.NAME, "");

    const initForm = {
        name: name || "",
    };

    const validationForm = Yup.object({
        name: Yup.string().required('Required')
    });

    const handleSubmitForm = async (values) => {
        setName(values.name);
    }

    return (
        <Formik
            initialValues={initForm}
            validationSchema={validationForm}
            validateOnChange={true}
            validateOnBlur={true}
            enableReinitialize={true}
            onSubmit={handleSubmitForm}
        >
            {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                values,
                isSubmitting
            }) => (
                <>
                    <Form onSubmit={handleSubmit}>
                        {/* Name */}
                        <Form.Group className="mb-3">
                            <Form.Label className="required">Name</Form.Label>
                            <Form.Control
                                size="md"
                                type="text"
                                name="name"
                                placeholder="Enter name"
                                value={values.name}
                                isInvalid={Boolean(touched.name && errors.name)}
                                onBlur={handleBlur}
                                onChange={handleChange} />
                            {!!touched.name && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        {/* Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="md"
                            disabled={isSubmitting}
                        >
                            Save
                        </Button>
                    </Form>
                </>
            )}
        </Formik>
    );
};

export default StorageChangeForm;