import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./styles/Navbar.css"

const Navbar = () => {
  const { products } = useSelector(store => store.cart)
  const { token } = useSelector(store => store.userInfo)

  return (
    <nav className='navbar'>
      <div className="titlecontainer">
        <Link className='navbar__name' to="/"><h2>LaTiendita </h2></Link>
        <i className='navbar__icon bx bxs-store'></i>
      </div>
      <div className='navbar__containerLinks'>
        <Link className='navbar__link' to="/login"><i className='bx bx-user'></i></Link>
        <Link className='navbar__link' to="/purchases"><i className='bx bx-box'></i></Link>
        <Link className='navbar__link' to="/cart"><i className='bx bx-cart'></i>{token ? <span>{products.length}</span> : ""}</Link>
      </div>
    </nav>
  )
}

export default Navbar