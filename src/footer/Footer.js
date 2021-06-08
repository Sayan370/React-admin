import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
             <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                               2021 &copy; React Admin by <Link to="/">Sayan</Link>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    )
}

export default Footer
