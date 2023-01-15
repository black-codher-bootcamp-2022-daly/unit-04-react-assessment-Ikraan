import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({item,...props}) => {
    console.log(item);
    return(
        <>
        <h1>Suggested For You</h1>
        {(!item || item.length === 0)?(<h1>No items found...</h1>) : (
            item.map((item)=> (
                <Product 
                item={item}
                id={item.trackId}
                key={item.trackId}
                name={item.trackName}
                {...props}
                thumbnail={item.artworkUrl100}
                price={props.trackPrice}
                currency={props.currency}
                addToBasket={props.addToBasket}
                />

            )          
            )
        )}
        </>
    );
};

ProductList.prototypes = {
    product: PropTypes.array.isRequired
   }

   
export default ProductList;

