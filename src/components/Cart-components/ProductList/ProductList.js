import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './ProductList.css';
import './responsive.css';
import { useSelector } from 'react-redux';
import ResultCart from '../ResultCart/ResultCart';


const ProductList = () => {
    const products = useSelector((state) => state.handleCart);
    const [total, setTotal] = useState('');
    // console.log(products);
    
    useEffect(() => {
        function getTotal() {
            let total = [];
            products.map((product) => {
                total.push(product.price)
                let sum = total.reduce((accumulator, value) => {
                    return accumulator + value;
                }, 0);
                setTotal(sum);
            })
        }
        getTotal();
    }, [total])
    
    // console.log(total);


    return (
        <div>
            <div className='container-productList'>
                <div className='products'>
                    {products.map((product) => (
                        <Product product={product} key={product._id} />
                    ))}
                </div>
                <div className='total'>
                    <ResultCart total ={total} />
                </div>
            </div>
        </div>
    )
}

export default ProductList