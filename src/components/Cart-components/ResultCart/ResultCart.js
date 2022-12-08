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
            <div className='price'>
                <span>À vista</span>
                <h4>R${parseFloat(stateTotal - stateTotal * 15 / 100).toFixed(2)}</h4>
            </div>
            <div className='price2'>
                <h5>Em até 12x de R${parseFloat(stateTotal / 12).toFixed(2)}</h5>
            </div>
        </div>
    </div>
  )
}

export default ResultCart