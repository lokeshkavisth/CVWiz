import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import SecondryBtn from "../ui/SecondryBtn";

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();

  return <SecondryBtn type='button' title='SignIn' onClick={() => loginWithRedirect()}  className={'bg-white text-black font-medium'}/>
};

export default SignIn;