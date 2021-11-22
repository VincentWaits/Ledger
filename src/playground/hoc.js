// higher order component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({ info, isAuthenticated }) => {
  return (
    <div>
      <p>The info is:</p>
      {isAuthenticated && <p>{info}</p>}
    </div>
  );
};

const withAdminWarning = (WrapperComponent) => {
  return (props) => (
    <div>
      <p>This is private info, please don't share!!</p>
    </div>
  );
};

const requireAuthentication = (WrapperComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <p>This message is authenticated</p>}
      <WrapperComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
// <AdminInfo info="Here are some detail" />,
// document.getElementById('app')
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="Here are the details" />,
  document.getElementById('app')
);
