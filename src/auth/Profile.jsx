import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && <div className="flex items-center gap-2">
        <img src={user.picture} alt={user.nickname} className="w-8 aspect-square rounded-full"/>
        <h3 className="text-white capitalize">Hello, {user.nickname}</h3>
        </div>    
  );
};

export default Profile;