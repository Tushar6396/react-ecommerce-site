import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Styles/Shop.css'


function Shop() {
  const [data, setData] = useState([])

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

  return (
    <>
      <h1 className='heading'>Products Available</h1>
      <div className="products">
        {data.map((product) => {
          const { id, title, category, description, image, price } = product;
          return <div
            id={id}
            className="card" 
            key={id} >

              <h2 className="category">{category.toUpperCase()}</h2>
              <h3 className='title'>{title.toUpperCase().slice(1,20)}</h3>
              <img src={image} alt="" className='image' 
              style={{ maxWidth: '150%', maxHeight: '100px' }}/>
              <p className="description">{description.slice(1,90)}</p>
              <p className='price'><b>Price: {price}</b></p>
              <button className='btn'>Add To Cart</button>

            </div>  
        })}
      </div>
    </>
  )
}

export default Shop
