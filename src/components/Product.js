import react from "react";
import Proptypes from "prop-types";
import App from "../App";

function Product({product,...props}) {
    const {artistName,trackName,trackPrice,trackId,kind,artworkUrl100,longDescription,artistId,inBasket} = Product;
    
        return (
    <div className='productInfo'>
        <img src={artworkUrl100}
        alt={trackName && artistName}></img>
        <ul className="product-info">
            <h2>{trackName}</h2>
            <h2>{artistName}</h2>
            {trackPrice ? <h3 className="price"> £ {trackPrice} </h3> : <h3>-</h3>}
            {kind !== "song" && (
          <p className="long-description">
            {longDescription
              && `${longDescription.substring(0, 500)}... `} </p>
            )}
        </ul>
        <button id="add-button" onClick = {()=> props.addToBasket (trackId ? trackId : artistId)}>
            {props.inBasket ? "Remove" : "Add to Basket"} Add to Basket </button>
        </div>
    
);
};

Product.propTypes = {
    items: PropTypes.shape({
      artistName: PropTypes.string.isRequired,
      artistId: PropTypes.number,
      trackName: PropTypes.string.isRequired,
      trackId: PropTypes.number.isRequired,
      trackPrice: PropTypes.number.isRequired,
      artworkUrl100: PropTypes.string.isRequired,
    }),
  };

  export default Product;