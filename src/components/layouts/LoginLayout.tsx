import React from 'react';
const AuthLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

export default AuthLayout;
