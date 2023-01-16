import React from "react";

function Search (props) {
    const {search,term, setTerm} = props;


function handleSubmit(e) {
    props.search(props.term);
    setTerm(e.target.value);
}
function onSubmit(event) {
    event.preventDefault();
    props.search(props.term);
}
return (
  <form className="Search" id="searchAPI">
    <p style={{ color: "red" }}>
      <em>{term && "Keywords Typed: " + term}</em> </p>
    <input
      className="input"
      type="text"
      id="term"
      value={props.term}
      onSubmit={handleSubmit}
      autoFocus="autoFocus"
      placeholder="Search items here..."
    />

    <button className="Submit-btn" type="submit" onClick={onSubmit}>
      Find
    </button>
  </form>
);
};


export default Search;