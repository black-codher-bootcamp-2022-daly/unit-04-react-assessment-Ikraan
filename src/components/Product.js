import React from "react";
import Proptypes from "prop-types";

const Product = ({item,...props}) => {
  console.log(props)

  const {  trackName, trackId, artistName, trackPrice, artworkUrl100 } = item ;
  return (
    <div className="products" id={"product-container"}>
        <img src={artworkUrl100}
        alt={artistName} />
      <ul className="list">
        <h2>{trackName}</h2>
        <h2>{artistName}</h2>
        <h4 className="price">{trackPrice?"£"+trackPrice:"0"} </h4>
      <div className="buttons">
        {item.inBasket ? 
      <button  id="remove-button" onClick={() => props.removeFromBasket(trackId)}> Remove</button> :
      <button  id="add-button" onClick={() => props.addToBasket(trackId)}> Add to basket</button>
        }
      </div></ul>
    </div>
  );
};

Product.propTypes = {
    trackPrice: Proptypes.number
}

export default Product;

