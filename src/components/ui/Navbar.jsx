import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from '../../auth/Profile';
import SignOut from '../../auth/SignOut';
import SignIn from '../../auth/SignIn';


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
          <Link to={path} className="text-white hover:text-blue-300 capitalize">
            {title}
          </Link>
        </li>
    ))

 return (
    <header className="bg-gray-900 p-4 flex justify-between items-center sticky top-0 w-full z-50 mb-10">
      {/* Logo */}
      <div className='flex items-center gap-10'>
        <Logo/>

     <nav>
       {/* Links */}
      <ul className="flex space-x-4">
     {navLinks}
      </ul>
     </nav>
   </div>

      {/* Sign Up Button */}
      <div className="flex items-center space-x-4">        
 <Profile/>
{isAuthenticated ? <SignOut/> : <SignIn/>}
      </div>
    </header>
  );
};

export default Navbar;


