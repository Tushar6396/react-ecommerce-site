import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'

function Cart() {

  const { cart } = useContext(ShopContext)

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : ( 
        <div>
          {cart.map((item) => (
            <div className='cart-item' key={item.title}>
            <h3>{item.title}</h3>
            <img src={item.image} alt="" />
            <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default Cart
