import React , {useEffect} from 'react';
import './Product.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';


function Product({ id , title , image , price , ratings}) {

    const [{}, dispatch] = useStateValue();

    // ? dispatch the item into the data layer
    useEffect(() => {
        dispatch(
            {
                type:'ALL_PRODUCTS',
                products:{
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                    ratings:ratings
                }
            }
        )
    }, [dispatch, id, image, price, ratings, title])
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
        <div className="product">
            <div className="product__info">
                <p className="product__name">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            <div className="product__ratings">
            {
                Array(ratings)
                .fill()
                .map(()=>(
                   <p role="img">⭐</p>
                ))
            }
            </div>
            </div>

            <img
                alt="product__image"
                className="product__image" 
                src={image}
            />

            <button className="product__button" onClick={addToBasket}><span><ShoppingCartIcon style={{padding:'1px',marginTop:'3px'}} /></span>Add to Cart</button>
        </div>
    )
}

export default Product
