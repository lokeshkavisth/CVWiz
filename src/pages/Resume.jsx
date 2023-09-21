import ResumeOne from '../layouts/ResumeOne'
import { useAuth0 } from '@auth0/auth0-react';
import SignIn from '../auth/SignIn';

const Resume = () => {

const { user, isAuthenticated } = useAuth0();
if(!user && !isAuthenticated){

  return(

<section className="grid place-items-center h-screen text-center">
  <div>
  <h2>SignIn to see your Resume</h2>
  <SignIn/>
</div>
</section>

  )

}


  return (
    <main>
        <ResumeOne/>
    </main>
  )
}

export default Resume