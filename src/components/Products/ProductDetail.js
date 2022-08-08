import React, { Fragment } from "react";

import StarRating from "./StarRating";

import Button from "../UserInterface/Button";

import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  const rating = props.product["rating"];

  return (
    <div className={classes.product}>
      <p>${props.product["price"]}</p>
      <p>{props.product["description"]}</p>
      <p>
        <StarRating {...rating} />
      </p>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ProductDetail;
