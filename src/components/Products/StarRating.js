import React from "react";

import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";

import classes from "./StarRating.module.css";

const StarRating = (props) => {
  const value = parseInt(props.rate);
  const decimal = props.rate - Math.floor(props.rate);
  const stars = Array.from({ length: 5 }, (_, i) => (
    <MdStarOutline key={i + 1} />
  ));

  for (var i = 0; i < value; i++) {
    stars[i] = <MdStar key={i} />;
  }

  if (decimal !== 0.0) {
    stars[value] = <MdStarHalf key={value} />;
  }

  return (
    <div className={classes["star-rating"]}>
      {stars} ({props.count})
    </div>
  );
};

export default StarRating;
