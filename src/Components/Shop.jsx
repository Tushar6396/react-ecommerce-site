import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import './Styles/Shop.css'
import { ShopContext } from './ShopContext';


function Shop() {
  const [data, setData] = useState([])
  const { addToCart } = useContext(ShopContext)

  const getApiData = async() => {
    try{
      const res = await axios.get('https://fakestoreapi.com/products')
      setData(res.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getApiData()
  },[])

  function handleAddToCart(product) {
    addToCart(product)
  }

  return (
    <>
      <h1 className='heading'>Products Available</h1>
      <div className="products">
        {data.map((product) => {
          const { id, title, category, image, price } = product;
        

          return <div
            id={id}
            className="card" 
            key={product.id} >

              <h2 className="category">{category.toUpperCase()}</h2>
              
              <img src={image} alt="" className='image' 
              style={{ maxWidth: '150%', maxHeight: '100px' }}/>
              
              <h3 className='title'>{title.toUpperCase().slice(1,20)}</h3>

              <p className='price'><b>Price: ${price}</b></p>
              
              <button className='btn'
              onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>

            </div>  
        })}
      </div>
    </>
  )
}

export default Shop
