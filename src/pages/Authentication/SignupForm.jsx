import React from "react";
import UserForm from "../../components/UserForm";

const SignupForm = () => {
  return (
    <>
      <UserForm heading="Sign Up" showFields={true} signupLogic={true} />
    </>
  );
};

export default SignupForm;
