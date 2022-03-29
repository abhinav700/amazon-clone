import React from "react";
import "./BasketProduct.css";
import { useStateValue } from "../StateProvider";

const BasketProduct = (props) => {
  const [{basket}, dispatch]=useStateValue();
  const removeFromBasket=()=>{
      dispatch({
        type:"REMOVE_FROM_BASKET",
        id:props.id
      });
  }
  return (
    <div className="BasketProduct">

      <img
        className="BasketProduct__image"
        src={props.image}
        alt="image not available"
      />

      <div className="BasketProduct__leftPart">
      <p className="BasketProduct__title">{props.title}</p>



      <div className="BasketProduct__price">
        <small>$</small>
        <strong>{props.price}</strong>
      </div>

    

      <div className="BasketProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
      </div>

      <button onClick={removeFromBasket} className="removeFromBasket">Remove From Basket</button>


        </div>
    </div>
  );
};

export default BasketProduct;
