import React from "react";
import BasketProduct from "../BasketProduct/BasketProduct";
import { useStateValue } from "../StateProvider";
import SubTotal from "../SubTotal/SubTotal";
import "./CartItems.css"
const CartItems = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="CartItems">
      <div className="Cartitems__leftPart">
        {basket?.length === 0 ? (
          <div>
            <h2>Your cart is empty</h2>
          </div>
        ) : (
          <div>
            <h2>Your shoping basket</h2>
            <hr style={{width:"100%"}} />
            <div className="shopping__items">
              {basket?.map((item) => (
                <BasketProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      
      {
        basket?.length>0 &&(
          <div className="CartItems__rightPart">
              <SubTotal/>
          </div>
        )
      }


    </div>
  );
};

export default CartItems;
