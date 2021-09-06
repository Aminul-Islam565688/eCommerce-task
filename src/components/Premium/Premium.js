import React from 'react';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import './Premium.scss';


const Premium = () => {
    return (
        <div className='premium-main'>
            <div className="premium-wrapper">
                <h1>We Are Always <span>Premium</span></h1>
                <div className="premium-carts">
                    <div className="premium-single-cart">
                        <img src={service1} alt="" />
                        <h2>Premium<br /> Production</h2>
                    </div>
                    <div className="premium-single-cart">
                        <img src={service2} alt="" />
                        <h2>Premium<br /> Packaging</h2>
                    </div>
                    <div className="premium-single-cart">
                        <img src={service3} alt="" />
                        <h2>Premium<br /> Service</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Premium;