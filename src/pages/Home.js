import React from 'react'
import {Link } from "react-router-dom";
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <>
             <div className="content-page">
                <div className="content">
                    
                  
                    <div className="container-fluid">
                        
                       
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/">Adminox</Link></li>
                                            <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                            <li className="breadcrumb-item active">Dashboard 1</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">Dashboard</h4>
                                </div>
                            </div>
                        </div>     
                        

                        <div className="row">

                            <div className="col-xl-3 col-sm-6">
                                <div className="card-box widget-box-two widget-two-custom">
                                    <div className="media">
                                        <div className="avatar-lg rounded-circle bg-primary widget-two-icon align-self-center">
                                            <i className="mdi mdi-currency-usd avatar-title font-30 text-white"></i>
                                        </div>

                                        <div className="wigdet-two-content media-body">
                                            <p className="m-0 text-uppercase font-weight-medium text-truncate" title="Statistics">Total Revenue</p>
                                            <h3 className="font-weight-medium my-2">$ <span data-plugin="counterup">65,841</span></h3>
                                            <p className="m-0">Jan - Apr 2019</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           

                            <div className="col-xl-3 col-sm-6">
                                <div className="card-box widget-box-two widget-two-custom ">
                                    <div className="media">
                                        <div className="avatar-lg rounded-circle bg-primary widget-two-icon align-self-center">
                                            <i className="mdi mdi-account-multiple avatar-title font-30 text-white"></i>
                                        </div>

                                        <div className="wigdet-two-content media-body">
                                            <p className="m-0 text-uppercase font-weight-medium text-truncate" title="Statistics">Total Unique Visitors</p>
                                            <h3 className="font-weight-medium my-2"> <span data-plugin="counterup">26,521</span></h3>
                                            <p className="m-0">Jan - Apr 2019</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          

                            <div className="col-xl-3 col-sm-6">
                                <div className="card-box widget-box-two widget-two-custom ">
                                    <div className="media">
                                        <div className="avatar-lg rounded-circle bg-primary widget-two-icon align-self-center">
                                            <i className="mdi mdi-crown avatar-title font-30 text-white"></i>
                                        </div>

                                        <div className="wigdet-two-content media-body">
                                            <p className="m-0 text-uppercase font-weight-medium text-truncate" title="Statistics">Number of Transactions</p>
                                            <h3 className="font-weight-medium my-2"><span data-plugin="counterup">7,842</span></h3>
                                            <p className="m-0">Jan - Apr 2019</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         

                            <div className="col-xl-3 col-sm-6">
                                <div className="card-box widget-box-two widget-two-custom ">
                                    <div className="media">
                                        <div className="avatar-lg rounded-circle bg-primary widget-two-icon align-self-center">
                                            <i className="mdi mdi-auto-fix  avatar-title font-30 text-white"></i>
                                        </div>

                                        <div className="wigdet-two-content media-body">
                                            <p className="m-0 text-uppercase font-weight-medium text-truncate" title="Statistics">Conversation Rate</p>
                                            <h3 className="font-weight-medium my-2"><span data-plugin="counterup">2.07</span>%</h3>
                                            <p className="m-0">Jan - Apr 2019</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                   

                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Revenue Comparison</h4>

                                    <div className="text-center">
                                        <h5 className="font-weight-normal text-muted">You have to pay</h5>
                                        <h3 className="mb-3"><i className="mdi mdi-arrow-up-bold-hexagon-outline text-success"></i> 25643 <small>USD</small></h3>
                                    </div>

                                    <div className="chart-container" dir="ltr">
                                        <div className="" style={{height:'280px'}} id="platform_type_dates_donut"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Visitors Overview</h4>

                                    <div className="text-center">
                                        <h5 className="font-weight-normal text-muted">You have to pay</h5>
                                        <h3 className="mb-3"><i className="mdi mdi-arrow-down-bold-hexagon-outline text-danger"></i> 5623 <small>USD</small></h3>
                                    </div>

                                    <div className="chart-container" dir="ltr">
                                        <div className="" style={{height:'280px'}} id="user_type_bar"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Goal Completion</h4>

                                    <div className="text-center">
                                        <h5 className="font-weight-normal text-muted">You have to pay</h5>
                                        <h3 className="mb-3"><i className="mdi mdi-arrow-up-bold-hexagon-outline text-success"></i> 12548 <small>USD</small></h3>
                                    </div>

                                    <div className="chart-container" dir="ltr">
                                        <div className="chart has-fixed-height" style={{height:'280px'}} id="page_views_today"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      


                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className="card-box">
                                    <h4 className="header-title">Recent Candidates</h4>
                                    <p className="sub-header">
                                        Your awesome text goes here.
                                    </p>

                                    <div className="table-responsive">
                                        <table className="table table-hover m-0 table-actions-bar">

                                            <thead>
                                                <tr>
                                                    <th>
                                                        <div className="btn-group dropdown">
                                                            <button type="button" className="btn btn-light btn-xs dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false"> <i className="mdi mdi-chevron-down"></i></button>
                                                            <div className="dropdown-menu">
                                                                <Link className="dropdown-item" to="/">Dropdown link</Link>
                                                                <Link className="dropdown-item" to="/">Dropdown link</Link>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <th>Name</th>
                                                    <th>Location</th>
                                                    <th>Job Timing</th>
                                                    <th>Salary</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <img src={"/images/users/avatar-2.jpg"} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                </td>

                                                <td>
                                                    <h5 className="m-0 font-weight-medium">Tomaslau</h5>
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-map-marker text-primary"></i> New York
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-clock-outline text-success"></i> Full Time
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-currency-usd text-warning"></i> 3265
                                                </td>

                                                <td>
                                                    <Link to="/" className="table-action-btn"><i className="mdi mdi-pencil"></i></Link>
                                                    <Link to="/" className="table-action-btn"><i className="mdi mdi-close"></i></Link>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <img src={"/images/users/avatar-3.jpg"} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                </td>

                                                <td>
                                                    <h5 className="m-0 font-weight-medium">Erwin E. Brown</h5>
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-map-marker text-primary"></i> California
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-clock-outline text-success"></i> Part Time
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-currency-usd text-warning"></i> 1365
                                                </td>

                                                <td>
                                                    <Link to="/" className="table-action-btn"><i className="mdi mdi-pencil"></i></Link>
                                                    <Link to="/" className="table-action-btn"><i className="mdi mdi-close"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={"/images/users/avatar-4.jpg"} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                </td>

                                                <td>
                                                    <h5 className="m-0 font-weight-medium">Margeret V. Ligon</h5>
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-map-marker text-primary"></i> New York
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-clock-outline text-success"></i> Full Time
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-currency-usd text-warning"></i> 115248
                                                </td>

                                                <td>
                                                    <Link to="/" className="table-action-btn"><i className="mdi mdi-pencil"></i></Link>
                                                    <Link to="/" className="table-action-btn"><i className="mdi mdi-close"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={"/images/users/avatar-5.jpg"} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                </td>

                                                <td>
                                                    <h5 className="m-0 font-weight-medium">Jose D. Delacruz</h5>
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-map-marker text-primary"></i> New York
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-clock-outline text-success"></i> Part Time
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-currency-usd text-warning"></i> 2451
                                                </td>

                                                <td>
                                                    <Link to="/" className="table-action-btn"><i className="mdi mdi-pencil"></i></Link>
                                                    <Link to="/" className="table-action-btn"><i className="mdi mdi-close"></i></Link>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <img src={"/images/users/avatar-8.jpg"} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                </td>

                                                <td>
                                                    <h5 className="m-0 font-weight-medium">Luke J. Sain</h5>
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-map-marker text-primary"></i> Australia
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-clock-outline text-success"></i> Part Time
                                                </td>

                                                <td>
                                                    <i className="mdi mdi-currency-usd text-warning"></i> 3265
                                                </td>

                                                <td>
                                                    <Link to="/" className="table-action-btn"><i className="mdi mdi-pencil"></i></Link>
                                                    <Link to="/" className="table-action-btn"><i className="mdi mdi-close"></i></Link>
                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                          

                            <div className="col-xl-3 col-lg-6">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Total Unique Visitors</h4>

                                    <div className="widget-chart text-center" dir="ltr">

                                        <div id="donut-chart" style={{height:'280px'}}></div>

                                        <div className="row text-center mt-4">
                                            <div className="col-6">
                                                <h3 data-plugin="counterup">1,507</h3>
                                                <p className="text-muted mb-0">Visitors Male</p>
                                            </div>
                                            <div className="col-6">
                                                <h3 data-plugin="counterup">854</h3>
                                                <p className="text-muted mb-1">Visitors Female</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-xl-3 col-lg-6">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Number of Transactions</h4>

                                    <div className="widget-chart text-center" dir="ltr">

                                        <div id="pie-chart" style={{height: '280px'}}></div>

                                        <div className="row text-center mt-4">
                                            <div className="col-6">
                                                <h3 data-plugin="counterup">2,854</h3>
                                                <p className="text-muted mb-0">Payment Done</p>
                                            </div>
                                            <div className="col-6">
                                                <h3 data-plugin="counterup">22</h3>
                                                <p className="text-muted mb-1">Payment Due</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                       
                        
                    </div> 

                </div> 

                

               
               <Footer />
               

            </div>
        </>
    )
}

export default Home
