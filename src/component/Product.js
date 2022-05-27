import React, {useState} from 'react';
import ErrorBoundary from './ErrorBoundary';
import './Product.css';

const Product = () => {
    const [order, setOrder] = useState(1);

    const changeOrderHandler = () =>{
        setOrder(order+1);
    };

    if(order > 5){
        throw new Error('Order Limit Over')
    }

    return(
        <div>
        <div className='list-product'>
            <ErrorBoundary>
            <ul>
                <li>
                    <h5>Nasi Goreng</h5>
                    <p>Rp 10000</p>
                    <p>order: {order}</p>
                    <button onClick={changeOrderHandler}>Order</button>
                </li>
                <li>
                    <h5>Ayam Goreng</h5>
                    <p>Rp 15000</p>
                    <p>order: {order}</p>
                    <button onClick={changeOrderHandler}>Order</button>
                </li>
                <li>
                    <h5>Es Teh</h5>
                    <p>Rp 3000</p>
                    <p>order: {order}</p>
                    <button onClick={changeOrderHandler}>Order</button>
                </li>
            </ul>
            </ErrorBoundary>
        </div>
            <button className='back-home'><a href='/'>Back Home</a></button>
        </div>
    )
}

export default Product;