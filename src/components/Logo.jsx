// import LOGO from '../assets/resume-logo-png-transparent.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'}>
    {/* <img src={LOGO} alt="Resume Builder" className="w-20 mr-2"/> */}
     <h2 className='text-white text-xl font-semibold'>Logo</h2>
    </Link>
  )
}

export default Logo