import React from 'react';
import Banner from '../../components/Homepage-components/Banner/Banner';
import Products from '../../components/Homepage-components/Products/Products';
import Header from '../../components/Header/Header';
import './Home.css';


const Home = () => {
  return (
    <div className='Home-page'>
      <Banner />
      <Products />
    </div>
  )
}

export default Home