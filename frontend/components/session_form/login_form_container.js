import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SessionForm from './session_form';
import { login } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'login',
  navLink: <Link to="/signup">signup instead</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
