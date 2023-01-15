import './styles/App.css';
import React, {Fragment, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import data from './models/data.json';
import ProductList from './components/ProductList';
import Search from './components/Search';
import Basket from './components/Basket';
import BasketCount from './components/BasketCount';
import Header from './components/Header';
import About from './pages/About';
import BasketTotal from './components/BasketTotal';
import Pagination from './components/Pagination';

function App() {
  const [items, setItems] = useState(data);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [term, setTerm] = useState("");
  const [count, setCount] = useState(0);

  const addToBasket = (id) => {
    setBasket(basket.concat(items.filter(item => item.trackId === id)));
    setItems([...items.map(item => {
      if (item.trackId === id) {
        item.inBasket = true;
        setTotal(total + item.trackPrice);
      }
      return item;
    }
    )]);
  }

  const removeFromBasket = (id) => {
    setBasket(basket.filter(item => item.trackId !== id));
    setItems([...items.map(item => {
      if (item.trackId === id) {
        item.inBasket = false;
        setTotal(total - item.trackPrice);
      }
      return item;
    }
    )]);
  }
  // console.log(products);

  async function search(value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;
    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setItems(
        results.results.filter(
          (result) =>
            result.trackName &&
            basket.findIndex((product) => result.id === product.trackId) === -1));
    }}
  
  useEffect(() => {
    let basketCount = `Basket: ${basket.length} item` + (basket.length ===1?"":"s");
    document.title = basketCount;
    document.getElementById("basketlink").innerText = basketCount;
  });

  // function BasketList() {
  //   return (
  //     <>
  //       <BasketCount />
  //       <Basket
  //         basket={basket}
  //         addToBasket={addToBasket}
  //         removeFromBasket={removeFromBasket}
  //         basketTotal={total}
  //         basketCount={count}
  //       />
  //       <div class="totalPrice">Total Price: <BasketTotal basketTotal={basketTotal} /></div>
  //     </>
      
  //   );
  // }

  // function Home() {
  //   return (
  //     <>
  //       <Search term={term} setTerm={setTerm} search={search}></Search>
  //       {products ? (
  //         <div className="product-content-section">
  //           <Pagination
  //             postPerPage={postPerPage}
  //             totalPosts={productsPost.length}
  //             Pagination={Pagination}
  //             previousPage={previousPage}
  //             nextPage={nextPage}
  //           />
  //           <ProductList
  //             items={currentPosts}
  //             addToBasket={addToBasket}
  //             removeFromBasket={removeFromBasket}
  //             itemCount={data.length}
  //           />
  //         </div>
  //       ) : (
  //         <div>Loading....</div>
  //       )}
  //       {items.length === 0 && "Sorry, no items in basket..."}
  //     </>
  //   );
  // }
  return (
    <Router>
      <div className="container">
        <h1 className="Media">Media Store</h1>
        <Header itemCount={count}></Header>
        <img src="headerimg.jpg" alt="image" className="HeaderImg" />
        <Routes>
        <Route exact path="/" element={
            <Fragment>
              <Header />
              <Search term={term} search={search} setTerm={setTerm}/>
              <ProductList items={items} addToBasket={addToBasket} removeFromBasket={removeFromBasket} itemCount={items.length} />
            </Fragment>
          } />
          <Route path="/basket" element={
            <Fragment>
              <Header />
              <Basket basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} basketTotal={total} />
            </Fragment>
          } />
          <Route path="/about" element={ <About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;