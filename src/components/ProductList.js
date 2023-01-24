import React from "react";
import Product from "./Product";
import PropTypes from 'prop-types';


const ProductList = ({items,...props}) => {

    return (
      <div className="results">
        <h2>Suggested For You
        </h2>
        
          {        
          ( items.length===0) ? 
            (<div className="empty">No items found...</div>) :
              (items
                .map(item => ( <Product key={item.trackId} item={item} {...props}/>)
            )
          )
          }
      </div>
    );
  }
  
  ProductList.propTypes = {
    items: PropTypes.array.isRequired
  }
export default ProductList;
