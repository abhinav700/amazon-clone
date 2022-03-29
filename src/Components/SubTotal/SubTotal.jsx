import React from "react";
import "./SubTotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../../reducer";

const SubTotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="subTotal">
      <p>
        Subtotal ({basket.length} items) : <strong>{`$ ${getBasketTotal(basket)} `}</strong>
      </p>
        <small className="subTotal__gift">
          <input type="checkbox" />
          This order contains a gift
        </small>

      <button className="subTotal__proceed">Proceed to checkout</button>
    </div>
  );
};

export default SubTotal;
