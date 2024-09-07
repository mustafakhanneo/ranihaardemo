import React from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Catcarousel from './components/Catcarousel'
import Bestseller from './components/Bestseller'
import Divider from './components/Divider'

const Home = () => {
  
  return (
    <div className='flex flex-col h-screen max-w-full bg-white'>
      <Navbar />
      <Banner />
      <Catcarousel />
      <Divider />
      <Bestseller />
      <Footer />
    </div>
  )
}

export default Home