import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Products.css';
import './responsive.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products);
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        function getProducts() {
            axios.get('https://10.147.17.182:8000/products')
                .then(response => {
                    // console.log(response.data.products);
                    setProducts(response.data.products);
                    setFilter(response.data.products);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getProducts();
    }, [])

    const filterProduct = (cat) => {
        function getByCategory(value) {
            if (value.category === cat) {
                return value;
            }
        }

        const updatedList = products.filter(getByCategory);
        setFilter(updatedList);
    }


    const handleClick = (product) => {
        cart.push(product);
        // console.log(cart);
        dispatch({
            type: 'CART',
            payload: cart
        })
    }


    return (
        <div className='Products-component'>
            <div className='container-products'>

                <div className='cards'>
                    <div className='title'>
                        <button className='btn btn-outline-dark' onClick={() => setFilter(products)}>Todos Produtos</button>
                        <button className='btn btn-outline-dark' onClick={() => filterProduct("Hardware")}>Hardware</button>
                        <button className='btn btn-outline-dark' onClick={() => filterProduct("TV")}>Televisores</button>
                        <button className='btn btn-outline-dark' onClick={() => filterProduct("Jogos")}>Jogos</button>
                        <button className='btn btn-outline-dark' onClick={() => filterProduct("Celulares")}>Celulares</button>
                        <button className='btn btn-outline-dark' onClick={() => filterProduct("Periféricos")}>Periféricos</button>
                    </div>
                    <div className='container-cards'>
                        {filter.map((product) => (
                            <Card product={product} key={product._id} handleClick={handleClick} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products