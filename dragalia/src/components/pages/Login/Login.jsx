import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Formik } from 'formik';

import { addUser, getDragons } from '../../../actions';
import { StyledLogin } from '../../../styles/StyledLogin';
import { StyledButton } from '../../../styles/StyledButton';

const Login = ({ addUser, getDragons, history }) => {

    return (
        <StyledLogin>
            <Formik
                initialValues={{ userName: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.userName) errors.userName = 'Required';
                    if (!values.password) errors.password = 'Required';
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    const newUser = {
                        name: values.userName,
                        type: values.password
                    }
                    addUser(newUser);
                    //TODO Implement action for logging in with the user data
                    //TODO Solve the issue with Firebase API access to add and fetch user information

                    getDragons();
                    setSubmitting(false);
                    history.push('/dragons');
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
                                <Label for="userName">Username</Label>
                                <Input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userName} />
                                <FormFeedback>{errors.userName && touched.userName && errors.userName}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} />
                                <FormFeedback>{errors.password && touched.password && errors.password}</FormFeedback>
                            </FormGroup>
                            <FormGroup className="text-right">
                                <StyledButton
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    LOGIN
                                </StyledButton>
                            </FormGroup>
                        </Form>
                    )}
            </Formik>
        </StyledLogin>
    );
}

//Dispatching action to use as props
const mapDispatchToProps = {
    addUser,
    getDragons
};

export default connect(null, mapDispatchToProps)(Login);