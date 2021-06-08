/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Link } from "react-router-dom";

const TopBar = () => {
    return (
    <>
        <div className="navbar-custom">
                <ul className="list-unstyled topnav-menu float-right mb-0">

                   


                    <li className="dropdown notification-list">
                        <Link className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" to="/" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src={"/assets/images/users/avatar-1.jpg"} alt="user-image" className="rounded-circle" />
                            <span className="pro-user-name ml-1">
                                Maxine K  <i className="mdi mdi-chevron-down"></i> 
                            </span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                          
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>

                           
                            <Link to="/" className="dropdown-item notify-item">
                                <i className="fe-user"></i>
                                <span>Profile</span>
                            </Link>

                          
                            <Link to="/" className="dropdown-item notify-item">
                                <i className="fe-settings"></i>
                                <span>Settings</span>
                            </Link>

                          
                            <Link to="/" className="dropdown-item notify-item">
                                <i className="fe-lock"></i>
                                <span>Lock Screen</span>
                            </Link>

                            <div className="dropdown-divider"></div>

                          
                            <Link to="/" className="dropdown-item notify-item">
                                <i className="fe-log-out"></i>
                                <span>Logout</span>
                            </Link>

                        </div>
                    </li>

                    <li className="dropdown notification-list">
                        <Link to="/" className="nav-link right-bar-toggle waves-effect waves-light">
                            <i className="fe-settings noti-icon"></i>
                        </Link>
                    </li>


                </ul>

               
                <div className="logo-box">
                    <Link to="index-2.html" className="logo text-center">
                        <span className="logo-lg">
                            <img src={"/assets/images/logo-light.png"} alt="" height="25" />
                         
                        </span>
                        <span className="logo-sm">
                         
                            <img src={"/assets/images/logo-sm.png"} alt="" height="28" />
                        </span>
                    </Link>
                </div>

                <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li>
                        <Link className="button-menu-mobile waves-effect waves-light" to="/">
                            <i className="fe-menu"></i>
                        </Link>
                    </li>

                    <li className="d-none d-sm-block">
                            <form className="app-search">
                                <div className="app-search-box">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <button className="btn" type="submit">
                                                <i className="fe-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </li>

                </ul>
            </div>
          
           
            
        </>
    )
}

export default TopBar
