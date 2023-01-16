import React from "react";
import Product from "./Product";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";

const Basket = ({ basket, basketTotal,...props }) => {
  // const { removeFromBasket } = props;
  const count = basket = basket.length;
  // console.log(basket);

  return (
    <>
      {!basket || basket.length === 0 ? (
        <div className="empty">Sorry, no items in basket...</div>
      ) : (
        basket.map((item) => (
          <div className="product" key={item.trackId}>
            <Product
              item={item}
              kind={item.kind}
              name={item.trackName}
              thumbnail={item.artworkUrl100}
              currency={item.currency}
              price={item.trackPrice}
              inBasket={item.inBasket}
              removeFromBasket={removeFromBasket}
            />
          </div>
        ))
      )}
    </>
  );
};

Basket.propTypes = {
  basket: PropTypes.array.isRequired
}

export default Basket;