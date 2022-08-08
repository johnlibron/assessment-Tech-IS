import React from "react";

import { BiChevronLeftCircle } from "react-icons/bi";

import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <ul className={classes.products}>
      {props.products.map((product) => (
        <li
          onClick={props.onShowProductDetail.bind(null, product)}
          key={product.id}
        >
          <img src={product.image} alt={product.title} />
          <div className={classes.title}>{product.title}</div>
          <BiChevronLeftCircle size={40} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
