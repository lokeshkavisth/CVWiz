import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import SecondryBtn from "../components/ui/SecondryBtn";
import PrimaryBtn from "../components/ui/PrimaryBtn";

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();

  return <PrimaryBtn type='button' title='SignIn' onClick={() => loginWithRedirect()}/>
};

export default SignIn;