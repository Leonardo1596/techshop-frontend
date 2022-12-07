import React from 'react';
import './Footer.css';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className='Footer-component'>
      <div className='container-footer'>
        &copy; {year} Todos os direitos reservados
      </div>
    </div>
  )
}

export default Footer