import React from "react";
import UserForm from "../../components/UserForm";

const SigninEmail = () => {
  return (
    <>
      <UserForm heading="Sign In" showFields={false} signupLogic={false} />
    </>
  );
};

export default SigninEmail;
