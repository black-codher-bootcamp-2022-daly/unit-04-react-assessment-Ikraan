// import React from "react";
// import Product from "./Product";

// export const Posts = ({ posts, loading }) => {
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }
//   return (
//     <ul className="lists mb-4">
//       {posts.map((post) => (
//         <li key={trackId} className="lists-item">
//           {trackName}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const Pagination = ({ postsPerPage, totalPosts, nextPage, previousPage }) => {
//   const pageNumbers = [];

//   for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
//     pageNumbers.push(index);
//   }

//   return (
//     <ul className="paginate">
//       {pageNumbers.map((number) => (
//         <li key={number} className="page-item">
//           <a
//             onClick={() => Pagination(number)}
//             href="!#"
//             className="page-link"
//           ></a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Pagination;
