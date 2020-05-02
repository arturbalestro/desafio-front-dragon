import React from 'react';
import { connect } from 'react-redux';
import { getDragons } from '../actions';

//Button to call the action.
//TODO turn this button into the login button which will trigger the action
//TODO style this button
let Button = ({ getDragons }) => (
  <button onClick={getDragons}>Press to see the dragon list</button>
);

//Dispatching action to get the dragons list
const mapDispatchToProps = {
  getDragons,
};

export default connect(null, mapDispatchToProps)(Button);
