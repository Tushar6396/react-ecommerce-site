import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Styles/Shop.css'

function Shop() {
  const [data, setData] = useState([])

  const getApiData = async() => {
    const res = await axios.get('https://fakestoreapi.com/products')
    setData(res.data)
  }

  useEffect(() => {
    getApiData()
  },[])

  return (
    <>
      <h1 className='heading'>Products Available</h1>
      <div className="products">
        {data.map((post) => {
          const { id, title, category, description, image, price } = post;
          return <div className="card" key={id}>
              <h2 className="category">{category.toUpperCase()}</h2>
              <h3 className='title'>{title.toUpperCase().slice(1,30)}</h3>
              <img src={image} alt="" className='image' 
              style={{ maxWidth: '100%', maxHeight: '100px' }}/>
              <p className="description">{description.slice(1,100)}</p>
              <span className='price'>Price: {price}</span>
            </div>  
        })}
      </div>
    </>
  )
}

export default Shop
