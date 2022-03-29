import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";
const Product = (props) => {
  const [{basket},dispatch]=useStateValue();
  const addToBasket=()=>{
    //dispatch is the gun through which shoot the bullet called "ADD_TO BASKET"
    //at the "Item"
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:props.id,
        title:props.title,
        price:props.price,
        rating:props.rating,
        image:props.image,
      }
    })
  }
  return (
    <>
      {/* 
    Attributes that we will be dealing with:-
    Product id,title, price,rating,image 
    */}

      <div className="product">
        <div className="product__upperPart">
          <p className="product__title">{props.title}</p>

          <p className="product__price" style={{ fontWeight: "700" }}>{`${props.price}$`}</p>

          <div className="product__rating">
            {Array(props.rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <div className="product__lowerPart">
          <img className="product__image" src={props.image} />
          <button onClick={addToBasket}>Add to basket</button>
        </div>
      </div>
    </>
  );
};

export default Product;
