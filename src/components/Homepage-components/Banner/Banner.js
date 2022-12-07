import React from 'react';
import './Banner.css';
import './responsive.css';
import bannerImage from '../../../assets/banner.jpg';


const Banner = () => {
    return (
        <div className='Banner-component'>
            <div className='container-banner'>
                <img src={bannerImage} alt="banner" draggable={false} />
            </div>
        </div>
    )
}

export default Banner