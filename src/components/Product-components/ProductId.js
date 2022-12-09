import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductId.css';
import './responsive.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action';


const ProductId = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        function getProduct() {
            // axios.get(`http://10.147.17.182:8000/products/${id}`)
            axios.get(`https://techshop-backend.onrender.com/products/${id}`)
                .then(response => {
                    // console.log(response.data.founded);
                    setProduct(response.data.founded);
                });
        }
        getProduct();
    }, [])

    const addProduct = () => {
        dispatch(addCart(product))
    }

    return (
        <div className='container-productId'>
            <div className='image'>
                <img src={`https://techshop-backend.onrender.com/img/${product.image}`} />
            </div>
            <div className='info'>
                <h2>{product.title}</h2>
                <p className='description'>{product.desc}</p>
                <div className='price1' style={{ color: '#00a000' }}>
                    <p>À vista</p>
                    <p>R${parseFloat(product.price - product.price * 15 / 100).toFixed(2)}</p>
                </div>
                <div className='price2'>
                    <p className='card-price2'>12x de R${parseFloat(product.price / 12).toFixed(2)} sem juros</p>
                </div>
                <div className='button'>
                    <button className='btn btn-success' onClick={() => addProduct()}>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductId