import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slice/cartSlice";

const Cart = () => {
  //   const items = useSelector(getItemsSelector);
  const items = useSelector((state) => state.cart);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="alert alert-success mt-5">
      <h3 className="text-center">
        Total Items: {items.length} (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart;
