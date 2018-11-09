// Higher Order Component (HOC) - A component that renders that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>This info is: {info}</p>
  </div>
);

Info.propTypes = {
  info: PropTypes.string
};

// const withAdminWarning = WrappedComponent => ({ isAdmin }) => (
//   <div>
//     {isAdmin && <p>This is private info. Please don&apos;t share!</p>}
//     <WrappedComponent {...props} />
//   </div>
// );

const requireAuthentication = WrappedComponent => ({ props }) => {
  const { isAuthenticated } = props;
  return (
    <div>
      {isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view info.</p>
      )}
    </div>
  );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details." />, document.getElementById('app'));
ReactDOM.render(
  <AuthInfo isAuthenticated info="These are the details." />,
  document.getElementById('app')
);
