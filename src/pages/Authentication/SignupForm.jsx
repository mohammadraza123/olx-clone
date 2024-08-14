import React from "react";
import Form from "../../components/Form";

const SignupForm = () => {
  return (
    <>
      <Form
        heading="Create a new Olx account"
        title="Join with Google"
        title1="Join with Email"
        description="New to OLX? Create an account"
        showFields={true}
        route="/login"
        routeEmail="/SignupEmail"
      />
    </>
  );
};

export default SignupForm;
