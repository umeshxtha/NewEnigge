import React from 'react'
import Contact from '../components/Body/Contact'
import Footer from '../components/Footer/Footer'
import Nav from '../components/Navbar/Nav'

function ContactPage() {
  return (
    <div>
      <Nav/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactPage