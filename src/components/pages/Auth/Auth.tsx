import React from "react";

export interface AuthProps {
  props: any;
}

const Auth: React.SFC<AuthProps> = () => {
  return (
    <div>
      <h1>This is a login page</h1>
    </div>
  );
};

export default Auth;
