import React , {useState} from "react";
import "./Header.css";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{basket,user},dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }

  // ? search Input

  var [searchInputValue, setSearchInputValue] = useState('');
  
  const searchChangeHandler = (e) =>{
    e.preventDefault();
    setSearchInputValue(e.target.value);
  }
  
  // ! remember to enclose the setState into what to want to do with it !
  const searchClickHandler = () =>{
    dispatch(
      {
        type:"SEARCH_VALUE",
        searchTitle:searchInputValue
      }
    )
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header__logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" value={searchInputValue} onChange={searchChangeHandler} />
        <Link to="/search">
        <button onClick={searchClickHandler} style={{border:'0',backgroundColor:'#ffbb62',borderRadius:'2px'}}><span><SearchRoundedIcon className="header__searchIcon" /></span></button>
        </Link>
      </div>
      <div className="header__nav">
      <Link to={!user&&'./login'}>
        <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">{user ? user?.email : 'Hello Guest'}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out':'Sign In'}</span>          
        </div>
        </Link>
        <Link to="/orders">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne"> Try </span>
          <span className="header__optionLineTwo"> Prime </span>
        </div>
      </div>
      <Link to="/checkout">
      <div className="header__cart">
          <ShoppingCartIcon className="header__cartIcon" style={{color:'black'}} />
          <span className="header__optionLineTwo header__cartCount">{basket?.length}</span>
      </div>
      </Link>
    </div>
  );
}

export default Header;
