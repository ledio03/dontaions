import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton"

function DhuroPara({ isAuth }) {
  const [price, setPrice] = useState(1);
  const [show, setShow] = useState(true);
  const product = {
    desc: "Donated money",
    price,
  }

  useEffect(() => {
    if (!show) {
      setShow(true);
    }
  }, [show]);

  return (
    <div>
      <p className='paypalTxt text-center'>Dhuro para me anë të PayPal</p>
      <div className='text-center m-4'>
        <p className='display-5' style={{ 'color': 'tomato' }}>Vendos shumën</p>
        <input
          type={'number'}
          min="0"
          value={price.toString()}
          onChange={(e) => {
            setPrice(parseInt(e.target.value))
            setShow(false);
          }} id='val' style={{ 'borderWidth': '3px', 'borderRadius': '15px' }} className='m-4' />
      </div>
      <div className='paypalImg'>
        {show && (
          <PaypalCheckoutButton product={product} />
        )}
      </div>
    </div>
  );
}

export default DhuroPara;