import React from 'react'
import {Link } from "react-router-dom";

const TopLeft = () => {
    return (
        <>
          <div className="left-side-menu">

<div className="slimscroll-menu">

    
    <div id="sidebar-menu">

        <ul className="metismenu" id="side-menu">

            <li className="menu-title">Navigation</li>

            <li>
                <Link to="/">
                    <i className="fe-airplay"></i>
                    <span className="badge badge-success badge-pill float-right">2</span>
                    <span> Dashboard </span>
                </ Link>
                <ul className="nav-second-level">
                    <li><Link to="/">Dashboard</ Link></li>
                  
                </ul>
            </li>

            <li>
                <Link to="manageproduct">
                    <i className="fe-sidebar"></i>
                    <span> Manage Product </span>
                  
                </ Link>
              
            </li>

          

            

        </ul>

    </div>
  

    <div className="clearfix"></div>

</div>


</div>
            
        </>
    )
}

export default TopLeft
