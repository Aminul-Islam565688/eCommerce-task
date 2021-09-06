import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/icon/cart.png';
import searchIcon from '../../assets/icon/loupe.png';
import wishIcon from '../../assets/icon/wishlist.png';
import logo from '../../assets/images/logo.png';
import './Navbar.scss';


const Navbar = () => {
    return (
        <div className='navbar-main'>
            <div className="navbar-wrapper">
                <Link to='/home' className='navbar-logo'>
                    <img src={logo} alt="" />
                </Link>
                <div className='navbar-links'>
                    <div className='navbar-page-links'>
                        <ul>
                            <li>
                                <Link to='/home'>Home</Link>
                            </li>
                            <li>
                                <Link to='/shope'>
                                    <select>
                                        <option hidden selected>Shop</option>
                                        <option value="">Honey</option>
                                        <option value="">Rice</option>
                                        <option value="">Dates</option>
                                    </select>
                                </Link>
                            </li>
                            <li>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='navbar-icon-links'>
                        <img src={searchIcon} alt="" />
                        <img src={wishIcon} alt="" />
                        <img src={cartIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;