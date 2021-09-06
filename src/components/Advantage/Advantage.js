import React from 'react';
import amonChal from '../../assets/images/amon-chal-1.jpg';
import khejurGur from '../../assets/images/khejur-gurr.jpg';
import khejur from '../../assets/images/khejur.jpg';
import moshla from '../../assets/images/mosla.jpg';
import './Advantage.scss';

const Advantage = () => {

    const blog = [
        {
            img: khejur,
            title: 'রমজানের গুরুত্ব ও ফজিলত',
            date: '১১ এপ্রিল ২০২১ ',
            description: 'মাহে রমজান অন্য সকল মাস অপেক্ষা উত্তম ও তাৎপর্যপূর্ণ'
        },
        {
            img: moshla,
            title: 'মশলার সাতকাহন',
            date: '১১ এপ্রিল ২০২১ ',
            description: 'ভালো রান্না করা একটি শিল্প । তবে ভালো রান্না করতে শিল্পীর যেমন ...'
        },
        {
            img: amonChal,
            title: 'লাল আমন চাল',
            date: '১১ এপ্রিল ২০২১ ',
            description: 'বাংলাদেশ একটি কৃষি প্রধান দেশ । এখানে বেশিরভাগ কৃষকই কম বেশি ধান ....'
        }, {
            img: khejurGur,
            title: 'খেজুর গুঁড় নিয়ে যত কথা',
            date: '১১ এপ্রিল ২০২১ ',
            description: 'দিনবদলের পরিক্রমায় বাংলায় চলে এসেছে শীতকাল । শীতকাল আসলেই মানুষের ...'
        },
        {
            img: moshla,
            title: 'মশলার সাতকাহন',
            date: '১১ এপ্রিল ২০২১ ',
            description: 'ভালো রান্না করা একটি শিল্প । তবে ভালো রান্না করতে শিল্পীর যেমন ...'
        },
        {
            img: amonChal,
            title: 'লাল আমন চাল',
            date: '১১ এপ্রিল ২০২১ ',
            description: 'বাংলাদেশ একটি কৃষি প্রধান দেশ । এখানে বেশিরভাগ কৃষকই কম বেশি ধান ....'
        }
    ]

    return (
        <div className='advantage-main'>
            <div className="advantage-wrapper">
                <h1 className='section-headline'>Advantage of <span>Buniyadi</span></h1>
                <div className='advantage-carts'>
                    {
                        blog.map(blog => (<div className='advantage-single-carts'>
                            <div className='blog-img'>
                                <img src={blog.img} alt="" />
                            </div>
                            <div className='blog-content'>
                                <h3>{blog.title}</h3>
                                <p>{blog.date}</p>
                                <p>{blog.description}</p>
                                <button>Read More</button>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Advantage;