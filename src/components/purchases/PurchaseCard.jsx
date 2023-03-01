import React from 'react'
import { formatDateDDMMYYYY } from '../../utils/date'
import "./style/PurchaseCard.css"

const PurchaseCard = ({purchase}) => {

    return (
        <div className="container">
            <article className='purchase-container'>
                <div className='purchase'>
                    <div className='purchase__img'>
                        <img src={purchase.product.images[0].url} alt="" />
                    </div>
                    <h4 className='purchase__title'>{purchase.product.title}</h4>
                </div>
                <div className='purchase__data'>
                    <h4 className='purchase__date'>{formatDateDDMMYYYY(purchase.createdAt)}</h4>
                    <div className='purchase__quantity'>
                        <h4>{purchase.quantity}</h4>
                    </div>
                    <h4 className='purchase__price'>$ {purchase.product.price}</h4>
                </div>
            </article>
        </div>
    )
}

export default PurchaseCard