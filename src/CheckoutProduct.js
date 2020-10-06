import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id , title , image , price , ratings,hideButton}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img 
                className="checkoutProduct__image"
                src={image}
                alt="checkProduct__image"
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p><small>$</small> {price} </p>
                <div className="checkoutProduct__ratings">
                {Array(ratings)
                    .fill()
                    .map(()=>(
                    <p role="img" className="checkoutProduct__ratingsStar">⭐</p>
                ))}
                </div>
                {!hideButton && (
                    <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove Your Item</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct