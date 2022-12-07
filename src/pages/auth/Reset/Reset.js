import React from 'react';
import './Reset.css';
import { Link } from 'react-router-dom';
import imageReset from '../../../assets/forgot.png';

const Reset = () => {
  return (
    <div className='Reset-component'>
      <div className='container-reset'>
      <div className='image'>
          <img src={imageReset} width="400" />
        </div>
        <div className='resetBox'>
          <h2>Register</h2>
          <div className='form'>
            <input type="email" placeholder="Email" required />
            <button className='btn btn-primary'>Reset Password</button>
          </div>
          <div className='links'>
            <p>
              <Link to="/login">- Login</Link>
              </p>
            <p>
              <Link to="/register">- Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reset