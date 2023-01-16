import React from "react";
import Product from "./Product";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";

function Basket ({ basket, basketCount,basketTotal,removeFromBasket,...props }) {
  // const { removeFromBasket } = props;
  const count = basket = basket.length;
  // console.log(basket);

  return (
    <div>
      <h1>Basket</h1>

      <BasketCount basketCount={basketCount} />
      {!basket || basket.length === 0 ? (
        <div className="empty">Sorry, no items in basket...</div>
      ) : (
        basket.map((product) => (
          <div className="basket" key={product.trackId}>
            <Product
              product={product}
              key={product.trackId}
              inBasket={product.inBasket}
              removeFromBasket={removeFromBasket}
            />
          </div>
        ))
      )}

      <h2 className="basket-total">
        Total: £
        {basketTotal === 0 ? `0:00` : <BasketTotal basketTotal={basketTotal} />}
      </h2>
    </div>
  );
}

export default Basket;