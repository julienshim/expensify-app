import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import startLogin from '../actions/auth';

// eslint-disable-next-line no-shadow
export const LoginPage = ({ startLogin }) => (
  <div>
    <button type="button" onClick={startLogin}>
      Login
    </button>
  </div>
);

LoginPage.propTypes = {
  startLogin: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
