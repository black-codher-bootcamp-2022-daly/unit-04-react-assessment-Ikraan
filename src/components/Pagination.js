import React, { useState } from 'react';


const Pagination = ({ postsPerPage, totalPosts, nextPage, previousPage }) => {
    const pageNumbers = [];
  
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
      pageNumbers.push(index);
    }
  
    return (
      <div className="pag-container">
        <ul className="paginate">
          <li onClick={previousPage} className="page-number">
            ...Previous page
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => Pagination(number)}
              className="page-number"
            >
              {number}
            </li>
          ))}
          <li onClick={nextPage} className="page-number">
            Next page...
          </li>
        </ul>
      </div>
    );
  };