import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// eslint-disable-next-line no-shadow
export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify App</h1>
      <p>It&apos;s time to get your expenses under control.</p>
      <button type="button" onClick={startLogin}>
        Login
      </button>
    </div>
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
