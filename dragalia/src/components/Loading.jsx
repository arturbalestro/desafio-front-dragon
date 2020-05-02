import React from 'react';
import { connect } from 'react-redux';
import img from '../img/ripple.gif';

//Adding loading state to wait for the action call to finish.
//TODO remove these styles and use a better icon
let Loading = ({ loading }) =>
  loading ? (
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt="loading" />
    </div>
  ) : null;

//Mapping loading state
const mapStateToProps = state => ({ loading: state.loading });

export default connect(mapStateToProps, null)(Loading);
