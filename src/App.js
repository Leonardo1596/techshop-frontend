import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Favoritos from './pages/favourites/Favourites';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import Reset from './pages/auth/Reset/Reset';
import Cart from './pages/cart/Cart';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import Product from './pages/product/Product';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { PersistGate } from 'redux-persist/integration/react';


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favoritos' element={
              <PrivateRoute login='login'>
                <Favoritos />
              </PrivateRoute>
            }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Register />} />
            <Route path='/recuperar-senha' element={<Reset />} />
            <Route path='/carrinho' element={<Cart />} />
            <Route path='/produtos/:id' element={<Product />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App