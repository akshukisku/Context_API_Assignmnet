// import React from 'react'
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const HomeWrapper = () => {
  return (
    <div className="w-full">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default HomeWrapper