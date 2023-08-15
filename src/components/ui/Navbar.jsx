import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { useAuth0 } from '@auth0/auth0-react';
import PrimaryBtn from './PrimaryBtn';

//  navbar links data
const navMenu = [
    {id:1, title: 'Home', path:"#"},
    {id:2, title: 'About', path:"#"},
    {id:3, title: 'Services', path:"#"},
    {id:4, title: 'Contact', path:"#"},
]

const Navbar = () => {

const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const navLinks = navMenu.map(({id, title, path}) => (

<li key={id}>
          <Link to={path} className="text-white hover:text-blue-300">
            {title}
          </Link>
        </li>
    ))

 return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center sticky top-0 w-full z-50 mb-5">
      {/* Logo */}
      <div>
        <Logo/>
             </div>

      {/* Links */}
      <ul className="flex space-x-4">
     {navLinks}
      </ul>

      {/* Sign Up Button */}
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <>
            <img
              src={user.picture}
              alt={user.name}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-white">{user.nickname}</span>
            <PrimaryBtn type='button' title='Logout' onClick={() => logout({ returnTo: window.location.origin })} className={'bg-white text-black'}/>
            </>
        ) : (
          <PrimaryBtn type='button' title='LogIn/SignUp'  onClick={() => loginWithRedirect()} className={'bg-white text-black'}/>
        )}
      </div>




    </nav>
  );
};

export default Navbar;


