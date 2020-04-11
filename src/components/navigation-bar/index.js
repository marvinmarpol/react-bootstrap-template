import React from 'react'
import logo from './images/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-toggleable-sm navbar-expand-md bg-light navbar-light sticky-top">
            <div class="container">
                <a href="#" class="navbar-brand">
                    <img src={logo} class="py-3" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarResponsive" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Kelas</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Hubungi Kami</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;