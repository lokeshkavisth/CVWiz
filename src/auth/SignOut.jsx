import { useAuth0 } from "@auth0/auth0-react";
import PrimaryBtn from "../components/ui/PrimaryBtn";

const SignOut = () => {
  const { logout } = useAuth0();

  return (
   <PrimaryBtn type='button' title='SignOut' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}/>
  );
};

export default SignOut;