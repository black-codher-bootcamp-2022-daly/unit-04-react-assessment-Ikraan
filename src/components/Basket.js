import React from "react";
import Product from "./Product";
import BasketTotal from "./BasketTotal";
import BasketCount from "./BasketCount";

function Basket ({ basket,basketTotal,basketCount, removeFromBasket, ...props }) {
    console.log(basket);
    const count = basket.length;
    const { removeFromBasket } = props;

    return (
        <><h2>Basket</h2>
        <BasketCount basketCount={count}/>
        {basket.length > 0 ? (
            basket.map((product) => (
                <div className="product"
                 key={product.trackId}>
              <Product item={product} 
              key={product.trackId} 
              inBasket={product.inBasket} 
              removeFromBasket={removeFromBasket} />
              </div>
            ))
         
        ) : (
          <div className="empty">Sorry, no items in basket...</div>
        ) }
        <BasketTotal basketTotal={basketTotal} />
      </>
    );
}
export default Basket;