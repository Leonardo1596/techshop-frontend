import React from 'react';
import './Register.css';
import imageRegister from '../../../assets/register.png';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Register = () => {
  function register() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let body = {
      email: email,
      username: username,
      password: password,
      confirmPassword: confirmPassword
    };

    axios.post('http://10.147.17.182:8000/auth/sign-up', body)
      .then(response => {
        console.log(response);
        if (response.data.message === 'Successfully registered') {
          window.location.href = '/login';
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='Register-component'>
      <div className='container-register'>
        <div className='registerBox'>
          <h2>Register</h2>
          <div className='form'>
            <input type="email" placeholder="Email" id="email" name="email" required />
            <input type="text" placeholder="Username" id="username" name="username" required />
            <input type="password" placeholder="Password" id="password" name="password" required />
            <input type="password" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" required />
            <button className='btn btn-primary' onClick={register}>Register</button>
          </div>
          <span className='register'>
            <p>Already an account? <Link to="/register">Login</Link></p>
          </span>
        </div>
        <div className='image'>
          <img src={imageRegister} width="400" />
        </div>
      </div>
    </div>
  )
}

export default Register