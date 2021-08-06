import React, {useState} from 'react'
import Login from '../components/Login/Login'
import Navbar from '../components/Navbar'


const HomePage =() => {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
    </>
  )
}

export default HomePage

