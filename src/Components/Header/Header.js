import React from "react";
import logo from "../../utilities/amazon-logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "../StateProvider";
import {auth} from "../firebase"
const Header = () => {
  const [{basket,user}]=useStateValue();
  
  console.log(basket)
  const login=()=>{
     if(user)
     {
       auth.signOut();
     }
  }
  return (
  
    <div>
      {/* Edtiting the logo */}
      <nav className="header">
        <Link to="/">
          <img className="header__logo" src={logo} />
        </Link>

        {/* search bar */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        {/* right part of the navbar */}
        {/* 3 Links */}
        <div className="header__rightPart">
          <Link onClick={login} to={user && "/login"} className="header__link">
            <div className="header__item">
              <span className="header__item__option1">Hello Abhinav</span>
              <span className="header__item__option2">{user?"Sign Out":"Sign in"}</span>
            </div>
          </Link>

          <Link to="/" className="header__link">
            <div className="header__item">
              <span className="header__item__option1">Deals</span>
              <span className="header__item__option2">& Offers</span>
            </div>
          </Link>

          <Link to="/" className="header__link">
            <div className="header__item">
              <span className="header__item__option1">Prime</span>
              <span className="header__item__option2">Life</span>
            </div>
          </Link>

          {/* Placing the shoping basket icon along with no: of items*/}
          <Link to="/ShoppingCart">
            <div className="header__basketSection">
              {/* icon*/}
              <ShoppingBasketIcon className="header__basketIcon" />
              {/* no of items */}

                {/* we have added "?" after basket because it takes a small time to declare and assign variables
                  so it will treat basket as unassigned in case the variable is not loaded.
                   */}
                <span className="header__basket__itemsCount" style={{textDecoration:"none"}}>{basket?.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
