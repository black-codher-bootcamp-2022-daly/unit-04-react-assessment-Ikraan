import React from "react";
import Product from "./Product";

const ProductList = ({items,...props}) => {
    console.log(items);
    return(
        <>
        <h1>Suggestions..</h1> {" "}
        {(!products || products.length === 0)?(<h1>No items found...</h1>) : (
            products.map((product)=> (
                <Product 
                product= {product}
                id={product.trackId}
                key={product.trackId}
                name={product.trackName}
                {...props}
                thumbnail={product.artworkUrl100}
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
export default ProductList;

ProductList.prototypes = {
    product: PropTypes.array.isRequired
   
    }