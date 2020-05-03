import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';
import { Formik } from 'formik';
import { addDragon } from '../actions';

const AddDragonModal = ({ isOpen, toggle, addDragon }) => {

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>ADD A DRAGON TO THE LIST</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{ dragonName: '', dragonType: '', dragonHistory: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.dragonName) errors.dragonName = 'Required';
                            if (!values.dragonType) errors.dragonType = 'Required';
                            if (!values.dragonHistory) errors.dragonHistory = 'Required';
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            const newDragon = {
                                name: values.dragonName,
                                type: values.dragonType,
                                history: values.dragonHistory
                            }

                            addDragon(newDragon);
                            setSubmitting(false);
                            toggle();
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label for="dragonName">The Name of the Dragon</Label>
                                        <Input
                                            type="text"
                                            name="dragonName"
                                            id="dragonName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.dragonName} />
                                        <FormFeedback>{errors.dragonName && touched.dragonName && errors.dragonName}</FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="dragonType">The Type of the Dragon</Label>
                                        <Input
                                            type="text"
                                            name="dragonType"
                                            id="dragonType"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.dragonType} />
                                        <FormFeedback>{errors.dragonType && touched.dragonType && errors.dragonType}</FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="dragonHistory">The History of the Dragon</Label>
                                        <Col sm={10}>
                                            <Input
                                                type="textarea"
                                                name="dragonHistory"
                                                id="dragonHistory"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.dragonHistory}
                                            />
                                            <FormFeedback>{errors.dragonHistory && touched.dragonHistory && errors.dragonHistory}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <Button type="submit" disabled={isSubmitting}>Add</Button>
                                </Form>
                            )}
                    </Formik>
                </ModalBody>
            </Modal>
        </div>
    );
}

//Dispatching action to get the dragons list
const mapDispatchToProps = {
    addDragon
};

export default connect(null, mapDispatchToProps)(AddDragonModal);