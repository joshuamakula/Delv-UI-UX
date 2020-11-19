import React from 'react'
import './style.css';
import delv2 from './delv2.svg'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-3 text-center text-md-left ">
                            <ul className="footer-lists">
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Help and support</a></li>
                            </ul>
                        </div>
                
                        <div className="col-md-3  text-center text-md-left ">
                            <ul className="footer-lists">
                                <li><a href="">Terms and Conditions</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Cookie Policy</a></li>
                            </ul> 
                        </div>
                
                        <div className="col-md-3  my-4 text-center text-md-left ">
                            
                        </div>
                        <div className="col-md-3  my-4 text-center text-md-left ">
                            
                        </div>
                    </div>  
                    <div className="row ">
                        <div className="col-md-6  my-4 text-center text-md-left ">
                            <img src={delv2} className="logo" alt="delv"/>
                        </div>
                        <div className="col-md-6  my-4 text-center text-md-right ">
                              <span>&copy; 2020  </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
