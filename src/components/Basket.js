import React from "react";
import Product from "./Product";

const Basket = ({ basket, BasketCount, BasketTotal, ...props }) => {
  const { removeFromBasket } = props;
  console.log(basket);

  return (
    <>
      {!basket || basket.length === 0 ? (
        <div className="empty">No items found</div>
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
      <div className="totalBalance">Total: £ {props.basketTotal}</div>
    </>
  );
};
export default Basket;
