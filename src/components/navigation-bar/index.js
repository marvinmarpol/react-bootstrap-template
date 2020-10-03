import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';
import logo from './images/logo.png'

const Navbar = () => {
    /* return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (
                <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}
                    class="navbar navbar-toggleable-sm navbar-expand-md bg-light navbar-light sticky-top"
                    onClick={context.toggleTheme}>
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
        }}
        </ThemeContext.Consumer>
    ); */

    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
            const theme = isLightTheme ? light : dark;

    return (
        <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}
            class="navbar navbar-toggleable-sm navbar-expand-md bg-light navbar-light sticky-top"
            onClick={toggleTheme}>
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