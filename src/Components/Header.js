import React from 'react'
import './Styles/Header.css'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

function Header() {
  return (
    <nav id='navbar'className='navbar'>
        <h2>Shop <span>Zone</span></h2>
        <NavLink to='/'className='shop' > Shop </NavLink>
        <NavLink to='/cart' className='cartIcon'> <ShoppingCartIcon /> </NavLink>
    </nav>
  )
}

export default Header
