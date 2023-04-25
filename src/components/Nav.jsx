import React from 'react';
import { Link } from 'react-router-dom'

const SideNav = () => (
  <div className="sidenavi">
    <Link to = "/"> <button> Home 🏠 </button></Link>
    <Link to="/explore"><button> Explore </button></Link>
    <Link to="/new"><button> Share your Goal </button></Link>
  </div>
);

export default SideNav;