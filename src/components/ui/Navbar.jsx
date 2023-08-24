import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { useAuth0 } from '@auth0/auth0-react';
import PrimaryBtn from './PrimaryBtn';
import SignOut from '../auth/SignOut';
import SignIn from '../auth/SignIn';
import Profile from '../auth/Profile';

//  navbar links data
const navMenu = [
    {id:1, title: 'Home', path:"/"},
    {id:2, title: 'Create', path:"/create-resume"},
    {id:3, title: 'Resume', path:"resume"},
   ]

const Navbar = () => {

   const { user, isAuthenticated, isLoading } = useAuth0();

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
      <div className='flex items-center gap-10'>
        <Logo/>

      {/* Links */}
      <ul className="flex space-x-4">
     {navLinks}
      </ul>
   </div>

      {/* Sign Up Button */}
      <div className="flex items-center space-x-4">
        
{isAuthenticated ? <SignOut/> : <SignIn/>}
 <Profile/>
      </div>
    </nav>
  );
};

export default Navbar;


