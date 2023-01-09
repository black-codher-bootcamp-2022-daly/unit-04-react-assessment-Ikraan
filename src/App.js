import './styles/App.css';
import React, {Fragment, useState} from 'react';
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
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [term, setTerm] = useState("");
  const [count, setCount] = useState(0);

const Pagination = (pageNumber) => {
  setCurrentPage(pageNumber);
}
const previousPage = () => {
  if (currentPage !== 1) {
    setCurrentPage(currentPage - 1);
  }
};

const nextPage = () => {
  if (currentPage !== Math.ceil(productsPost.length / postPerPage)) {
    setCurrentPage(currentPage + 1);
  }
};

const basketTotal = basket.reduce(
  (accumulator, el) => accumulator + el.trackPrice,
  0
);

  function addToBasket(trackId) {
    products.map((product) => {
      if (product.trackId === trackId) {
        product.inBasket = true;
        console.log(product);
        setBasket((prev) => [...prev, product]);

        if (product.trackPrice) {
          setTotal(parseFloat(total + product.trackPrice));
        } else {
          setTotal(total + 0);
        }
      }
      console.log(setTotal);
      setCount(count + 1);
    });
  }

  function removeFromBasket(trackId) {
    const removeFromCart = [];
    basket.filter((products) => {
      if (products.trackId !== trackId) {
        removeFromCart.push(products);
      } else {
        products.trackId = !products.trackId;
        if (products.trackPrice) {
          setTotal(parseFloat(total - products.trackPrice));
        }
        return products;
      }
    });

    setBasket(removeFromCart);
    setCount(count - 1);
  }

  console.log(products);

  async function search(value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;
    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setProducts(
        results.results.filter(
          (result) =>
            result.trackName &&
            basket.findIndex((product) => result.id === product.trackId) === -1
        )
      );
    }
  }

  function BasketList() {
    return (
      <>
        <BasketCount />
        <Basket
          basket={basket}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          basketTotal={total}
          basketCount={count}
        />
        <div class="totalPrice">Total Price: <BasketTotal basketTotal={basketTotal} /></div>
      </>
      
    );
  }

  function Home() {
    return (
      <>
        <Search term={term} setTerm={setTerm} search={search}></Search>
        {productsPost ? (
          <div className="product-content-section">
            <Pagination
              postPerPage={postPerPage}
              totalPosts={productsPost.length}
              Pagination={Pagination}
              previousPage={previousPage}
              nextPage={nextPage}
            />
            <ProductList
              items={currentPosts}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
              itemCount={data.length}
            />
          </div>
        ) : (
          <div>Loading....</div>
        )}
        {items.length === 0 && "Sorry, no items in basket..."}
      </>
    );
  }
  return (
    <Router>
      <div className="App">
        <h1 className="Media">Media Store</h1>
        <Header itemCount={count}></Header>
        <img src="headerimg.jpg" alt="image" className="HeaderImg" />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/basket" element={<BasketProducts />}></Route>
        </Routes>
      </div>
    </Router>
  );
  }
export default App;