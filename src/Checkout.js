import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket, user}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout___left">
                <img
                    className="checkout__add"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout__image"
                />
                <div>
                    {/* NOTE : if you remove the ? from the user?.email the component freaks out and gives you the errror */}
                    <h3>{user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                        <div>
                            {
                                basket.map(item => (
                                    <CheckoutProduct 
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        ratings={item.ratings}
                                    />
                                ))
                            }
                        </div>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
