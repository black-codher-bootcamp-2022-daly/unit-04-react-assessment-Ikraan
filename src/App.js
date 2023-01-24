import "./styles/App.css";
import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import Basket from "./components/Basket";
import Header from "./components/Header";
import About from "./pages/About";
// import Pagination from "./components/Pagination";
// import axios from "axios";
// import { Posts } from "./components/Pagination";





function App() {
  const [items, setItems] = useState(data);
  const [basket, setBasket] = useState([]);
  const [term, setTerm] = useState("");
  const [total, setTotal] = useState(0);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(20);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get("./models/data.json");
  //     setPosts(res.data);
  //     setLoading(false);
  //   };
  //   fetchPosts();
  // }, []);

  // const indexOfLastPage = currentPage * postsPerPage;
  // const indexOfFirstPage = indexOfLastPage - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

  // const Pagination = () => setCurrentPage(pageNumber);

  const addToBasket = (id) => {
    setBasket(basket.concat(items.filter((item) => item.trackId === id)));
    setItems([
      ...items.map((item) => {
        if (item.trackId === id) {
          item.inBasket = true;
          setTotal(total + item.trackPrice);
        }
        return item;
      }),
    ]);
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter((item) => item.trackId !== id));
    setItems([
      ...items.map((item) => {
        if (item.trackId === id) {
          item.inBasket = false;
          setTotal(total - item.trackPrice);
        }
        return item;
      }),
    ]);
  };

  async function search(value) {
    const results = await fetch(
      `https://itunes.apple.com/search?term=${value}&limit=50&explicit=no`
    ).then((res) => res.json());
    if (!results.error) {
      setItems(
        results.results.filter(
          (result) =>
            result.trackName &&
            basket.findIndex((item) => result.id === item.trackId) === -1
        )
      );
    }
  }

  useEffect(() => {
    let basketCount =
      `Basket: ${basket.length} item` + (basket.length === 1 ? "" : "s");
    document.title = basketCount;
    document.getElementById("basketlink").innerText = basketCount;
  });

  // function addpage() {
  //   setPostsPerPage(nextPage + 1);
  // }

  // function minusPage() {
  //   setPostsPerPage(previousPage - 1);
  // }

  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Fragment>
                  <img src="headerimg.jpg" alt="img" className="banner" />
                  <Header />
                  <Search term={term} search={search} setTerm={setTerm} />
                  <ProductList
                    items={items}
                    addToBasket={addToBasket}
                    removeFromBasket={removeFromBasket}
                    itemCount={items.length}
                  />
                </Fragment>
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/basket"
              element={
                <Fragment>
                  <Header />
                  <Basket
                    basket={basket}
                    addToBasket={addToBasket}
                    removeFromBasket={removeFromBasket}
                    basketTotal={total}
                  />
                  {/* <Posts posts={currentPosts} loading={loading} />
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    Pagination={Pagination}
                  /> */}
                </Fragment>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
