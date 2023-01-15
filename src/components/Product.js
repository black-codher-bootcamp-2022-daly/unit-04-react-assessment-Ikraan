import react from "react";
import Proptypes from "prop-types";
import App from "../App.";

const Product = ({item,...props}) => {
const longDescription = {};  
console.log(props)

  const {  trackName, trackId, artistName, trackPrice, artworkUrl100 } = item;
  return (
    <div className="products" id={"product-container"}>
        <img src={artworkUrl100}
        alt={artistName} />
      <ul className="list">
        <h2 title={trackName}> {trackName && trackName.length>50 ? trackName.substring(0,50)+ "...": trackName} </h2>
        <h2 title={artistName}> {artistName && artistName.length>50 ? artistName.substring(0,50)+ "...": artistName}</h2>
        <p className="price">{trackPrice?"£"+trackPrice:"0"} </p>
        <p className="description">{longDescription? longDescription.substring(0,300)+ "...":" "}</p>
      </ul>
      <div className="buttons">
        {item.inBasket ? 
      <button  id="remove-button" onClick={() => props.removeFromBasket(trackId)}> Remove</button> :
      <button  id="add-button" onClick={() => props.addToBasket(trackId)}> Add to basket</button>
        }
      </div>
    </div>
  );
};

Product.propTypes = {
  item: Proptypes.object.isRequired
}

export default Product;