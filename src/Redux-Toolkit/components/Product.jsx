import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "18rem;", margin: "10px" }}>
      <img className="card-img-top" src={props.image} alt={props.productName} />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">Rs. {props.price}/-</p>
        <button
          onClick={(e) => dispatch(addItem(props))}
          className="btn btn-primary"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
