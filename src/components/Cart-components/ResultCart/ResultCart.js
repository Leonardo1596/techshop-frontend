import React, { useEffect } from 'react';
import './ResultCart.css';
import './responsive.css';
import { useSelector } from 'react-redux';


const ResultCart = ({ total }) => {
    const stateTotal = useSelector((state) => state.handleTotal);
    useEffect(() => {
      
    }, [stateTotal])
    console.log(stateTotal);
    

  return (
    <div className='ResultCart-component'>
        <div className='container-resultCart'>
            <div className='result'>
                <h2>Resultado</h2>
            </div>
            <div className='total'>
                <h2>Total</h2>
                <h2>R${stateTotal}</h2>
            </div>
        </div>
    </div>
  )
}

export default ResultCart