import React from 'react'
import '../assets/navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <div className="container">
            <h1 className='logo'>Profil</h1>
            <span className='toggle'>=</span>
            <div className='link-wrapper'>
                <ul className='link-list'>
                    <li><Link to='' activeClassName="active" className='link-item'>Home</Link></li>
                    <li><Link to='' activeClassName="active" className='link-item'>About</Link></li>
                    <li><Link to='#portofolio' activeClassName="active" className='link-item'>Portofolio</Link></li>
                    <li><Link to='' activeClassName="active" className='link-item'>contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
