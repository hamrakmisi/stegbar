import { useState } from 'react'
import logo from '../assets/pictures/logo.jpg'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <div className="mb-8 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
            <li><Link to='/drinks'>🍹Itallap</Link></li>
            <li><Link to='/foods'>🥨Harapnivalók</Link></li>
            <li><Link to='/others'>🌊Egyéb</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">Stég Bár</Link>
      </div>
      <div className="navbar-end">
        {/* <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button> */}
        <button className="btn btn-ghost btn-circle">
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Link to="/" ><img alt="Stég bár logó" src={logo} /></Link>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
export default Navbar