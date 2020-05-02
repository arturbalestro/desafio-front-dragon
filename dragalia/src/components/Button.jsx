import React from 'react';
import { connect } from 'react-redux';
import { getDragons } from '../actions';
import { StyledButton } from '../styles/StyledButton';

//Button to call the action.
//TODO turn this button into the login button which will trigger the action
let Button = ({ getDragons }) => (
  <StyledButton onClick={getDragons}>LOGIN</StyledButton>
);

//Dispatching action to get the dragons list
const mapDispatchToProps = {
  getDragons,
};

export default connect(null, mapDispatchToProps)(Button);
