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

  const [product, setProducts] = useState(data.slice(0,10));
  const [basket, setBasket] = useState([]);
  const [term, setTerm] = useState(' ');
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  function moreData(currentCount) {
    if (currentCount ===data.length - 10) setLoadMore(false);
    return setProducts((currentItems) => [
      ...currentItems,
      ...data.slice(currentCount, currentCount + 10),
    ])
  }

  useEffect(()=> {
  }, [term]);

  function addToBasket(trackId) {
   
    product.forEach((items) => {
      if (items.trackId === trackId) {
        product.inBasket = true;
        setBasket((prev) => [...prev, product]);

        if (product.trackPrice) {
          setTotal(parseFloat(total + product.trackPrice));
        } else {
          setTotal(total + 0);
        }
      }
      setCount(count + 1);
    });
  }
  
  function removeFromBasket(trackId) {
    const removeFromCart = [];
    basket.forEach((product) => {
      if (product.trackId !== trackId) {
        removeFromCart.push(product);
      } else {
        product.inBasket = !product.inBasket;
        if (product.trackPrice) {
          setTotal(parseFloat(total - product.trackPrice));
        }
        return product;
      }
    });

    setBasket(removeFromCart);
    setCount(count - 1);
  }

  async function search(value) {
    console.log("find books that got clicked", value);
    const results = await fetch(`https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`).then((res) => res.json());
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
    return(
      <>
      <BasketCount />
      <Basket 
      basket={basket}
      addToBasket={addToBasket}
      removeFromBasket={removeFromBasket}
      basketTotal={total}
      basketCount={count} />
      </>
    );
  }

  function Home() {
    return (
      <Container>
        <Search term={term} setTerm={setTerm} search={search} />
        <ProductList
          items={product}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          basketCount={data.length}
        />
        {loadMore && (
          <button
            className="load-more-button"
            onClick={() => moreData(product.length)}
          >
            Load More Products
          </button>
        )}
      </Container>
    );
  }
  return (
    <Router>
      <div className="App">
        <Header itemCount={count} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/basket" element={<BasketList />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;