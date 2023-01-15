import React from 'react';
let formatter = new Intl.NumberFormat ('en-GB',{
        style: "currency",
        currency: "GBP"
});

const BasketTotal = (props) => {
    console.log(props.basketTotal);
return (<div className='total'>{formatter.format(Math.abs(props.basketTotal))}
    </div>
); }

export default BasketTotal;