export const initialState = {
    products:[],
    basket:[],
    user:null,
    searchTitle:null
}

// this is called Selector

export const getBasketTotal = (basket) =>
    basket?.reduce((product,totalPrice)=> Number(totalPrice.price) + Number(product) , 0);


const reducer = (state, action) =>{
    switch(action.type){

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[]
            }

        case 'ALL_PRODUCTS':
            return{
                ...state,
                products:[...state.products, action.products],
            };

        case 'CLEAR_PRODUCTS':
            return{
                ...state,
                products:[]
            }

        case 'ADD_TO_BASKET':
        return {
            ...state,
            basket:[...state.basket ,action.item]
        };

        case "REMOVE_FROM_BASKET":
            // ? this gets you the current index you are in using the findIndex
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if(index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    'Cant remove product as its not in basket !'
                )
            }

            return {
                ...state,
                basket:newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user:action.user
            }

        // ! Search Component

        case "SEARCH_VALUE":
            return{
                ...state,
                searchTitle:action.searchTitle
            }

        default:
            return state;
    }
};  

export default reducer