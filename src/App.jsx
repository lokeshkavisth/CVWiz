import React from 'react'
import ResumeForm from './components/ResumeForm'
import Navbar from './components/ui/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
      <ResumeForm/>
      </main>
    </div>
  )
}

export default App