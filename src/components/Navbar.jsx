import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
class Navbar extends Component  {
    render() {
        return (
            <Router>
                <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                    <div className="container"> 
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                            <Link to="/" className="navbar-brand page-scroll">Test Site</Link>
                        </div>
                        
                        
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/about" className="page-scroll">Home</Link></li>
                                <li><Link to="/services" className="page-scroll">Services</Link></li>
                                <li><Link to="/gallery" className="page-scroll">Gallery</Link></li>
                                <li><Link to="/testimonials" className="page-scroll">Testimonials</Link></li>
                                <li><Link to="/contact" className="page-scroll">Contact</Link></li>
                            </ul>
                        
                        </div>
                    
                    </div>
                </nav>
            </Router>
        );
    }

}
export default Navbar;