import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import SecondryBtn from "../ui/SecondryBtn";

const SignOut = () => {
  const { logout } = useAuth0();

  return (
   <SecondryBtn type='button' title='SignOut' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={'bg-white text-black font-medium'}/>
  );
};

export default SignOut;