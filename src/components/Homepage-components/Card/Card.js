import React from 'react';
import './Card.css';
import './responsive.css';
import { useDispatch } from 'react-redux';
import { addCart, setTotal } from '../../../redux/action';
import { Link } from 'react-router-dom';


const Card = ({ product }) => {
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
        dispatch(setTotal(product.price));
    }


    return (
        <div className='Card-component'>
            <div className='container-card'>
                <div className="card">
                    {/* <Link to={`/produtos/${product._id}`}><img src={`http://10.147.17.182:8000/img/${product.image}`} className="card-img-top" alt={product.title} draggable={false} /></Link> */}
                    <Link to={`/produtos/${product._id}`}><img src={`https://techshop-backend.onrender.com/img/${product.image}`} className="card-img-top" alt={product.title} draggable={false} /></Link>
                    <div className="card-body">
                        <Link to={`/produtos/${product._id}`}><h5 className="card-title">{product.title.length > 35 ? product.title.substring(0, 35) + '...' : product.title}</h5></Link>
                        <p className='card-price'>{`R$ ${parseFloat(product.price - product.price * 15 / 100).toFixed(2)} à vista`}</p>
                        <p className='card-price2'>{`12x de R$ ${parseFloat(product.price / 12).toFixed(2)} sem juros`}</p>
                    </div>
                </div>
                <button onClick={() => addProduct(product)} className="btn">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default Card