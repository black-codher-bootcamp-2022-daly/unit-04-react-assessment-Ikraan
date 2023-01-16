import React from "react";
import Product from "./Product";
import PropTypes from 'prop-types';


const ProductList = ({items,...props}) => {
    console.log(items);
    return(
        <>
        <div id="search-result">
        <h1>Suggestions..</h1>
        {        
        ( items.length===0) ? 
          (<div className="empty">No items found...</div>) :
            (items
              .map(item => (<Product 
                key={item.trackId} 
                item={item} 
                id={item.trackId}
                {...props}
                thumbnail={product.artworkUrl100}
                price={props.trackPrice}
                currency={props.currency}
                addToBasket={props.addToBasket}

                />)
            )          
            )
              }
        </div>
        </>
    );
};

ProductList.propTypes = {
    items: PropTypes.array.isRequired
  }
  

export default ProductList;