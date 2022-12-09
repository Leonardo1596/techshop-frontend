import React from 'react';
import './Product.css';
import './responsive.css';
import { useDispatch } from 'react-redux';
import { delCart, reduceTotal } from '../../../redux/action';


const Product = ({ product }) => {
    const dispatch = useDispatch();
    // console.log(product);

    function removeFromCart(product) {
        dispatch(delCart(product));
        dispatch(reduceTotal(product.price));
    }

    return (
        <div className='Product-component'>
            <div className='container-product'>
                <div className='header'>
                    <h5>Produto</h5>
                </div>
                <div className='product'>
                    <div className='image'>
                        <img src={`https://techshop-backend.onrender.com/img/${product.image}`} alt={product.title} />
                    </div>
                    <div className='informations'>
                        <div className='info'>
                            <p className='make'>{product.make}</p>
                            <p className='title'>{product.title}</p>
                            <p className='price'>{`R$ ${parseFloat(product.price - product.price * 15 / 100).toFixed(2)} à vista`}</p>
                            <span className='price2'>{`12x de R$ ${parseFloat(product.price / 12).toFixed(2)} sem juros`}</span>
                        </div>
                        <div className='quantity'>
                            <span>Quantidade</span>
                            <p>{product.qty}</p>
                            <button className='btn btn-danger' onClick={() => removeFromCart(product)}>Remover</button>
                        </div>
                        <div className='div-price'>
                            <p>Preço à vista</p>
                            <p className='price'>{`R$ ${parseFloat(product.price - product.price * 15 / 100).toFixed(2)}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
