import React from 'react';
import './Login.css';
import imageLogin from '../../../assets/login.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/action';
import { setUser } from '../../../redux/action';


const Login = () => {
  const dispatch = useDispatch();

  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let body = {
      email: email,
      password: password
    };

    axios.post('http://10.147.17.182:8000/auth/sign-in', body)
      .then(response => {
        console.log(response.data);
        if (response.data.message === 'Successfully signed') {
          dispatch(setAuth(true))
          dispatch(setUser(response.data.userProfile));
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='Login-component'>
      <div className='container-login'>
        <div className='image'>
          <img src={imageLogin} width="400" />
        </div>

        <div className='loginBox'>
          <h2>Login</h2>
          <div className='form'>
            <input type="email" placeholder="Email" id="email" name="email" required />
            <input type="password" placeholder="Password" id="password" name="password" required />
            <button className='btn btn-primary' onClick={login}>Login</button>
            <div className='reset-password'>
              <Link to="/reset">Reset Password</Link>
            </div>
            <p>-- or --</p>
          </div>
          <button className='btn btn-google'><FaGoogle color='#fff' /> Login With Google</button>
          <span className='register'>
            <p>Don't have an account? <Link to="/cadastro">Register</Link></p>

          </span>
        </div>
      </div>
    </div>
  )
}

export default Login