import React from "react";
import Product from "./Product";
import PropTypes from 'prop-types';


const ProductList = ({items,...props}) => {
  console.log(items);
  return(
      <>
      <h1>Suggestions..</h1> {" "}
      {(!items || items.length === 0)?(<h1>No items found...</h1>) : (
          items.map((items)=> (
              <Product 
              product= {items}
              id={items.trackId}
              key={items.trackId}
              name={items.trackName}
              {...props}
              thumbnail={items.artworkUrl100}
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
  item: PropTypes.array.isRequired
 
  }