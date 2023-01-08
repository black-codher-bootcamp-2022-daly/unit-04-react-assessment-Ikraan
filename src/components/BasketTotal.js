import React from 'react';

const BasketTotal = (props) => {
    console.log(props.BasketTotal);
    let formatter = new Intl.NumberFormat ('en-GB',{
        style: "currency",
        currency: "GBP"
    })
    return <h1 className='total'>{props.basketTotal}
    </h1>
}

export default BasketTotal;