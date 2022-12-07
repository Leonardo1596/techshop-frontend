import React from 'react';
import './Loader.css';
import imageLoader from '../../assets/loader.gif';

const Loader = () => {
  return (
    <div className='Loader-component'>
        <div className='container-loader'>
            <div className='loader'>
                <img src={imageLoader} />
            </div>
        </div>
    </div>
  )
}

export default Loader