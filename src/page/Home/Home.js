import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import freeDeliveryImg from '../../assets/images/freeDelivery.jpg';
import organicImg from '../../assets/images/organic.png';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Premium from '../../components/Premium/Premium';
import RecentProduct from '../../components/RecentProduct/RecentProduct';
import './Home.scss';
const Home = () => {
    return (
        <div className='home-main'>
            <div className='site-setting'>
                <div className='site-setting-wraper'>
                    <div className='phone-number'>
                        <a href="callto:+01900220033">
                            <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faPhoneAlt} />
                            Call us: +01900220033
                        </a>
                    </div>
                    <div className='setting-dropdown'>
                        <select className='curency' name="" id="">
                            <option value="">USD</option>
                            <option value="">BDT</option>
                            <option value="">EUR</option>
                        </select>
                        <select className='language' name="" id="">
                            <option value="">Bangla</option>
                            <option value="">English</option>
                            <option value="">Roman</option>
                        </select>
                    </div>
                </div>
            </div>
            <Navbar />
            <Header />
            <Premium />
            <div className='take-a-tour'>
                <div className="tour-wrapper">
                    <h1>Take a tours With <span>Buniyadi</span></h1>
                    <div className='tour-img'>
                        <img src={organicImg} alt="" />
                        <img src={organicImg} alt="" />
                        <img src={organicImg} alt="" />
                        <img src={organicImg} alt="" />
                    </div>
                </div>
                <img className='free-delivery-img' src={freeDeliveryImg} alt="" />
            </div>
            <RecentProduct />
        </div>
    );
};

export default Home;