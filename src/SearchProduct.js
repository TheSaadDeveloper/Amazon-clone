import React from 'react';
import './SearchProduct.css';
import { useStateValue } from './StateProvider';

function SearchProduct( {id , title , image , price , ratings}) {
    const [{basket},dispatch] = useStateValue();

    const addToBasket = () =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                ratings:ratings,
            }
        })
    }
    return (
        <div className="searchProduct">
            <img 
                className="searchProduct__image"
                src={image}
                alt="search__image"
            />

            <div className="searchProduct__info">
                <p className="searchProduct__title">{title}</p>
                <p><small>$</small> {price} </p>
                <div className="searchProduct__ratings">
                {Array(ratings)
                    .fill()
                    .map(()=>(
                    <p role="img" className="searchProduct__ratingsStar">⭐</p>
                ))}
                </div>
                <button className="checkoutProduct__button" onClick={addToBasket}>ADD TO BASKET</button>
            </div>
        </div>
    )
}

export default SearchProduct
