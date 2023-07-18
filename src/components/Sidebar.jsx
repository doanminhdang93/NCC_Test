import React from 'react'
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className='menu' id='home'>
            <h2 className="menu-item">Home</h2>
        </div>
        <div className='menu' id='services'>
            <h2 className="menu-item">Services</h2>
        </div>
        <div className='menu' id='news'>
            <h2 className="menu-item">News</h2>
        </div>
        <div className='menu' id='blog'>
            <h2 className="menu-item">Blog</h2>
        </div>
        <div className='menu' id='contact'>
            <h2 className="menu-item">Contact</h2>
        </div>
    </div>
  )
}

export default Sidebar;