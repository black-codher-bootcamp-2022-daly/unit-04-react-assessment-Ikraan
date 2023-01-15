import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";

const Basket = ({ basket, basketTotal,...props }) => {
  // const { removeFromBasket } = props;
  const count = basket = basket.length;
  // console.log(basket);

  return (
    <div className="basket"> <h1>Basket: </h1>
    <BasketCount basketCount={count} />
    { (count > 0 ? 
    basket.map(item => <Product key={item.trackId} item={item} {...props} /> ):
           <div className="empty">Sorry, no items in basket...</div>)}
           <BasketTotal basketTotal={basketTotal} />
    </div>
  );}

Basket.propTypes = {
  basket: PropTypes.array.isRequired
}

export default Basket;
