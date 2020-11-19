import React from 'react';
import { NavLink } from 'react-router-dom';
import '../bootstrap/css/bootstrap.css';
import './style.css';
import delv1 from './delv1.svg'




function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/"><img src={delv1} className="logo" alt="delv"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                        
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                    <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <ul class="navbar-nav mr-auto" >
                        <li class="nav-item active">
                            <a class="nav-link" href="/log-in">Log In <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign Up</a>
                        </li>
                       
                        </ul>
                        
                    </div>
                </nav>
            {/* <nav>
                <NavLink to="/">home</NavLink>
                <NavLink to="/log-in">login</NavLink>
                <NavLink to="#">signup</NavLink>
            </nav> */}
        </header>
    )
}

export default Header
