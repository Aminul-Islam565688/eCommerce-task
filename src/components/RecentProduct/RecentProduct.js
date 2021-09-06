import React from 'react';
import cartIcon from '../../assets/icon/cart.png';
import searchIcon from '../../assets/icon/loupe.png';
import wishIcon from '../../assets/icon/wishlist.png';
import gheeImg from '../../assets/images/ghee.png';
import './RecentProduct.scss';

const RecentProduct = () => {

    const recentproduct = [
        {
            img: gheeImg,
            product: 'Ghee',
            price: 500
        },
        {
            img: gheeImg,
            product: 'Ghee',
            price: 500
        },
        {
            img: gheeImg,
            product: 'Ghee',
            price: 500
        },
        {
            img: gheeImg,
            product: 'Ghee',
            price: 500
        },
        {
            img: gheeImg,
            product: 'Ghee',
            price: 500
        },
        {
            img: gheeImg,
            product: 'Ghee',
            price: 500
        },
        {
            img: gheeImg,
            product: 'Ghee',
            price: 500
        },
        {
            img: gheeImg,
            product: 'Ghee',
            price: 500
        }
    ]

    return (
        <div className='recent-product-main'>
            <div className="recent-product-wrapper">
                <h1>Recent Product From <span>Buniyadi</span></h1>
                <div className="recent-product-cart">
                    {recentproduct.map(product => (<div className='recent-product-cart-single'>
                        <div className='add-to-cart'>
                            <ul>
                                <li><img src={wishIcon} alt="" /></li>
                                <li><img className='add-to-cart-center-icon' src={cartIcon} alt="" /></li>
                                <li><img src={searchIcon} alt="" /></li>
                            </ul>
                        </div>
                        <div className='test-div1'>
                            <img src={product.img} alt="" />
                        </div>
                        <div className='test-div2'>
                            <p>{product.product}<br /><span>{product.price} tk</span></p>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default RecentProduct;