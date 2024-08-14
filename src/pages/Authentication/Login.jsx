import React from "react";
import Form from "../../components/Form";



const Login = () => {
 
  return (
    <>
      <Form 
       heading="Login to your OLX account"
       title="Login with Google"
       title1="Login with Email"
       description="New to OLX? Create an account"
       showFields ={false}
       route ="/signup"
      />
    </>
  );
};

export default Login;
