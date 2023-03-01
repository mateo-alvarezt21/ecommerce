import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import "./styles/Cart.css"
import { getAllCartProducts, purchaseCart } from '../store/slices/cart.slice'

const Cart = () => {

  const {products} = useSelector(store => store.cart)
  

  const dispatch = useDispatch()

  const totalPriceCart = products.reduce(
    (total, curr) => total + (curr.quantity * curr.product.price) ,0
    )

  const handlePurchaseCart = () =>{
    dispatch(purchaseCart())
  }

    useEffect(() => {
      dispatch(getAllCartProducts())
    }, [])
    
  return (
    <main>
      <section className='cart__list' > 
          {products.map((product) => <CartProduct key={product.id} product={product}/>)}
      
      </section>
      <hr />
      <section className='totalSection'>
        <div className='totalSection__section1'>
          <h3 className='totalSection__section1-title'>Total</h3>
          <h3 className='totalSection__section1-price'>$ {totalPriceCart}</h3>
        </div>
        <button className='totalSection__btn' onClick={handlePurchaseCart}>Checkout</button>
      </section>
    </main>
  )
}

export default Cart