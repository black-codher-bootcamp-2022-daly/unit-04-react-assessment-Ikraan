import React from "react";

const BasketCount = (props) => {

    return (
    <div className="basket-count">
       {props.BasketCount!== 1? `${props.basketCount} item`:`${props.basketCount} items`}
    </div>
    );
}

export default BasketCount;