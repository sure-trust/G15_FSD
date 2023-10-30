import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar=()=>{
return (

    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className='container-fluid'>
  <NavLink className="navbar-brand" to="/">Flipkart</NavLink>
  <button className="navbar-toggler" 
  type="button"
   data-bs-toggle="collapse" 
   data-bs-target="#navbarNavAltMarkup" 
   aria-controls="navbarNavAltMarkup" 
   aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">Toggle menu</span>
  </button>
  
  <div className="collapse navbar-collapse"
   id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink 
      className="nav-link active"
       aria-current="page" to="/">Home</NavLink>
     {/*  <NavLink className="nav-link" to="/employee">Employees</NavLink>
      <NavLink className="nav-link" to="/User">Email Verification</NavLink>
      <NavLink className="nav-link" to="/calculator">oldCalculator</NavLink>
      <NavLink className="nav-link" to="/Mcalc">Modifycalc</NavLink> */}
      <NavLink className="nav-link" to="/ProductManagement">ProductManagement</NavLink>
     
      <NavLink className="nav-link" to="/UsersList">array of objects</NavLink>
      <NavLink className="nav-link" to="/ShoppingCart">ShoppingCart</NavLink>
     
    </div>
 
</div></div>
</nav></>



)


}

export default NavBar;