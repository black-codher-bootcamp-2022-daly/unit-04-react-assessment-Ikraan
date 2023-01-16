import React from "react";

function BasketCount(props) {
    console.log(props.basketCount);
    return (
      <div className="count">
        <h1 className="items-basket">Basket</h1>
        {props.basketCount}
      </div>
    );
  }
export default BasketCount;