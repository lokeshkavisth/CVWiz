import Navbar from './components/ui/Navbar'
import Route from './routes/routes'

const App = () => {

  const currentYear = new Date().getFullYear();


  if(window.innerWidth < 768) {
    return(
      <div className='h-screen grid place-items-center text-center'>
      <h1>This site is not accessable on smaller devices</h1>
      </div>
    )
  }


  return (
    <>
    <Navbar/>
     <Route/>
     <footer className='mt-10 text-center py-6 border-t capitalize text-sm'>copyright {currentYear} &#169; &#124; created by <a target='_blank' rel='noreferrer' href='https://github.com/lokeshkavisth' className='text-blue-500 font-semibold'>Lokesh Sharma</a>. all right reserved.</footer>
    </>
  )
}

export default App