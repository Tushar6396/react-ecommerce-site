import React, { useContext, useState } from 'react'
import './Styles/Cart.css'
import { ShopContext } from './ShopContext'

function Cart() {

  const { cart, clearCart } = useContext(ShopContext)
  const [itemCount, setItemCount] = useState(1);

  const handleIncreaseCount = () => {
    setItemCount((prevCount) => prevCount + 1)
  }

  const handleDecreaseCount = () => {
    if (itemCount === 1) {
      return
    }
    setItemCount((prevCount) => prevCount - 1)
  }

  return (
    <div className='cart-component'>
      {cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : ( 
        <div className='cart-container'>
          {cart.map((item) => (
            <>
              <div className='cart-card'>
                <div className='cart-item' key={item.title}>
                  <h3>{item.title}</h3>
                  <img src={item.image} alt="" />
                  <p>Price: ${item.price}</p>
                  </div>
                <div className="counter">
                  <button className='decrese-btn' onClick={handleDecreaseCount}>-</button>
                  <span>{itemCount}</span>
                  <button className='increase-btn' onClick={handleIncreaseCount}>+</button>
                </div>          
              </div>
            </>
          ))}
          <div className="remove-btn">
                  <button onClick={clearCart}>Clear Cart</button>
          </div> 

        </div>
      )}

    </div>
  )
}

export default Cart
