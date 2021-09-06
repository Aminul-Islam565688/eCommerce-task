import React from 'react';
import ghee from '../../assets/images/ghee.png';
import honey from '../../assets/images/honey.png';
import masterdOil from '../../assets/images/masterd-oil.png';
import './Header.scss';



const Header = () => {
    return (
        <header className='header-main'>
            <div className='header-wrapper'>
                <div className='header-text'>
                    <p>Best <span>Organic</span> &<br /><span>Handmade</span> Product</p>
                    <div>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className='header-img'>
                    <img src={ghee} alt="" />
                    <img src={masterdOil} alt="" />
                    <img src={honey} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;