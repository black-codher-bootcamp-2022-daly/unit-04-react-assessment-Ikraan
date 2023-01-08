import react from "react";
import Proptypes from "prop-types";
import App from "../App";

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
      </ul>
      <div className="buttons">
        {item.inBasket ? 
      <button  id="add-button" onClick={() => props.removeFromBasket(trackId)}> Remove</button> :
      <button  id="add-button" onClick={() => props.addToBasket(trackId)}> Add to basket</button>
        }
      </div>
    </div>
  );
};

export default Product;

// Product.propTypes = {
//     trackPrice: Proptypes.number
// }