import React, { useEffect } from 'react';
import './Search.css';
import SearchProduct from './SearchProduct';
import { useStateValue } from './StateProvider';

function Search() {
    const [{products , searchTitle},dispatch] = useStateValue();

    // ? Clearing out the Products when leaving Page

    useEffect(() => {
        return () => {
            dispatch(
                {
                    type:'CLEAR_PRODUCTS'
                }
            )
        }
    },[dispatch])

    // ? filtering the Product

    var product = products.filter( (item) => {
        return item.title.toLowerCase().includes(searchTitle)
    });

    console.log(product);

    return (
        <div className="search">
        
            <h2>Your Results </h2>
                {
                    product.map(item=>(
                        <SearchProduct
                        key={item.id} 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        ratings={item.ratings}
                        />
                    ))
            }
        </div>
    )
}

export default Search
