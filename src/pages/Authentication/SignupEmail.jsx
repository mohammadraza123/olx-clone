import React from "react";
import UserForm from "../../components/UserForm";

const SignupEmail = () => {
  return (
    <>
      <UserForm heading="Sign Up" showFields={true} signupLogic={true} />
    </>
  );
};

export default SignupEmail;
