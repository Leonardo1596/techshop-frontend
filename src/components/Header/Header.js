import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import './responsive.css';
import { FaShoppingCart, FaHeart, FaHome } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from '../../redux/action';
import ShowOnLogin from '../ShowOnLogin/ShowOnLogin';
import HideOnLogin from '../HideOnLogin/HideOnLogin';


const logo = (
  <div className='logo'>
    <Link to="/">
      <h2>
        Tech<span>shop</span>
      </h2>
    </Link>
  </div>
)


const Header = () => {
  const dispatch = useDispatch();
  const stateCart = useSelector((state) => state.handleCart);

  useEffect(() => {
    
  }, [stateCart])
  

  function logout() {
    dispatch(setAuth(false))
    dispatch(setUser(''));
  }


  return (
    <div className='Header-component'>
      <div className='container-header'>
        <div className='left-side'>
          {logo}
          <nav>
            <span>
              <NavLink to="/">
                Início
              </NavLink>
            </span>
            <span>
              <NavLink to="/favoritos">
                Meus Favoritos
              </NavLink>
            </span>
          </nav>
          <div className='nav-icons'>
            <Link to="/"><FaHome size={22} className="icon me-3"/></Link>
            <Link to="/favoritos"><FaHeart className="icon" size={20}/></Link>
          </div>
        </div>
        <div className='header-right'>
          <HideOnLogin>
            <span className='links'>
              <NavLink to="/login">Entrar</NavLink>
            </span>
            <span className='links'>
              <NavLink to="/cadastro">Cadastro</NavLink>
            </span>
          </HideOnLogin>
          <ShowOnLogin>
            <span className='links' onClick={logout}>
              <Link>Logout</Link>
            </span>
          </ShowOnLogin>
          <div className='menu-icon'>
            <span className='cart' >
              <NavLink to="/carrinho">

                <span className='cart-label'>Carrinho</span>
                <FaShoppingCart className='cart-icon' size={20} />
                <p>{stateCart.length}</p>
              </NavLink>
            </span>
            <GiHamburgerMenu className='hamburger-icon' size={20} data-bs-toggle='offcanvas' data-bs-target='#offcanvasScrolling' />
          </div>
        </div>




        <div className="offcanvas offcanvas-end text-bg-dark" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <p>Try scrolling the rest of the page to see this option in action.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header