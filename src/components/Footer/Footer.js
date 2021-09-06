import { faFacebookF, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import emailIMG from '../../assets/images/email.png';
import footerLogo from '../../assets/images/logofooter.png';
import './Footer.scss';


const Footer = () => {
    return (
        <footer className='footer-main'>
            <div className="footer-wrapper">
                <div className='footer-feedback'>
                    <div className='footer-service-img'>
                        <img src={emailIMG} alt="" />
                    </div>
                    <div className='footer-service-text'>
                        <h1>Like Our Service? Subscribe Us</h1>
                        <p>Lorem, ipsum dolor consectetur adipisicing elit. <br />. Minima vident ab dolore ipsa?</p>
                    </div>
                </div>
                <div className="footer-subscribe">
                    <label for='subscribe'>
                        <input id='subscribe' type="text" />
                        <button>Subscribe</button>
                    </label>
                </div>
                <div className='footer-address-section'>
                    <div className='footer-logo-details'>
                        <img src={footerLogo} alt="" />
                        <p>mollitia ipsa recusandae quae voluptas dolore provident hic repellat dicta a assumenda modi. Ab alias ratione atque, in assumenda  Cumque odit accusamus vitae nobis!</p>
                    </div>
                    <div className='footer-address-links'>
                        <div className='footer-links'>
                            <h5>Company</h5>
                            <div>
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Careers</a></li>
                                    <li><a href="">Support</a></li>
                                </ul>
                                <ul>
                                    <li><a href="">FAQ</a></li>
                                    <li><a href="">Terms</a></li>
                                    <li><a href="">Privacy</a></li>
                                    <li><a href="">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-contact'>
                            <h5>Contact</h5>
                            <div>
                                <ul>
                                    <li>Phone:+1 605 722 2032</li>
                                    <li>Email: example@mail.com</li>
                                    <li>Address: Charlotta, North Carolina, United States</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <div className='copyright-footer-icon'>
                    <ul>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>2020 - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

