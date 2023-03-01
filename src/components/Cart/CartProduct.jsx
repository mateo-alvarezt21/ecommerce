import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCart, updateProductCart } from '../../store/slices/cart.slice'

const CartProduct = ({product}) => {

    const dispatch = useDispatch()

    const handleDeleteCartProduct = () => {
        dispatch(deleteProductCart(product.id))
    }
    const handleClickPlus = () =>{
        const newQuantity = product.quantity + 1
        const data = {
            quantity: newQuantity
        }
        dispatch(updateProductCart(product.id, data))
    }
    const handleClickLess = () =>{
        const newQuantity = product.quantity - 1
        if(newQuantity <= 0){
            dispatch(deleteProductCart(product.id))
        }else{
            const data = {
                quantity: newQuantity
            }
            dispatch(updateProductCart(product.id, data))
        }
    }



    return (
        <article className='cardProduct'>

            <div className="cardProduct__firstsection">
                <div className="cardProduct__containerimg">
                    <div className='cardProduct__img'>
                        <img src={product.product.images[0].url} alt="" />
                    </div>
                </div>
                <section className='cardProduct__section1'>
                    <h3 className='cardProduct__section1-title'>{product.product.title}</h3>
                    <div className='cardProduct__counter'>
                        <button onClick={handleClickLess}>-</button>
                        <h3>{product.quantity}</h3>
                        <button onClick={handleClickPlus}>+</button>
                    </div>
                </section>
            </div>
            <section className='cardProduct__section2'>
                <i onClick={handleDeleteCartProduct} className=' cardProduct__delete bx bx-trash'></i>
                <h3 className='cardProduct__total-title'>Total</h3>
                <h3 className='cardProduct__totalPrice'>$ {product.quantity * product.product.price}</h3>
            </section>
        </article>
    )
}

export default CartProduct